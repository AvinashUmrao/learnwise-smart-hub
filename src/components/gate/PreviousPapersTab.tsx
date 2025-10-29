import { FileText, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const previousPapers = [
	{
		id: "2025-set-1",
		year: 2025,
		title: "GATE CS 2025 Set 1",
		questions: 65,
		marks: 100,
		duration: "3 Hours",
		paperLink: "https://media.geeksforgeeks.org/wp-content/uploads/20250414103654373749/GATE-CS-2025-Set-1-Master-Question-Paper.pdf",
		answerKey: "https://media.geeksforgeeks.org/wp-content/uploads/20250414103654373134/GATE-CS-2025-Set-1-Answer-Key.pdf",
	},
	{
		id: "2025-set-2",
		year: 2025,
		title: "GATE CS 2025 Set 2",
		questions: 65,
		marks: 100,
		duration: "3 Hours",
		paperLink: "https://media.geeksforgeeks.org/wp-content/uploads/20250414103654374715/GATE-CS-2025-Set-2-Master-Question-Paper.pdf",
		answerKey: "https://media.geeksforgeeks.org/wp-content/uploads/20250414103654374474/GATE-CS-2025-Set-2-Answer-Key.pdf",
	},
];

export const PreviousPapersTab = () => {
	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold text-foreground">Previous Year Papers</h2>
				<Button variant="outline">View All Years</Button>
			</div>
			<div className="grid md:grid-cols-2 gap-6">
				{previousPapers.map((paper) => (
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
							<div className="flex items-center text-sm text-muted-foreground mb-4">
								<FileText className="w-4 h-4 mr-1" />
								Duration: {paper.duration}
							</div>
							<div className="flex gap-2">
								<Button className="flex-1" variant="default" asChild>
									<a href={paper.paperLink} target="_blank" rel="noopener noreferrer">
										<FileText className="mr-2 h-4 w-4" />
										View Paper
									</a>
								</Button>
								<Button className="flex-1" variant="outline" asChild>
									<a href={paper.answerKey} target="_blank" rel="noopener noreferrer">
										<FileCheck className="mr-2 h-4 w-4" />
										Answer Key
									</a>
								</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};
