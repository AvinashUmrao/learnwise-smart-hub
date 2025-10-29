import { Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const studyMaterial = [
	{
		id: "cs-fundamentals",
		type: "YouTube",
		title: "Computer Science Fundamentals",
		description: "Comprehensive playlist covering core CS concepts for GATE.",
		duration: "50+ hours",
		link: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo",
	},
	{
		id: "maths",
		type: "YouTube",
		title: "Engineering Mathematics",
		description: "Essential mathematics topics for GATE preparation.",
		duration: "40+ hours",
		link: "https://www.youtube.com/playlist?list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz",
	},
	{
		id: "dbms",
		type: "YouTube",
		title: "Database Management Systems (DBMS)",
		description: "Detailed DBMS playlist for GATE aspirants.",
		duration: "30+ hours",
		link: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
	},
];

export const StudyMaterialTab = () => {
	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold text-foreground">Study Materials</h2>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{studyMaterial.map((material) => (
					<Card key={material.id} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
						<CardHeader>
							<div className="flex items-center justify-between mb-2">
								<Badge variant="secondary">{material.type}</Badge>
								<div className="flex items-center text-sm text-muted-foreground">
									<Clock className="w-4 h-4 mr-1" />
									{material.duration}
								</div>
							</div>
							<CardTitle className="text-lg">{material.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription className="mb-4">{material.description}</CardDescription>
							<Button className="w-full" variant="default" asChild>
								<a href={material.link} target="_blank" rel="noopener noreferrer">
									<ExternalLink className="mr-2 h-4 w-4" />
									Watch on YouTube
								</a>
							</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};
