import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Bell, List, Brain } from "lucide-react";
import { GateHeader } from "@/components/gate/GateHeader";
import { GateStats } from "@/components/gate/GateStats";
import { StudyMaterialTab } from "@/components/gate/StudyMaterialTab";
import { PreviousPapersTab } from "@/components/gate/PreviousPapersTab";
import { UpdatesTab } from "@/components/gate/UpdatesTab";
import { SyllabusTab } from "@/components/gate/SyllabusTab";
import { QuizTab } from "@/components/gate/QuizTab";

const Gate = () => {
  const [activeTab, setActiveTab] = useState("study-material");

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <GateHeader />
        {/* <GateStats /> */}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="study-material" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Study Material</span>
            </TabsTrigger>
            <TabsTrigger value="papers" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Previous Papers</span>
            </TabsTrigger>
            <TabsTrigger value="updates" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Updates</span>
            </TabsTrigger>
            <TabsTrigger value="syllabus" className="flex items-center gap-2">
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">Syllabus</span>
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span className="hidden sm:inline">Quiz</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="study-material">
            <StudyMaterialTab />
          </TabsContent>

          <TabsContent value="papers">
            <PreviousPapersTab />
          </TabsContent>

          <TabsContent value="updates">
            <UpdatesTab />
          </TabsContent>

          <TabsContent value="syllabus">
            <SyllabusTab />
          </TabsContent>

          <TabsContent value="quiz">
            <QuizTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Gate;
