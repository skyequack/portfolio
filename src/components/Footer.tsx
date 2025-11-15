import { StarsBackground } from "@/components/ui/stars-background";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black py-16 px-4 overflow-hidden">
      {/* Stars Background */}
      <StarsBackground
        starDensity={0.00015}
        allStarsTwinkle={true}
        twinkleProbability={0.7}
        minTwinkleSpeed={0.5}
        maxTwinkleSpeed={1.5}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-center text-sm text-gray-400">
          © {currentYear} Omer Mohammed
        </p>
      </div>
    </footer>
  );
}
