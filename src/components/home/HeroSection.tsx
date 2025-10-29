import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          {/* <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            🎉 New GATE 2025 Course Available
          </Badge> */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Master Your
            <span className="block bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              Competitive Exams
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive preparation platform for JEE, GATE, CAT, NEET, UPSC and more. 
            Smart learning with AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Remove or comment out these buttons */}
            {/* <Button>Watch Demo</Button> */}
            {/* <Button>Start Learning</Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};
