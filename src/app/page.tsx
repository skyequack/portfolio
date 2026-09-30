import Hero from "@/components/Hero";
import About from "@/components/cy/About";
import CyNav from "@/components/cy/CyNav";
import CyFooter from "@/components/cy/CyFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <CyNav />
      <main>
        <Hero />
        <About />
      </main>
      <div className="cy">
        <CyFooter />
      </div>
    </div>
  );
}
