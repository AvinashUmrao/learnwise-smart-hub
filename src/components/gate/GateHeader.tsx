import { Brain, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const GateHeader = () => {
  return (
    <div className="text-center mb-12">
      <Badge variant="outline" className="mb-4">GATE 2025</Badge>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        GATE Complete Preparation
      </h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
        Master the Graduate Aptitude Test in Engineering with our comprehensive study materials, 
        practice tests, and expert guidance.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link to="/gate/quiz">
          <Button size="lg" variant="hero">
            <Brain className="mr-2 h-5 w-5" />
            Take Practice Quiz
          </Button>
        </Link>
        
      </div>
    </div>
  );
};
