import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col border border-orange-300 min-h-screen">
      <Navbar />
      <main className="border  flex-1">{children}</main>
      <Footer />
    </div>
  );
}
