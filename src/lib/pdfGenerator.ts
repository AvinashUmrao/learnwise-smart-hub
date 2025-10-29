import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { StudentProgress } from './gamification';

export const generateProgressPDF = (progress: StudentProgress, suggestions: string[]) => {
  const doc = new jsPDF();
  let y = 20;
  
  // Header
  doc.setFillColor(59, 130, 246);
  doc.rect(0, 0, 210, 40, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text('Progress Report', 105, 25, { align: 'center' });
  
  y = 50;
  doc.setTextColor(0, 0, 0);
  
  // Stats
  doc.setFontSize(16);
  doc.text('Performance Summary', 20, y);
  y += 10;
  
  doc.setFontSize(12);
  doc.text(`Total Score: ${progress.totalScore}`, 20, y);
  y += 7;
  doc.text(`Average Accuracy: ${progress.averageAccuracy}%`, 20, y);
  y += 7;
  doc.text(`Current Streak: ${progress.currentStreak} days`, 20, y);
  y += 7;
  doc.text(`Badges: ${progress.badges.length}`, 20, y);
  y += 15;
  
  // Badges
  if (progress.badges.length > 0) {
    doc.setFontSize(16);
    doc.text('Badges Earned', 20, y);
    y += 10;
    
    const badgeData = progress.badges.map(b => [b.icon, b.name, b.description]);
    autoTable(doc, {
      startY: y,
      head: [['', 'Badge', 'Description']],
      body: badgeData,
      theme: 'grid',
    });
    y = (doc as any).lastAutoTable.finalY + 15;
  }
  
  // Suggestions
  doc.setFontSize(16);
  doc.text('Improvement Tips', 20, y);
  y += 10;
  doc.setFontSize(10);
  suggestions.forEach(s => {
    doc.text(`• ${s}`, 20, y);
    y += 6;
  });
  
  doc.save('progress-report.pdf');
};
