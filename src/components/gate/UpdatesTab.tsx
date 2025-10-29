import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { gateData } from "@/data/sampleData";

const latestUpdate = {
  id: 1,
  title: "GATE 2026 Official Website Live",
  date: "2025-10-29",
  link: "https://gate2026.iitg.ac.in/",
};

export const UpdatesTab = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Latest Updates & Announcements</h2>
      
      <div className="space-y-4">
        {gateData.updates.map((update) => (
          <Card key={update.id} className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className={`w-3 h-3 rounded-full mt-2 ${
                  update.type === 'Important' ? 'bg-destructive' :
                  update.type === 'Update' ? 'bg-warning' : 'bg-success'
                }`}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant={
                      update.type === 'Important' ? 'destructive' :
                      update.type === 'Update' ? 'warning' : 'success'
                    }>
                      {update.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{update.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{update.title}</h3>
                  <p className="text-muted-foreground">{update.content}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <nav className="flex items-center justify-between px-6 py-3 bg-white shadow">
        <div className="flex items-center gap-6">
          <a href="/" className="text-xl font-bold text-primary">Learnwise</a>
          {/* ...other nav links... */}
        </div>
        <div className="flex items-center gap-4">
          {/* Latest Update Badge */}
          <a
            href={latestUpdate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-yellow-200 transition"
            title={latestUpdate.title}
          >
            🔔 {latestUpdate.title}
          </a>
          {/* ...other nav actions... */}
        </div>
      </nav>
    </div>
  );
};
