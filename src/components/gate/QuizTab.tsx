import { Brain } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const QuizTab = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check if user is logged in
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleQuizClick = () => {
    if (!user) {
      toast.error("Please log in to start the quiz!");
      navigate("/auth"); // Redirect to login/signup page
      return;
    }
    navigate("/gate/quiz");
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Test your knowledge with our carefully curated quiz questions.
          Get instant feedback and detailed explanations for each answer.
        </p>

        <div className="bg-gradient-primary rounded-2xl p-8 text-white mb-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-white/80">Questions</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10</div>
              <div className="text-white/80">Minutes</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Mixed</div>
              <div className="text-white/80">Difficulty</div>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          variant="default"
          className="bg-primary text-white hover:bg-primary/90"
          onClick={handleQuizClick}
        >
          <Brain className="mr-2 h-5 w-5" />
          Start Practice Quiz
        </Button>
      </div>
    </div>
  );
};