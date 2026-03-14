export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center border-x border-dashed border-border px-4">
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}
