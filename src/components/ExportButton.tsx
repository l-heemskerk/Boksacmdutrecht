import { Download } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { semesters, mockActivities } from '../data/mockData';
import { Activity, LearningOutcomeDetail, CompetencyType, LearningOutcome } from '../types/curriculum';
import { learningOutcomeProgressions } from '../data/learningOutcomeProgressions';
import { getLeerlijnForItem } from '../data/leerlijnen';
import * as XLSX from 'xlsx';

export function ExportButton() {
  // Helper function to add activity names to competencies
  const addActivityNameToCompetency = (competency: string, activityName: string) => {
    return `${competency} (${activityName})`;
  };

  const exportToCSV = () => {
    let csv = 'Semester,Semester Naam,Specialisatie,Leeruitkomst,Kennis,Kennis Leerlijnen,Vaardigheden,Vaardigheden Leerlijnen,Houding\n';
    
    semesters.forEach(semester => {
      if (semester.specializations) {
        // For specializations (semester 6)
        semester.specializations.forEach(spec => {
          spec.activities.forEach(activity => {
            if (activity.learningOutcomeDetails) {
              activity.learningOutcomeDetails.forEach(detail => {
                const kennisWithActivity = detail.kennis.map(k => addActivityNameToCompetency(k, activity.name)).join('; ');
                const kennisLeerlijnen = detail.kennis.flatMap(k => getLeerlijnForItem(k)).filter((v, i, a) => a.indexOf(v) === i).join(', ');
                const vaardighedenWithActivity = detail.vaardigheden.map(v => addActivityNameToCompetency(v, activity.name)).join('; ');
                const vaardighedenLeerlijnen = detail.vaardigheden.flatMap(v => getLeerlijnForItem(v)).filter((v, i, a) => a.indexOf(v) === i).join(', ');
                const houdingItems = detail.houding.join('; ');
                
                csv += `"${semester.number}","${semester.name}","${spec.name}","${detail.outcome}","${kennisWithActivity}","${kennisLeerlijnen}","${vaardighedenWithActivity}","${vaardighedenLeerlijnen}","${houdingItems}"\n`;
              });
            }
          });
        });
      } else {
        // Regular semesters
        semester.activities.forEach(activity => {
          if (activity.learningOutcomeDetails) {
            activity.learningOutcomeDetails.forEach(detail => {
              const kennisWithActivity = detail.kennis.map(k => addActivityNameToCompetency(k, activity.name)).join('; ');
              const kennisLeerlijnen = detail.kennis.flatMap(k => getLeerlijnForItem(k)).filter((v, i, a) => a.indexOf(v) === i).join(', ');
              const vaardighedenWithActivity = detail.vaardigheden.map(v => addActivityNameToCompetency(v, activity.name)).join('; ');
              const vaardighedenLeerlijnen = detail.vaardigheden.flatMap(v => getLeerlijnForItem(v)).filter((v, i, a) => a.indexOf(v) === i).join(', ');
              const houdingItems = detail.houding.join('; ');
              
              csv += `"${semester.number}","${semester.name}","","${detail.outcome}","${kennisWithActivity}","${kennisLeerlijnen}","${vaardighedenWithActivity}","${vaardighedenLeerlijnen}","${houdingItems}"\n`;
            });
          }
        });
      }
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'cmd-boksa-overzicht.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToJSON = () => {
    const data = semesters.map(semester => ({
      semester: semester.number,
      naam: semester.name,
      beschrijving: semester.description,
      activiteiten: semester.specializations 
        ? semester.specializations.flatMap(spec => 
            spec.activities.map(activity => ({
              specialisatie: spec.name,
              naam: activity.name,
              duur: activity.duration,
              beschrijving: activity.description,
              leeruitkomsten: activity.learningOutcomeDetails?.map(detail => ({
                leeruitkomst: detail.outcome,
                kennis: detail.kennis,
                kennisLeerlijnen: detail.kennis.flatMap(k => getLeerlijnForItem(k)).filter((v, i, a) => a.indexOf(v) === i),
                vaardigheden: detail.vaardigheden,
                vaardighedenLeerlijnen: detail.vaardigheden.flatMap(v => getLeerlijnForItem(v)).filter((v, i, a) => a.indexOf(v) === i),
                houding: detail.houding,
                houdingLeerlijnen: detail.houding.flatMap(h => getLeerlijnForItem(h)).filter((v, i, a) => a.indexOf(v) === i)
              }))
            }))
          )
        : semester.activities.map(activity => ({
            naam: activity.name,
            duur: activity.duration,
            beschrijving: activity.description,
            leeruitkomsten: activity.learningOutcomeDetails?.map(detail => ({
              leeruitkomst: detail.outcome,
              kennis: detail.kennis,
              kennisLeerlijnen: detail.kennis.flatMap(k => getLeerlijnForItem(k)).filter((v, i, a) => a.indexOf(v) === i),
              vaardigheden: detail.vaardigheden,
              vaardighedenLeerlijnen: detail.vaardigheden.flatMap(v => getLeerlijnForItem(v)).filter((v, i, a) => a.indexOf(v) === i),
              houding: detail.houding,
              houdingLeerlijnen: detail.houding.flatMap(h => getLeerlijnForItem(h)).filter((v, i, a) => a.indexOf(v) === i)
            }))
          }))
    }));

    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'cmd-boksa-overzicht.json');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();

    // Tab 1: Jaar 1 & 2 (Semester 1-4)
    const jaar12Data: any[] = [];
    jaar12Data.push(['Semester', 'Semester Naam', 'Leeruitkomst', 'Kennis', 'Kennis Leerlijnen', 'Vaardigheden', 'Vaardigheden Leerlijnen', 'Houding']);
    
    semesters.filter(s => s.number >= 1 && s.number <= 4).forEach(semester => {
      const activities = semester.activities;
      
      activities.forEach(activity => {
        if (activity.learningOutcomeDetails) {
          activity.learningOutcomeDetails.forEach(detail => {
            const kennisWithActivity = detail.kennis.map(k => addActivityNameToCompetency(k, activity.name)).join('; ');
            const kennisLeerlijnen = detail.kennis.flatMap(k => getLeerlijnForItem(k)).filter((v, i, a) => a.indexOf(v) === i).join(', ');
            const vaardighedenWithActivity = detail.vaardigheden.map(v => addActivityNameToCompetency(v, activity.name)).join('; ');
            const vaardighedenLeerlijnen = detail.vaardigheden.flatMap(v => getLeerlijnForItem(v)).filter((v, i, a) => a.indexOf(v) === i).join(', ');
            const houding = detail.houding.join('; ');
            
            jaar12Data.push([
              semester.number,
              semester.name,
              detail.outcome,
              kennisWithActivity,
              kennisLeerlijnen,
              vaardighedenWithActivity,
              vaardighedenLeerlijnen,
              houding
            ]);
          });
        }
      });
    });

    // Tab 2: Specialisaties (Semester 6)
    const specialisatiesData: any[] = [];
    specialisatiesData.push(['Semester', 'Specialisatie', 'Leeruitkomst', 'Kennis', 'Kennis Leerlijnen', 'Vaardigheden', 'Vaardigheden Leerlijnen', 'Houding']);
    
    const semester6 = semesters.find(s => s.number === 6);
    if (semester6 && semester6.specializations) {
      semester6.specializations.forEach(spec => {
        spec.activities.forEach(activity => {
          if (activity.learningOutcomeDetails) {
            activity.learningOutcomeDetails.forEach(detail => {
              const kennisWithActivity = detail.kennis.map(k => addActivityNameToCompetency(k, activity.name)).join('; ');
              const kennisLeerlijnen = detail.kennis.flatMap(k => getLeerlijnForItem(k)).filter((v, i, a) => a.indexOf(v) === i).join(', ');
              const vaardighedenWithActivity = detail.vaardigheden.map(v => addActivityNameToCompetency(v, activity.name)).join('; ');
              const vaardighedenLeerlijnen = detail.vaardigheden.flatMap(v => getLeerlijnForItem(v)).filter((v, i, a) => a.indexOf(v) === i).join(', ');
              const houding = detail.houding.join('; ');
              
              specialisatiesData.push([
                semester6.number,
                spec.name,
                detail.outcome,
                kennisWithActivity,
                kennisLeerlijnen,
                vaardighedenWithActivity,
                vaardighedenLeerlijnen,
                houding
              ]);
            });
          }
        });
      });
    }

    // Tab 3: Praktijk & Afstuderen (Semester 5 & 7)
    const praktijkAfstudeerData: any[] = [];
    praktijkAfstudeerData.push(['Semester', 'Semester Naam', 'Leeruitkomst', 'Kennis', 'Kennis Leerlijnen', 'Vaardigheden', 'Vaardigheden Leerlijnen', 'Houding']);
    
    semesters.filter(s => s.number === 5 || s.number === 7).forEach(semester => {
      const activities = semester.activities;
      
      activities.forEach(activity => {
        if (activity.learningOutcomeDetails) {
          activity.learningOutcomeDetails.forEach(detail => {
            const kennisWithActivity = detail.kennis.map(k => addActivityNameToCompetency(k, activity.name)).join('; ');
            const kennisLeerlijnen = detail.kennis.flatMap(k => getLeerlijnForItem(k)).filter((v, i, a) => a.indexOf(v) === i).join(', ');
            const vaardighedenWithActivity = detail.vaardigheden.map(v => addActivityNameToCompetency(v, activity.name)).join('; ');
            const vaardighedenLeerlijnen = detail.vaardigheden.flatMap(v => getLeerlijnForItem(v)).filter((v, i, a) => a.indexOf(v) === i).join(', ');
            const houding = detail.houding.join('; ');
            
            praktijkAfstudeerData.push([
              semester.number,
              semester.name,
              detail.outcome,
              kennisWithActivity,
              kennisLeerlijnen,
              vaardighedenWithActivity,
              vaardighedenLeerlijnen,
              houding
            ]);
          });
        }
      });
    });

    // Tab 4: Opbouw Leeruitkomsten (per leeruitkomst, per semester)
    const opbouwData: any[] = [];
    opbouwData.push(['Leeruitkomst', 'BASE', 'CHALLENGE', 'EXPLORE', 'CONNECT', 'Praktijk', 'Specialisatie', 'Afstuderen']);
    
    // Define learning outcomes with their labels
    const outcomes: { key: LearningOutcome; label: string }[] = [
      { key: 'context', label: 'CONTEXT' },
      { key: 'ontwerpen', label: 'ONTWERPEN' },
      { key: 'prototype', label: 'PROTOTYPEN EN TESTEN' },
      { key: 'verbinden', label: 'VERBINDEN' },
      { key: 'reflecteren', label: 'LEREN EN REFLECTEREN' }
    ];
    
    // Mapping of semester numbers to column positions
    const semesterMapping: Record<number, number> = {
      1: 0, // BASE
      2: 1, // CHALLENGE
      3: 2, // EXPLORE (semester 3)
      4: 3, // CONNECT (semester 4)
      5: 4, // Praktijk (semester 5)
      6: 5, // Semester Specialisatie (semester 6)
      7: 6  // Afstuderen (semester 7)
    };
    
    outcomes.forEach(({ key, label }) => {
      // Create a row for this outcome
      const row: string[] = [label, '', '', '', '', '', '', ''];
      
      // Get progressions for this outcome
      const progressions = learningOutcomeProgressions.filter(p => p.outcome === key);
      
      progressions.forEach(progression => {
        const columnIndex = semesterMapping[progression.semester];
        if (columnIndex !== undefined) {
          row[columnIndex + 1] = progression.description; // +1 because first column is label
        }
      });
      
      opbouwData.push(row);
    });

    // Create sheets
    const jaar12Sheet = XLSX.utils.aoa_to_sheet(jaar12Data);
    const specialisatiesSheet = XLSX.utils.aoa_to_sheet(specialisatiesData);
    const praktijkAfstudeerSheet = XLSX.utils.aoa_to_sheet(praktijkAfstudeerData);
    const opbouwSheet = XLSX.utils.aoa_to_sheet(opbouwData);

    // Set column widths for better readability
    jaar12Sheet['!cols'] = [
      { wch: 10 }, // Semester
      { wch: 15 }, // Semester Naam
      { wch: 15 }, // Leeruitkomst
      { wch: 50 }, // Kennis
      { wch: 30 }, // Kennis Leerlijnen
      { wch: 50 }, // Vaardigheden
      { wch: 30 }, // Vaardigheden Leerlijnen
      { wch: 50 }  // Houding
    ];

    specialisatiesSheet['!cols'] = [
      { wch: 10 }, // Semester
      { wch: 20 }, // Specialisatie
      { wch: 15 }, // Leeruitkomst
      { wch: 50 }, // Kennis
      { wch: 30 }, // Kennis Leerlijnen
      { wch: 50 }, // Vaardigheden
      { wch: 30 }, // Vaardigheden Leerlijnen
      { wch: 50 }  // Houding
    ];

    praktijkAfstudeerSheet['!cols'] = [
      { wch: 10 }, // Semester
      { wch: 15 }, // Semester Naam
      { wch: 15 }, // Leeruitkomst
      { wch: 50 }, // Kennis
      { wch: 30 }, // Kennis Leerlijnen
      { wch: 50 }, // Vaardigheden
      { wch: 30 }, // Vaardigheden Leerlijnen
      { wch: 50 }  // Houding
    ];

    opbouwSheet['!cols'] = [
      { wch: 25 }, // Leeruitkomst
      { wch: 50 }, // BASE
      { wch: 50 }, // CHALLENGE
      { wch: 50 }, // EXPLORE
      { wch: 50 }, // CONNECT
      { wch: 50 }, // Praktijk
      { wch: 50 }, // Semester Specialisatie
      { wch: 50 }  // Afstuderen
    ];

    // Append sheets to workbook
    XLSX.utils.book_append_sheet(workbook, jaar12Sheet, 'Jaar 1 & 2');
    XLSX.utils.book_append_sheet(workbook, specialisatiesSheet, 'Specialisaties');
    XLSX.utils.book_append_sheet(workbook, praktijkAfstudeerSheet, 'Praktijk & Afstuderen');
    XLSX.utils.book_append_sheet(workbook, opbouwSheet, 'Opbouw Leeruitkomsten');

    XLSX.writeFile(workbook, 'cmd-boksa-overzicht.xlsx');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Download
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={exportToExcel}>
          <Download className="w-4 h-4 mr-2" />
          Exporteer als Excel
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportToCSV}>
          <Download className="w-4 h-4 mr-2" />
          Exporteer als CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportToJSON}>
          <Download className="w-4 h-4 mr-2" />
          Exporteer als JSON
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}