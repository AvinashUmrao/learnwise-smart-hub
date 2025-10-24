import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Ready to Start Your Success Journey?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of successful students who achieved their goals with EduSmart. 
          Start your preparation today and get ahead of the competition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/exam-prep">
            <Button size="lg" variant="hero" className="w-full sm:w-auto">
              Explore Exam Preparation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
