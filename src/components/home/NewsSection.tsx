import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { newsData } from "@/data/sampleData";

export const NewsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Badge variant="outline" className="mb-4">Latest Updates</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Educational News
            </h2>
            <p className="text-muted-foreground">Stay updated with the latest exam notifications and educational news.</p>
          </div>
          <Button variant="outline">View All News</Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <Card key={news.id} className="overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{news.category}</Badge>
                  <span className="text-sm text-muted-foreground">{news.date}</span>
                </div>
                <CardTitle className="text-lg line-clamp-2">{news.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{news.summary}</p>
                <Button variant="ghost" className="mt-4 p-0 h-auto font-medium">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
