import { Download, Clock, Star, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { gateData } from "@/data/sampleData";

export const PreviousPapersTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">Previous Year Papers</h2>
        <Button variant="outline">View All Years</Button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {gateData.previousPapers.map((paper) => (
          <Card key={paper.id} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline">Year {paper.year}</Badge>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{paper.questions} Questions</span>
                  <span>{paper.marks} Marks</span>
                </div>
              </div>
              <CardTitle className="text-lg">{paper.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  Duration: {paper.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-warning fill-current" />
                  <span className="text-sm font-medium">4.5</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1" variant="default">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button className="flex-1" variant="outline">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Solve Online
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
