import { BookOpen, Star, Users } from "lucide-react";

export const WhyChooseSection = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Why Choose EduSmart?
      </h2>
      <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
        Join thousands of successful students who achieved their dream scores with our proven methodology.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Expert Content</h3>
          <p className="text-muted-foreground">
            Curated by top educators and industry experts with years of teaching experience.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-success" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
          <p className="text-muted-foreground">
            95% success rate with students getting into their dream institutions.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-warning/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-warning" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Community Support</h3>
          <p className="text-muted-foreground">
            Connect with peers, participate in discussions, and learn together.
          </p>
        </div>
      </div>
    </div>
  );
};
