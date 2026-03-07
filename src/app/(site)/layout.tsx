import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SideNav from "@/components/layout/SideNav";
import { NavProvider } from "@/context/NavContext";

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
      <NavProvider>
        <SideNav />

        {/* MAIN CONTENT (Scrollable) */}
        <main className="pb-20 xl:pb-0">{children}</main>
      </NavProvider>

      <Footer />
    </div>
  );
}
