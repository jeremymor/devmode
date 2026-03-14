-- DevMode Database Schema

-- Profiles table (extends Supabase Auth)
create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  username text unique not null,
  display_name text,
  avatar_url text,
  rank text default 'Curious',
  total_xp integer default 0,
  current_streak integer default 0,
  longest_streak integer default 0,
  last_active_date date,
  created_at timestamptz default now()
);

-- User progress per level
create table if not exists public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  level_id text not null,
  status text default 'unlocked' check (status in ('unlocked', 'in_progress', 'completed')),
  checklist_state jsonb default '{}',
  submission_url text,
  xp_earned integer default 0,
  started_at timestamptz,
  completed_at timestamptz,
  unique(user_id, level_id)
);

-- XP event log
create table if not exists public.xp_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  event_type text not null,
  xp_amount integer not null,
  level_id text,
  created_at timestamptz default now()
);

-- Indexes
create index if not exists idx_user_progress_user_id on public.user_progress(user_id);
create index if not exists idx_user_progress_level_id on public.user_progress(level_id);
create index if not exists idx_xp_events_user_id on public.xp_events(user_id);
create index if not exists idx_profiles_username on public.profiles(username);

-- RLS Policies
alter table public.profiles enable row level security;
alter table public.user_progress enable row level security;
alter table public.xp_events enable row level security;

-- Profiles: anyone can read, users can update own
create policy "Profiles are viewable by everyone" on public.profiles
  for select using (true);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

-- User progress: users can CRUD their own
create policy "Users can view own progress" on public.user_progress
  for select using (auth.uid() = user_id);

create policy "Users can insert own progress" on public.user_progress
  for insert with check (auth.uid() = user_id);

create policy "Users can update own progress" on public.user_progress
  for update using (auth.uid() = user_id);

-- XP events: users can read own, insert own
create policy "Users can view own XP events" on public.xp_events
  for select using (auth.uid() = user_id);

create policy "Users can insert own XP events" on public.xp_events
  for insert with check (auth.uid() = user_id);

-- Function to increment XP
create or replace function public.increment_xp(user_id_input uuid, amount integer)
returns void as $$
begin
  update public.profiles
  set total_xp = total_xp + amount
  where id = user_id_input;
end;
$$ language plpgsql security definer;

-- Trigger to auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username, display_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'username', 'user_' || substr(new.id::text, 1, 8)),
    coalesce(new.raw_user_meta_data->>'display_name', new.raw_user_meta_data->>'full_name'),
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
