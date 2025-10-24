import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { gateData } from "@/data/sampleData";

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
    </div>
  );
};
