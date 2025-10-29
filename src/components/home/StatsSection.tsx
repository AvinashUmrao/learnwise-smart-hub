import { Users, TrendingUp, BookOpen, Award } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    { label: "Students Enrollment", value: "", icon: Users },
    { label: "Success Rate", value: "", icon: TrendingUp },
    { label: "Study Materials", value: "", icon: BookOpen },
    { label: "Practice Tests", value: "", icon: Award }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
