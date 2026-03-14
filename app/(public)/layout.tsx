import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
