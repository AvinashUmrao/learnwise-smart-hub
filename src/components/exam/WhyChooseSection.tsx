import { BookOpen, Sparkles, Users, Target, Globe } from "lucide-react";

export const WhyChooseSection = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Why Choose Our Platform?
      </h2>
      <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
        A simple and student-friendly learning platform designed to make studying easier, interactive, and effective.
      </p>

      <div className="grid md:grid-cols-5 gap-8">
        
        {/* Point 1 */}
        <div className="text-center">
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-1">Easy Learning</h3>
          <p className="text-muted-foreground text-sm">
            Simple notes, clear explanations, and beginner-friendly content.
          </p>
        </div>

        {/* Point 2 */}
        <div className="text-center">
          <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Sparkles className="w-7 h-7 text-purple-500" />
          </div>
          <h3 className="text-lg font-semibold mb-1">Interactive Study</h3>
          <p className="text-muted-foreground text-sm">
            Learn with quizzes, flashcards, practice sets, and engaging activities.
          </p>
        </div>

        {/* Point 3 */}
        <div className="text-center">
          <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Users className="w-7 h-7 text-green-500" />
          </div>
          <h3 className="text-lg font-semibold mb-1">Community Support</h3>
          <p className="text-muted-foreground text-sm">
            Connect with peers, share doubts, and learn together as a group.
          </p>
        </div>

        {/* Point 4 */}
        <div className="text-center">
          <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Target className="w-7 h-7 text-yellow-500" />
          </div>
          <h3 className="text-lg font-semibold mb-1">Track Progress</h3>
          <p className="text-muted-foreground text-sm">
            Set goals, monitor learning performance, and stay on track daily.
          </p>
        </div>

        {/* Point 5 */}
        <div className="text-center">
          <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Globe className="w-7 h-7 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold mb-1">Learn Anywhere</h3>
          <p className="text-muted-foreground text-sm">
            Accessible on all devices with a clean and distraction-free UI.
          </p>
        </div>

      </div>
    </div>
  );
};
