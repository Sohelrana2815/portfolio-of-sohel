import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col border min-h-screen">
      <Navbar />
      <main className="border border-orange-500 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
