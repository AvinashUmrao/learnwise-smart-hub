import { BookOpen, Sparkles, Users, Clock } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Easy Study Material",
      description: "Simple, well-organized notes to help you learn better.",
      bg: "bg-primary/10",
      color: "text-primary",
    },
    {
      icon: Sparkles,
      title: "Interactive Practice",
      description: "Quizzes, flashcards, and exercises to make learning engaging.",
      bg: "bg-purple-500/10",
      color: "text-purple-500",
    },
    {
      icon: Users,
      title: "Learn Together",
      description: "Join peers, share doubts, and grow as a learning community.",
      bg: "bg-green-500/10",
      color: "text-green-500",
    },
    {
      icon: Clock,
      title: "Learn Anytime",
      description: "Flexible learning that fits your schedule and pace.",
      bg: "bg-blue-500/10",
      color: "text-blue-500",
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Platform Features
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A student-friendly learning experience designed to keep you motivated and on track.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index}>
              <div
                className={`w-16 h-16 ${item.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}
              >
                <Icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
