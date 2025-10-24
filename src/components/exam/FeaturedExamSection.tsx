import { ArrowRight, BookOpen, Users, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const FeaturedExamSection = () => {
  return (
    <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-16">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
      
      <div className="relative grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Badge variant="secondary" className="mb-4 text-primary">⭐ Most Popular</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            GATE 2025 Complete Course
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Comprehensive GATE preparation with study materials, previous year papers, 
            mock tests, and expert guidance. Everything you need in one place.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold">1200+</div>
                <div className="text-white/80 text-sm">Study Materials</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold">25,000+</div>
                <div className="text-white/80 text-sm">Students</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold">500+</div>
                <div className="text-white/80 text-sm">Practice Tests</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold">4.8/5</div>
                <div className="text-white/80 text-sm">Rating</div>
              </div>
            </div>
          </div>

          <Link to="/gate">
            <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90">
              Explore GATE Course
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
            <h3 className="font-semibold text-lg mb-4">What's Included:</h3>
            <div className="space-y-3">
              {[
                "Complete Study Material",
                "Previous Year Papers",
                "Mock Tests & Quizzes",
                "Performance Analytics",
                "Expert Doubt Resolution"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
