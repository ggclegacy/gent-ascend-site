import { AscendFramework } from "@/components/AscendFramework";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-obsidian text-ivory">
      <Navbar />
      <Hero />
      <AscendFramework />
      <Footer />
    </main>
  );
}
