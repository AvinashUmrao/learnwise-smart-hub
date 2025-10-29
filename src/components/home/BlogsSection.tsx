import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogData } from "@/data/sampleData";
import { useState } from "react";

const blogArticles: Record<number, { title: string; content: string; author: string }> = {
	1: {
		title: "10 Effective Study Techniques for Competitive Exams",
		content:
			"Here is a detailed article about 10 effective study techniques. Use spaced repetition, active recall, and practice tests to maximize your retention. Stay organized and take regular breaks for best results.",
		author: "Dr. Sarah Johnson",
	},
	2: {
		title: "Time Management Strategies for GATE Preparation",
		content:
			"This article covers time management tips for GATE. Prioritize topics, set realistic goals, and use a planner. Regular revision and mock tests are key to success.",
		author: "Prof. Rajesh Kumar",
	},
	3: {
		title: "Mental Health During Exam Preparation",
		content:
			"Maintaining mental health is crucial. Practice mindfulness, take breaks, and seek support when needed. Balance your studies with relaxation and hobbies.",
		author: "Dr. Priya Sharma",
	},
};

export const BlogsSection = () => {
	const [openBlogId, setOpenBlogId] = useState<number | null>(null);

	if (openBlogId && blogArticles[openBlogId]) {
		const article = blogArticles[openBlogId];
		return (
			<div className="max-w-2xl mx-auto py-10 px-4 animate-fade-in">
				<Button
					variant="link"
					onClick={() => setOpenBlogId(null)}
					className="mb-4 p-0 h-auto"
				>
					← Back to Blogs
				</Button>
				<h1 className="text-3xl font-bold mb-4">{article.title}</h1>
				<div className="text-muted-foreground mb-2">By {article.author}</div>
				<div className="text-lg">{article.content}</div>
			</div>
		);
	}

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center mb-12">
					<div>
						<Badge variant="outline" className="mb-4">
							Knowledge Hub
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
							Expert Insights & Tips
						</h2>
						<p className="text-muted-foreground">
							Learn from expert educators and successful students.
						</p>
					</div>
					{/* View All Blogs button can still link to /blogs if you have a separate page */}
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{blogData.map((blog) => (
						<Card
							key={blog.id}
							className="overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300"
						>
							<div className="aspect-video overflow-hidden">
								<img
									src={blog.image}
									alt={blog.title}
									className="w-full h-full object-cover"
								/>
							</div>
							<CardHeader>
								<div className="flex items-center justify-between mb-2">
									<Badge variant="secondary">{blog.category}</Badge>
									<div className="flex items-center text-sm text-muted-foreground">
										<Clock className="w-4 h-4 mr-1" />
										{blog.readTime}
									</div>
								</div>
								<CardTitle className="text-lg line-clamp-2">
									{blog.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground line-clamp-3 mb-4">
									{blog.excerpt}
								</p>
								<div className="flex items-center justify-between">
									<div className="text-sm text-muted-foreground">
										By {blog.author}
									</div>
									<Button
										variant="ghost"
										size="sm"
										onClick={() => setOpenBlogId(blog.id)}
									>
										Read More{" "}
										<ArrowRight className="ml-1 h-4 w-4" />
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
