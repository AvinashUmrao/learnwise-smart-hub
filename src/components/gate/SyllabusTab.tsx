import { BookOpen, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { gateData } from "@/data/sampleData";

export const SyllabusTab = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">GATE CS Syllabus 2025</h2>
      
      <div className="grid gap-6">
        {Object.entries(gateData.syllabus).map(([subject, topics]) => (
          <Card key={subject} className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                {subject}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-accent/50 rounded-lg">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
