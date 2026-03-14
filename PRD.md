# DevMode - Product Requirements Document

> **Learn software engineering by building. One level at a time.**
> 90 real projects. 8 tracks. Level up from zero to engineer.

**Status:** Draft v2 (post-interview)
**Created:** 2026-03-13
**Updated:** 2026-03-14
**Author:** Jeremy
**Domain:** learndevmode.xyz
**License:** Source-available

---

## 1. Vision

DevMode is a gamified, project-based software engineering curriculum. Instead of tutorials and theory, learners complete progressive levels — each one a real project they build from scratch using AI tools (Claude, Cursor, Copilot). The philosophy: **the best way to learn is to figure it out, start small, and build bigger.**

This is not "vibe coding" — it's a full engineering education. But it embraces AI-assisted development as the way real builders work today. Every level introduces a new concept by having you build something tangible. You start with Git and a static website and end up building full-stack platforms, mobile apps, AI agents, and systems-level tools.

**Taglines:**
- "Learn engineering by building"
- "Stop watching tutorials. Start building."
- "90 projects from zero to engineer"

---

## 2. Core Philosophy

1. **Learn by doing** — No video lectures. No reference apps. You get a brief and figure it out yourself.
2. **AI-assisted** — Use Claude, Cursor, Copilot — the tools real builders use. This is how engineering works now.
3. **Progressive complexity** — Start dead simple, each level adds one new concept. Don't skip levels — each one adds building blocks you need later.
4. **Ship it** — Every level ends with something deployable. Your project history grows as you learn.
5. **Choose your own project** — Each level offers 10 build ideas that rotate randomly. Same concepts, different projects — build what excites you.

---

## 3. Target Audience

- **Primary:** Aspiring builders, non-technical founders, and creatives who want to learn to build with AI (18-40)
- **Secondary:** Junior developers who want to level up their full-stack skills through practice
- **Tertiary:** Career changers, designers transitioning to code, indie hackers starting out

**User persona — "The Aspiring Builder":**
- Has ideas but doesn't know how to build them
- Has maybe tried a tutorial but never finished
- Wants to learn by doing, not by watching
- Comfortable using AI tools but doesn't know how to code from scratch
- Motivated by visible progress and tangible results

---

## 4. Platforms & Architecture

### Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **UI** | shadcn/ui + Tailwind CSS 4 |
| **Database** | Supabase (Postgres + Auth) |
| **Hosting** | Vercel |
| **Auth** | Supabase Auth (email + GitHub OAuth) |
| **Content** | Static MDX files in repo |
| **Analytics** | PostHog |

### Content Architecture

Level content (briefs, build ideas, concepts, hints, resource links) lives as **static MDX files** in the repo under `/content/levels/`. User data (progress, XP, submissions, streaks) lives in **Supabase**.

### Project Structure

```
devmode/
  app/
    (public)/                # Public-facing pages (no auth required)
      page.tsx               # Landing page
      tracks/
        page.tsx             # Dashboard hub — all 8 track cards
        [trackSlug]/
          page.tsx           # Track path — Duolingo-style level progression
      levels/
        [levelId]/
          page.tsx           # Level detail — brief, concepts, build idea, tech
    (auth)/
      login/page.tsx
      signup/page.tsx
    (app)/                   # Authenticated pages
      dashboard/page.tsx     # User dashboard — progress, streak, XP, rank
      levels/
        [levelId]/
          page.tsx           # Level workspace — brief, checklist, hints, resources
          submit/page.tsx    # Submit project URL + mark complete
      profile/
        page.tsx             # Own profile (game profile view)
      settings/page.tsx
    api/
      webhooks/
  components/
    ui/                      # shadcn components
    tracks/                  # Track map, level nodes, path visualization
    levels/                  # Level workspace components
    gamification/            # XP bar, rank badge, streak counter
    layout/                  # Nav, footer
  lib/
    supabase/
    utils/
    content.ts               # MDX content loading utilities
  content/
    levels/
      A0.mdx                 # One MDX file per level
      A1.mdx
      ...
```

---

## 5. The Level System

### How Levels Work

Each level follows this structure:

1. **The Brief** — What you're building and the concepts you'll learn (context, not instructions)
2. **Build Idea** — One of 10 project ideas displayed randomly. Hit "Give me another" to rotate. Same concept, different project.
3. **Concept Checklist** — Actionable items to implement (e.g., "Set up Supabase project", "Create a table", "Write a SELECT query"). Learner checks them off as they go.
4. **Hints & Tips** — Progressive hints they can reveal if stuck. Not full solutions, but nudges.
5. **Resource Links** — Curated links to relevant docs, tutorials, and tools.
6. **Submit** — Paste URL to deployed project. Honor system. Mark complete. Earn XP. Level up.

**There are no reference apps, example repos, or solutions.** Learners figure it out themselves — that's the point.

### Track Structure

Levels are organized into **Tracks** (themed learning paths). Track A is the core path — start here. Tracks B–H unlock as you progress through Track A.

---

## 6. Track A: Backend & Web (Core Path — Levels 0–23)

> From zero to platform engineer. This is the main path every learner follows.

| Level | Name | What You Build | Key Concepts | Tech |
|-------|------|----------------|-------------|------|
| A0 | **Git & Version Control** | A collaborative story project using branches, merging, and resolving conflicts | Git fundamentals, branches, merge conflicts, PRs, rebasing, `.gitignore` | Git + GitHub |
| A1 | **Static Site + Form Handler** | A personal portfolio site with a contact form that emails you | What a server does, HTTP methods, environment variables, deploying live | Next.js or Express.js |
| A2 | **CRUD App** | A todo app where items persist (don't disappear on refresh) | What a database is, CRUD operations, SQL/ORM basics, REST API design, frontend ↔ backend | Express or Next.js + Postgres |
| A3 | **Auth App** | A notes app where each user only sees their own notes | Authentication vs authorization, sessions/cookies/JWT, password hashing, protected routes, DB relationships | NextAuth, Lucia, or Clerk |
| A4 | **File Uploads** | An image gallery where users upload images and browse | File uploads, cloud storage (S3/R2/Supabase), image processing, pagination | S3-compatible storage |
| A5 | **Real-time App** | A group chat where messages appear instantly without refreshing | WebSockets, real-time events, broadcasting, online/offline presence, scaling | Socket.io, Partykit, or Supabase Realtime |
| A6 | **API + Third-Party Integrations** | A personal dashboard pulling weather, GitHub commits, calendar events | Consuming external APIs, OAuth, rate limiting, caching, background jobs, error handling | Redis + node-cron or Trigger.dev |
| A7 | **AI-Powered App** | An AI writing assistant with conversation history and streaming | LLM APIs (Claude), streaming responses (SSE), token tracking, prompt engineering, storing conversations | Claude API / Anthropic SDK |
| A8 | **Marketplace / SaaS** | A SaaS tool (invoice generator, resume builder) with free/paid tiers | Payments (Stripe), webhooks, role-based access, billing portals, transactional emails | Stripe + Resend |
| A9 | **Queue-Based App** | A video processing platform — upload now, get result later | Job queues, background workers, async processing, job status tracking, retry logic, horizontal scaling | BullMQ + Redis, or Inngest |
| A10 | **Full Platform** | A project management tool (mini Linear/Trello) with team workspaces | Multi-tenancy, complex schema design, role-based permissions, audit logs, migrations, performance at scale | Full stack + admin dashboard |
| A11 | **Search** | A recipe app or knowledge base with instant search across thousands of entries | Full-text search, search engines (Meilisearch/Typesense), indexing, faceted filtering, relevance ranking, debouncing | Meilisearch or Typesense + Postgres |
| A12 | **Notifications System** | A social feed app with follows, posts, and multi-channel notifications | Push notifications, notification channels, fan-out problem, read/unread state, event-driven architecture | Web Push + Novu or Knock |
| A13 | **Geolocation** | A delivery tracker or store finder with maps and real-time tracking | Geospatial queries, PostGIS, maps (Mapbox), real-time location, distance calculations, geofencing | PostGIS + Mapbox or Leaflet |
| A14 | **GraphQL API** | An e-commerce storefront with products, reviews, cart, and flexible querying | GraphQL vs REST, schemas/resolvers, N+1 problem, DataLoaders, nested relationships, API versioning | Apollo Server or Pothos + Postgres |
| A15 | **Testing & CI/CD** | Take your A8 SaaS app and make it production-grade with full tests + automated deploys | Unit/integration/e2e tests, test databases, mocking, CI pipelines (GitHub Actions), staging vs production | Vitest + Playwright + GitHub Actions |
| A16 | **Rate Limiting & Security** | A developer platform where others sign up, get API keys, and call your API | Rate limiting, API key management, throttling, CORS/CSRF, input validation, logging/monitoring, API docs (Swagger) | rate-limiter-flexible + Swagger UI |
| A17 | **Microservices** | A concert ticketing system with separate services for events, orders, payments, notifications | Microservices vs monolith, service communication (HTTP/gRPC/queues), message brokers, distributed transactions, Docker | Docker + RabbitMQ or Kafka |
| A18 | **Caching & Performance** | A Reddit/HackerNews clone that handles thousands of concurrent readers | Caching layers, cache invalidation, read replicas, connection pooling, load testing, query optimization, edge/CDN | Redis + k6 or Artillery |
| A19 | **Data Pipeline** | An analytics dashboard that ingests millions of events and shows real-time charts | Event ingestion at scale, time-series data, OLTP vs OLAP, ETL pipelines, data retention, pre-aggregation | ClickHouse or TimescaleDB |
| A20 | **Infrastructure as Code** | Deploy your A17 microservices app to the cloud with full infra automation | IaC (Terraform/Pulumi/SST), cloud services, container orchestration, secrets management, SSL/DNS, blue-green deploys, monitoring | Terraform or SST + AWS or Fly.io |
| A21 | **Observability** | Instrument a previous project with full observability — answer "why is it slow?" from dashboards | The three pillars (logs, metrics, traces), structured logging, distributed tracing, alerting, error tracking (Sentry) | OpenTelemetry + Grafana + Sentry |
| A22 | **Database Diversity** | A content platform using the right DB for each job — Postgres, Redis, MongoDB, Neo4j | Polyglot persistence, document DBs, graph DBs, key-value stores, column-oriented DBs, choosing the right DB | Postgres + MongoDB + Redis + Neo4j |
| A23 | **Feature Flags & Experimentation** | An A/B testing platform with gradual rollouts and feature toggles | Feature flags, gradual rollouts, A/B testing, user segmentation, kill switches | GrowthBook or custom flag service |

### Example Build Ideas per Level

Each level offers **10 project ideas** that rotate randomly. Learners see one idea at a time and can hit "Give me another" to cycle. Example for A2 (CRUD App):

1. Todo list with categories and due dates
2. Bookmark manager with tags and search
3. Personal expense tracker with monthly summaries
4. Movie/book watchlist with ratings and reviews
5. Recipe collection app with ingredients and steps
6. Habit tracker with daily check-ins
7. Simple inventory system for a small shop
8. Contact/CRM manager for freelancers
9. Workout log with exercises and sets
10. Plant care tracker with watering schedules

---

## 7. Track B: Algorithms & Data Structures (Levels 1–6)

> Build algorithmic thinking through real projects

| Level | Name | What You Build | Key Concepts | Tech |
|-------|------|----------------|-------------|------|
| B1 | **Array & String Challenges** | A CLI quiz game that scrambles words, checks anagrams, and scores the player | Arrays, strings, sorting, Big O, hash maps, two pointers, sliding window | Python or JS (no framework) |
| B2 | **Stacks & Queues** | A calculator with parentheses and operator precedence, or a Markdown-to-HTML converter | Stacks (LIFO), queues (FIFO), parsing, tokenization, recursion vs iteration | Pure Python or TypeScript |
| B3 | **Trees** | A visual file tree browser or org chart hierarchy | Tree data structures, tree traversal (DFS/BFS), recursion, parent-child DB relationships | Python/JS + simple UI |
| B4 | **Graphs** | A route planner (shortest path between cities) or social network "degrees of separation" | Graphs, BFS/DFS, Dijkstra's, adjacency lists vs matrices | Python + NetworkX or D3.js |
| B5 | **Dynamic Programming** | A budget optimizer (knapsack) or unbeatable tic-tac-toe AI | Dynamic programming, memoization vs tabulation, minimax algorithm | Pure Python |
| B6 | **Sorting & Searching at Scale** | A mini database engine that can search and range-query millions of records | B-trees, binary search, sorting tradeoffs, how indexing works, disk vs memory | Python or Rust |

---

## 8. Track C: Security & Compliance (Levels 1–8)

> Think like an attacker, build like a defender, ship like a regulated company

| Level | Name | What You Build | Key Concepts |
|-------|------|----------------|-------------|
| C1 | **Vulnerable App** | A deliberately insecure web app (mini OWASP Juice Shop) | SQL injection, XSS, CSRF, thinking like an attacker |
| C2 | **Fix It** | Take your C1 app and patch every vulnerability | Parameterized queries, CSP headers, CSRF tokens, HTTPS, dependency auditing |
| C3 | **Auth Deep Dive** | Your own OAuth2 authorization server | OAuth2 flows, PKCE, JWT deep dive, scopes, how "Login with Google" works |
| C4 | **Encryption** | An end-to-end encrypted messaging app | Symmetric vs asymmetric encryption, key exchange, hashing vs encryption |
| C5 | **Network Security** | A port scanner and packet analyzer (your own network only) | TCP/IP, ports, protocols, packet analysis, firewalls, ethical hacking |
| C6 | **CTF Challenges** | Solve 20+ CTF challenges, then build your own CTF platform | Reverse engineering, web exploitation, forensics, cryptography attacks |
| C7 | **Compliance & Privacy** | A GDPR-compliant user data platform with consent, export, and deletion | GDPR, SOC2, HIPAA basics, data retention, audit trails, privacy by design |
| C8 | **Supply Chain Security** | A secure CI/CD pipeline with dependency scanning and artifact signing | Supply chain attacks, SBOM, container scanning, code signing, secrets scanning |

---

## 9. Track D: Hardware & Robotics (Levels 1–7)

> From blinking LEDs to autonomous robots

| Level | Name | What You Build | Key Concepts |
|-------|------|----------------|-------------|
| D1 | **Blink & Sense** | Arduino LED controller + sensor reader | Digital vs analog signals, GPIO, serial communication, basic circuits |
| D2 | **Connected Device** | WiFi thermometer with web dashboard | IoT fundamentals, ESP32, MQTT protocol, bridging hardware and web |
| D3 | **Motor Control** | A wheeled robot you control from your phone | Motors (DC/servo/stepper), PWM, motor drivers, Bluetooth/WiFi control |
| D4 | **Autonomous Robot** | A line-following or obstacle-avoiding robot | Sensor fusion, PID control, decision loops (sense → think → act) |
| D5 | **Computer Vision Robot** | A Raspberry Pi face-tracking robot | Computer vision (OpenCV), camera modules, edge computing |
| D6 | **Home Automation** | A smart home system with rules and automation | Home automation protocols, relay modules, rule engines, scheduling |
| D7 | **Drone or Balancing Robot** | A self-balancing robot or basic quadcopter | IMU sensors, advanced PID, real-time control loops, Kalman filter basics |

---

## 10. Track E: Architectures & Platforms (Levels 1–24)

> Same backend skills, radically different shapes

| Level | Name | What You Build | Key Concepts |
|-------|------|----------------|-------------|
| E1 | **Headless CMS** | A blog where non-tech editors publish from a CMS dashboard | Headless CMS, SSG vs SSR, webhooks, CDN, content modeling |
| E2 | **Traditional CMS** | A small business website with drag-and-drop page builder | WordPress/Payload CMS, themes, plugins, WYSIWYG editors |
| E3 | **Admin Dashboard** | Internal tool for an e-commerce company — orders, sales charts, users | Admin panels, data tables, charts, bulk actions, audit logs |
| E4 | **Server-Rendered Monolith** | A classic forum with threads, replies, upvotes, moderation | MVC pattern, server-side rendering with templates, session-based auth |
| E5 | **SPA + REST API** | A Trello-like kanban board with drag-and-drop | SPA architecture, separate frontend/backend, CORS, JWT, API docs |
| E6 | **Serverless** | A link shortener handling millions of redirects | Serverless functions, cold starts, edge functions, vendor lock-in |
| E7 | **Mobile App + Shared Backend** | A fitness tracker (mobile + web, one backend) | Shared API for multiple clients, offline support, push notifications |
| E8 | **PWA** | An offline-first recipe book that syncs when online | Service workers, cache strategies, IndexedDB, background sync |
| E9 | **Desktop App** | A markdown editor or music player for Mac/Windows/Linux | Electron/Tauri, filesystem access, native menus, auto-updates, IPC |
| E10 | **Browser Extension** | A tab manager or web clipper with cross-device sync | Extension architecture, content/background scripts, Chrome Manifest V3 |
| E11 | **Event-Driven Architecture** | An e-commerce order processing system | Event-driven, message brokers, event sourcing, CQRS, saga pattern |
| E12 | **Multi-Tenant SaaS** | A Typeform-like form builder with per-customer subdomains | Multi-tenancy, subdomain routing, white-labeling, usage-based billing |
| E13 | **Monorepo Full Platform** | A Slack clone (web + desktop + mobile + API in one repo) | Monorepo, Turborepo/Nx, shared packages, design systems |
| E14 | **Plugin System** | A note-taking app (like Obsidian) with third-party plugins | Plugin architecture, sandboxed execution, plugin API design |
| E15 | **API Gateway + BFF** | A travel booking aggregator searching multiple providers | API gateway, BFF pattern, circuit breaker, GraphQL federation |
| E16 | **Headless E-Commerce** | A custom storefront with headless commerce backend | Headless commerce (Medusa/Shopify), cart/checkout, inventory, order lifecycle |
| E17 | **Streaming / Media** | A video course site with adaptive quality streaming | Media streaming (HLS/DASH), video transcoding, CDN, DRM, chunked uploads |
| E18 | **Low-Code / No-Code Builder** | A platform where users visually build apps without code | Visual programming, schema-driven UI, drag-and-drop, workflow engines |
| E19 | **Accessible App** | A government services portal (fully WCAG 2.2 compliant) | WCAG 2.2, semantic HTML, ARIA, keyboard nav, screen reader testing |
| E20 | **Internationalized App** | A marketplace in English, Spanish, Arabic (RTL), and Japanese | i18n/l10n, RTL layout, locale formatting, pluralization, translation workflows |
| E21 | **Web3 dApp** | A token-gated community or NFT gallery | Blockchain, smart contracts (Solidity), wallet connection, IPFS |
| E22 | **3D & Spatial** | An AR product viewer or virtual gallery | Three.js, 3D models (glTF), lighting, WebXR for AR |
| E23 | **Voice Interface** | A voice-controlled smart assistant | Speech-to-text (Whisper), text-to-speech, intent recognition |
| E24 | **Developer Tooling** | A CLI tool, custom linter, or code generator | CLI architecture, AST manipulation, npm publishing, semver |

---

## 11. Track F: AI & Machine Learning (Levels 1–8)

> From API calls to building intelligent systems

| Level | Name | What You Build | Key Concepts |
|-------|------|----------------|-------------|
| F1 | **RAG App** | Upload PDFs and ask questions — AI answers from YOUR documents | RAG, text chunking, embeddings, vector databases, semantic search, hallucination reduction |
| F2 | **AI Agent** | An agent that browses the web, calls APIs, and completes multi-step tasks | AI agents, tool use/function calling, ReAct pattern, agent memory, guardrails |
| F3 | **Semantic Search & Recommendations** | A "find similar" engine with personalized recommendations | Embeddings in depth, cosine similarity, hybrid search, collaborative filtering |
| F4 | **Fine-Tuning** | Fine-tune a model on your domain-specific data | Fine-tuning vs prompting vs RAG, training data prep, LoRA/QLoRA, evaluation |
| F5 | **Local AI** | A fully private AI assistant running on your machine | Open-source models (Llama/Mistral), quantization, Ollama, GPU vs CPU inference |
| F6 | **Computer Vision** | An app that identifies objects in photos | CNNs, classification vs detection vs segmentation, transfer learning |
| F7 | **ML Pipeline** | End-to-end: collect data → train → evaluate → deploy → monitor → retrain | ML lifecycle, feature engineering, experiment tracking, model serving, MLOps |
| F8 | **AI Safety & Evaluation** | A safety layer: content filtering, prompt injection detection, eval framework | Prompt injection, output validation, red-teaming, bias detection, responsible AI |

---

## 12. Track G: Systems & Low-Level (Levels 1–7)

> Understand what's happening under the hood

| Level | Name | What You Build | Key Concepts |
|-------|------|----------------|-------------|
| G1 | **CLI Tool** | A file organizer or task runner | CLI interfaces, filesystem ops, exit codes, piping, cross-platform |
| G2 | **Build a Shell** | Your own terminal shell with pipes and env vars | How shells work (read → parse → execute), fork/exec, file descriptors, signals |
| G3 | **HTTP Server** | A working HTTP server from raw sockets (no HTTP library) | TCP sockets, HTTP protocol by hand, connection handling, what Express/Nginx actually do |
| G4 | **Concurrency** | A multi-threaded web scraper crawling thousands of pages | Threads vs processes vs async, race conditions, mutexes, deadlocks, async/await deep dive |
| G5 | **Build a Database** | A persistent key-value store surviving restarts + concurrent access | Write-ahead log, SSTables, LSM trees, crash recovery, compaction |
| G6 | **Build an Interpreter** | A working interpreter for your own programming language | Lexing, parsing, AST evaluation, scope, call stacks |
| G7 | **OS Concepts** | A process scheduler or minimal OS kernel | Scheduling algorithms, memory management, system calls, context switching |

---

## 13. Track H: Game Development (Levels 1–6)

> Unique engineering patterns you won't learn anywhere else

| Level | Name | What You Build | Key Concepts |
|-------|------|----------------|-------------|
| H1 | **Terminal Game** | Snake or Tetris running in the terminal | Game loops, state machines, keyboard input, collision detection |
| H2 | **2D Browser Game** | A platformer or top-down RPG with enemies and collectibles | Canvas/WebGL rendering, game physics, sprite sheets, tile maps, cameras |
| H3 | **Multiplayer Game** | 2–8 players competing in real-time online | Authoritative server, client-side prediction, lag compensation, cheating prevention |
| H4 | **3D on the Web** | A first-person walker or racing game | 3D graphics (vertices, meshes, shaders), lighting, 3D physics |
| H5 | **Game Engine** | A reusable 2D game engine — then build 2 games with it | Entity-Component-System (ECS), separating engine from game, asset management |
| H6 | **Physics Simulation** | A physics sandbox with realistic collisions and stacking | Rigid body dynamics, collision algorithms (AABB/SAT/GJK), constraint solving |

---

## 14. Track Interleaving & Recommended Path

Track A is the backbone. Other tracks unlock as you progress through it:

| After completing... | You can start... |
|---------------------|-----------------|
| A0 (Git) | B1 (Algorithms), G1 (CLI Tool), H1 (Terminal Game) |
| A2 (CRUD) | D1 (Hardware), E1 (Headless CMS) |
| A3 (Auth) | C1 (Security) |
| A5 (Real-time) | H3 (Multiplayer Game) |
| A7 (AI App) | F1 (RAG), F2 (Agents) |
| A8 (SaaS) | E12 (Multi-tenant) |
| A10 (Full Platform) | E11 (Event-driven), E15 (API Gateway) |

---

## 15. Gamification & Progression

Gamification is **core to the product**, not an add-on. It's the differentiator that makes DevMode more than a curriculum website.

### XP System
- Complete a level: **100 XP base** + bonus for speed
- Each track milestone: **500 XP bonus**
- Daily login streak: **10 XP/day**

### Ranks
| XP Range | Rank |
|----------|------|
| 0–499 | Curious |
| 500–1,999 | Tinkerer |
| 2,000–4,999 | Builder |
| 5,000–9,999 | Maker |
| 10,000+ | Creator |

### Streaks & Motivation
- Daily build streak (consecutive days with progress)
- Level completion badges
- Track completion trophies

---

## 16. Key Pages & UX

### Access Model

All content is **public and SEO-indexable** — tracks, levels, briefs, build ideas, concepts. No auth wall for browsing. Signup is only required to:
- Track progress
- Submit projects
- Earn XP and rank up
- Have a profile

### Landing Page
- Hero: bold tagline + animated track path preview
- "See what you'll build" — scroll through level previews from all tracks
- Social proof: learner count, projects submitted
- CTA: "Start Level A0 — Free"

### Dashboard Hub (`/tracks`)
- **8 track cards** with progress bars, level counts, and color-coded themes
- All tracks visible from day one — locked tracks show requirements to unlock
- Track A highlighted with "Start Here" for new users
- Shows which tracks are unlocked based on your Track A progress

### Track Path (`/tracks/[slug]`)
- **Duolingo-style vertical path** with nodes for each level
- All levels visible with full details (name, concept, what you build) — even locked ones
- Level states: locked (gray), unlocked (available), in-progress (accent), completed (green + check)
- Connected by a winding path line

### Level Detail Page (`/levels/[id]`) — Public
- The brief: what you're building and concepts you'll learn
- Build idea: **one randomly displayed** with "Give me another" button to rotate through 10 options
- Tech stack for this level
- Prerequisites (which levels to complete first)
- CTA: "Start this level" (links to workspace if logged in, signup if not)

### Level Workspace (`/app/levels/[id]`) — Authenticated
The workspace is what learners see while actively working on a level. Coding happens in their own IDE (Cursor, VS Code, etc) — DevMode is the companion.

- **Brief** pinned at the top — what you're building and why
- **Build idea** displayed (with rotate button)
- **Concept checklist** — actionable items to implement, checkable as you go
- **Hints & tips** — progressive reveals when stuck (nudges, not solutions)
- **Resource links** — curated docs, tutorials, and tool links for this level's tech
- **Submit** button — paste URL to deployed project, mark complete

### User Dashboard (`/app/dashboard`) — Authenticated
- Current active levels across tracks
- Streak counter (days in a row)
- XP bar with current rank and progress to next rank
- Recent activity
- Quick "Continue" button for active level

### Profile (`/app/profile` + `/u/[username]`) — Game Profile
- **Game profile style** — rank badge, XP total, streak stats front and center
- Track progress visualization (which tracks started, how far in each)
- Level completion history with submitted project URLs
- Shareable public URL: `learndevmode.xyz/u/username`

---

## 17. MVP Scope (Phase 1)

Ship ASAP. Build with AI.

### In Scope
- [ ] Landing page with value prop and track preview
- [ ] Auth (email + GitHub OAuth via Supabase)
- [ ] Dashboard hub with all 8 track cards (Track A active, B–H show prerequisites)
- [ ] Track A Duolingo-style path (all 24 levels visible, first 8 playable)
- [ ] Track A levels A0–A7 content fully built out (from existing curriculum docs)
- [ ] Level detail page — brief, rotating build idea, tech stack, concepts
- [ ] Level workspace — brief, concept checklist, hints, resource links
- [ ] Project submission — paste URL, honor system, mark complete
- [ ] XP system — earn XP on completion, track total, calculate rank
- [ ] Streak tracking — daily progress tracking
- [ ] User dashboard — active levels, XP, rank, streak
- [ ] Public game profile with shareable URL
- [ ] Fully responsive (mobile + desktop) with shadcn/ui
- [ ] Dark mode default, Linear-like developer tool aesthetic

### Out of Scope (Phase 2+)
- Track A levels A8–A23 content
- Tracks B–H level content (track cards visible but levels empty)
- Community features (comments, discussion, help)
- Mobile app
- AI-powered code review
- Leaderboards
- Peer review
- Notifications / email

---

## 18. Design Principles

- **Developer tool aesthetic** — Clean, minimal, monochrome with accent colors. Linear-like polish. Not playful, not childish.
- **Dark mode default** — shadcn/ui foundation, dark theme as primary
- **Progress is visible everywhere** — XP bar in nav, streak in dashboard, level states on the path
- **Fully responsive** — People will discover DevMode on Twitter on their phones. First impression matters.
- **Fast** — Static MDX content, no loading spinners. Every page loads instantly.

### Color Language
| Element | Color Intent |
|---------|-------------|
| Locked levels | Muted/gray |
| Unlocked (available) | Subtle border, ready state |
| Current / in-progress | Primary accent (blue/purple) |
| Completed levels | Green with checkmark |
| XP / progress | Gold/amber |
| Each track | Distinct color theme |

---

## 19. Data Model

Level content lives in MDX files (static). User data lives in Supabase:

### Supabase Tables

```sql
-- User profile (extends Supabase Auth user)
profiles
  id (uuid, PK, references auth.users)
  username (text, unique)
  display_name (text)
  avatar_url (text)
  rank (text)              -- computed from total_xp
  total_xp (int, default 0)
  current_streak (int, default 0)
  longest_streak (int, default 0)
  last_active_date (date)  -- for streak calculation
  created_at (timestamptz)

-- User progress per level
user_progress
  id (uuid, PK)
  user_id (uuid, FK → profiles)
  level_id (text)           -- e.g. "A0", "A1", "B1" (matches MDX filename)
  status (text)             -- 'unlocked' | 'in_progress' | 'completed'
  checklist_state (jsonb)   -- which checklist items are checked
  submission_url (text)     -- URL to deployed project
  xp_earned (int)
  started_at (timestamptz)
  completed_at (timestamptz)
  UNIQUE(user_id, level_id)

-- XP event log
xp_events
  id (uuid, PK)
  user_id (uuid, FK → profiles)
  event_type (text)         -- 'level_complete' | 'streak' | 'track_milestone'
  xp_amount (int)
  level_id (text)           -- nullable, for level_complete events
  created_at (timestamptz)
```

### MDX Content Schema

Each level is a `.mdx` file in `/content/levels/`:

```mdx
---
id: "A2"
track: "A"
order: 2
title: "CRUD App"
subtitle: "Todo List or Bookmark Manager"
tech: "Express or Next.js + Postgres"
xp_reward: 100
prerequisites: ["A1"]
concepts:
  - "What a database is and why you need one"
  - "CRUD operations (Create, Read, Update, Delete)"
  - "SQL basics or an ORM like Prisma"
  - "REST API design"
  - "How frontend talks to backend"
build_ideas:
  - "Todo list with categories and due dates"
  - "Bookmark manager with tags and search"
  - "Personal expense tracker with monthly summaries"
  - "Movie/book watchlist with ratings and reviews"
  - "Recipe collection app with ingredients and steps"
  - "Habit tracker with daily check-ins"
  - "Simple inventory system for a small shop"
  - "Contact/CRM manager for freelancers"
  - "Workout log with exercises and sets"
  - "Plant care tracker with watering schedules"
checklist:
  - "Set up a database (Postgres via Supabase or local)"
  - "Create a table for your data"
  - "Build a REST API with GET, POST, PUT, DELETE endpoints"
  - "Connect your frontend to the API"
  - "Data persists across page refreshes"
  - "Deploy it live"
hints:
  - "Start with just one table. Don't over-design the schema."
  - "Use Prisma or Drizzle as your ORM — raw SQL is fine too but an ORM is faster to build with."
  - "Test your API with curl or Postman before building the frontend."
resources:
  - label: "Supabase quickstart"
    url: "https://supabase.com/docs/guides/getting-started"
  - label: "Prisma getting started"
    url: "https://www.prisma.io/docs/getting-started"
  - label: "REST API design guide"
    url: "https://restfulapi.net/"
---

## The Brief

Build an app where data doesn't disappear when you refresh the page...
```

---

## 20. Reference Tables

### Complete Track Map

| Track | Focus | Levels | You Become |
|-------|-------|--------|------------|
| **A** (0–23) | Backend & Web | 24 | Full-stack → Platform engineer |
| **B** (1–6) | Algorithms & Data Structures | 6 | Strong problem solver |
| **C** (1–8) | Security & Compliance | 8 | Security-aware developer |
| **D** (1–7) | Hardware & Robotics | 7 | Embedded/IoT engineer |
| **E** (1–24) | Architectures & Platforms | 24 | Software architect |
| **F** (1–8) | AI & Machine Learning | 8 | AI engineer |
| **G** (1–7) | Systems & Low-Level | 7 | Systems engineer |
| **H** (1–6) | Game Development | 6 | Game developer |

**Total: 90 projects across 8 tracks**

### Architecture Decision Cheat Sheet

| When you need... | Architecture | Level |
|---|---|---|
| Content-driven site, non-tech editors | Headless CMS or Traditional CMS | E1, E2 |
| Internal business tools | Admin dashboard | E3 |
| Simple, fast, SEO-friendly | Server-rendered monolith | E4 |
| Rich interactive UI | SPA + API | E5 |
| Cheap, auto-scaling, simple logic | Serverless | E6 |
| Web + mobile from one codebase | Shared API + cross-platform | E7 |
| Works without internet | PWA / offline-first | E8 |
| Local files, native OS features | Desktop app | E9 |
| Extend other websites | Browser extension | E10 |
| Complex workflows, many moving parts | Event-driven | E11 |
| One product, many customers/brands | Multi-tenant white-label | E12 |
| Many apps, shared code | Monorepo | E13 |
| Third-party extensibility | Plugin system | E14 |

### AI Decision Cheat Sheet

| When you need... | Approach | Level |
|---|---|---|
| AI that knows your documents | RAG + vector search | F1 |
| AI that takes actions | Agents + tool use | F2 |
| "Find similar" or recommendations | Embeddings | F3 |
| Better performance on your domain | Fine-tuning | F4 |
| Full privacy, no API dependency | Local models | F5 |

---

## 21. Success Metrics

| Metric | Target (3 months) |
|--------|-------------------|
| Signups | 1,000 |
| A0 completion rate | 70% |
| Track A through A7 completion rate | 25% |
| D7 retention | 40% |
| Average streak length | 5 days |
| Projects submitted | 2,000 |

---

## 22. Decisions Made

These were decided during the product interview and should not be revisited without good reason:

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Product identity | Full engineering education, AI-assisted | Not "vibe coding" — teaches real engineering |
| Name | DevMode | Builder/maker themed, developer-oriented |
| Domain | learndevmode.xyz | — |
| Business model | Completely free | Community/open-source project |
| License | Source-available | Code public for transparency, not for self-hosting |
| Reference apps | None | Learners figure it out themselves — that's the point |
| Verification | Honor system | Click mark complete, paste URL, move on |
| Build ideas UX | Random rotation | Show one at a time, "Give me another" to cycle |
| Workspace | Brief + checklist + hints + resources | Coding happens in their own IDE |
| Track navigation | Dashboard hub + Duolingo paths | Hub shows 8 cards, click into vertical path per track |
| Onboarding | Show everything, highlight start | All tracks visible, Track A has "Start Here" CTA |
| Level visibility | Full details upfront | Even locked levels show name, concept, what you build |
| Gamification | Essential — core to product | XP, ranks, streaks, badges are not optional |
| Profile style | Game profile | Rank, XP, stats front and center (not developer portfolio) |
| Design aesthetic | Linear-like developer tool | Clean, minimal, dark mode. Not playful/childish. |
| Content storage | Static MDX in repo | Briefs, ideas, hints in MDX. User data in Supabase. |
| Auth wall | Content public, auth for progress | Everything browsable without signup. SEO-indexable. |
| Mobile | Fully responsive from day one | First impression on mobile matters |
| Community | None in MVP | Pure solo experience. Add later based on demand. |
| Content source | Backend Learning Curriculum.md + Build Ideas per Project.md | Already written — transform into MDX files |
| Timeline | ASAP | Building with AI tools |

---

## 23. Open Questions

- [x] ~~Should the reference examples be embedded or linked?~~ → No reference apps at all
- [x] ~~How to verify completion?~~ → Honor system
- [x] ~~Free vs paid?~~ → Completely free
- [x] ~~Community features in MVP?~~ → No
- [x] ~~Content format?~~ → Static MDX in repo
- [ ] Should we support "skip level" for experienced builders who can prove competency?
- [ ] Should learners be able to suggest new build ideas for each level? (Phase 2)
- [ ] How to handle hardware tracks (D) — do we recommend specific kits or just list parts?
- [ ] Domain availability — verify learndevmode.xyz is available
- [ ] Track colors — what's the color scheme for each of the 8 tracks?
