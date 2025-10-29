import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { newsData } from "@/data/sampleData";
import { useState } from "react";

const articles: Record<string, { title: string; content: string }> = {
  "1": {
    title: "Exam News: Major Updates for 2025",
    content: "The 2025 exam season brings several changes to the schedule and format. Students are advised to check the official website for the latest updates and guidelines. Preparation tips and expert advice are also available.",
  },
  "2": {
    title: "Admissions Open: Top Universities Announce Dates",
    content: "Admissions for the 2025 academic year are now open at several top universities. Applicants should review eligibility criteria and submit their applications before the deadline. Scholarships and financial aid options are also available.",
  },
  "3": {
    title: "Results Declared: Check Your Scores Online",
    content: "The results for the recent examinations have been declared. Students can check their scores online using their registration number. Re-evaluation and rechecking processes are also outlined on the official portal.",
  },
  "4": {
    title: "Scholarships: New Opportunities Announced",
    content: "A range of new scholarships have been announced for meritorious and needy students. Application procedures, eligibility, and deadlines are detailed on the scholarship portal.",
  },
  "5": {
    title: "Events: Upcoming Education Fairs",
    content: "Several education fairs and seminars are scheduled for the coming months. These events provide opportunities for students to interact with representatives from various institutions and learn about new courses.",
  },
};

export const NewsSection = () => {
  const [openArticleId, setOpenArticleId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Show single article
  if (openArticleId && articles[openArticleId]) {
    const article = articles[openArticleId];
    return (
      <div className="max-w-2xl mx-auto py-10 px-4">
        <Button variant="link" onClick={() => setOpenArticleId(null)} className="mb-4 p-0 h-auto">
          ← Back to News
        </Button>
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <div className="text-lg">{article.content}</div>
      </div>
    );
  }

  // Show all articles
  if (showAll) {
    return (
      <div className="max-w-4xl mx-auto py-10 px-4">
        <Button variant="link" onClick={() => setShowAll(false)} className="mb-4 p-0 h-auto">
          ← Back to News
        </Button>
        <h1 className="text-3xl font-bold mb-8">All News Articles</h1>
        <div className="space-y-8">
          {Object.entries(articles).map(([id, article]) => (
            <div key={id} className="border rounded-lg p-6 bg-white shadow">
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <div className="text-base text-gray-700">{article.content}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default: News cards grid
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
          <Button variant="outline" onClick={() => setShowAll(true)}>
            View All News
          </Button>
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
                <Button
                  variant="link"
                  className="mt-4 p-0 h-auto text-primary-500"
                  onClick={() => setOpenArticleId(String(news.id))} // Convert to string
                >
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
