import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExamCardProps {
  id: string;
  name: string;
  fullName: string;
  description: string;
  subjects: string[];
  icon: string;
  status: string;
  isSelected: boolean;
  onSelect: () => void;
}

export const ExamCard = ({
  id,
  name,
  fullName,
  description,
  subjects,
  icon,
  isSelected,
  onSelect
}: ExamCardProps) => {
  return (
    <Card 
      className={`border-2 transition-all duration-300 cursor-pointer hover:shadow-medium transform hover:scale-105 ${
        isSelected 
          ? 'border-primary shadow-medium bg-primary/5' 
          : 'border-border hover:border-primary/50'
      }`}
      onClick={onSelect}
    >
      <CardHeader className="text-center">
        <div className="text-4xl mb-3">{icon}</div>
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <CardDescription className="text-sm font-medium text-muted-foreground">
          {fullName}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Key Subjects:</h4>
          <div className="flex flex-wrap gap-1">
            {subjects.map((subject, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {subject}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4">
          {['gate', 'jee', 'cat', 'neet', 'upsc'].includes(id) ? (
            <Link to={`/${id}`}>
              <Button className="w-full" variant="default">
                Start {name} Preparation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Button className="w-full" variant="outline" disabled>
              Coming Soon
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
