import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main >
        {children}
      </main>
      <Footer />
    </>
  );
}
