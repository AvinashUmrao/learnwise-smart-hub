import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const NewsletterSignup = () => {
  return (
    <Card className="mt-16 border-0 bg-gradient-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
      <CardContent className="relative p-12 text-center">
        <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Get the latest study tips, exam updates, and expert insights delivered 
          straight to your inbox. Join 10,000+ students already subscribed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input 
            placeholder="Enter your email" 
            className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
          />
          <Button variant="default" className="bg-white text-primary hover:bg-white/90">
            Subscribe
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
