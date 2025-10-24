import { Download, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { gateData } from "@/data/sampleData";

export const StudyMaterialTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">Study Materials</h2>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download All
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gateData.studyMaterial.map((material) => (
          <Card key={material.id} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{material.type}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  {material.lessons} lessons
                </div>
              </div>
              <CardTitle className="text-lg">{material.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                {material.description}
              </CardDescription>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                {material.size && <span>Size: {material.size}</span>}
                {material.duration && <span>Duration: {material.duration}</span>}
              </div>
              
              <Button className="w-full" variant="default">
                <Download className="mr-2 h-4 w-4" />
                Access Material
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
