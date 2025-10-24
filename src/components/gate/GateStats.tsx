export const GateStats = () => {
  const stats = [
    { value: "1200+", label: "Study Materials", color: "text-primary" },
    { value: "500+", label: "Practice Tests", color: "text-success" },
    { value: "25K+", label: "Students", color: "text-warning" },
    { value: "95%", label: "Success Rate", color: "text-secondary" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-6 bg-gradient-card rounded-xl border border-border">
          <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
          <div className="text-muted-foreground font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
