import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SideNav from "@/components/layout/SideNav";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen selection:bg-yellow-500/30">
      {/* TOP RIGHT: Theme Toggle (Aligned with Nav) */}
      <header className="fixed top-8 z-50">
        <Header /> {/* Contains only the ModeToggle */}
      </header>

      {/* CENTER RIGHT: Side Navigation Icons */}
      <aside className="fixed right-16 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <SideNav />
      </aside>

      {/* MAIN CONTENT (Scrollable) */}
      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}
