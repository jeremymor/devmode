import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  if (!user) redirect("/login");

  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-6xl border-x border-dashed border-border px-4 py-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
