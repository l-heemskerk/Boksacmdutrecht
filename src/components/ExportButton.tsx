import { Download } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { 
  semesterActiviteiten, 
  speelveldenData
} from '../data/curriculumDataConverter';
import { leeruitkomstProgressies } from '../data/curriculumData';
import * as XLSX from 'xlsx';

export function ExportButton() {
  const exportToCSV = () => {
    try {
      let csv = '';
      
      // TAB 1: Inhoud per semester
      csv += '=== INHOUD PER SEMESTER ===\n';
      csv += 'Semester,Semester Naam,Activiteit,Duur,Leeruitkomst,Beschrijving,Speelvelden,Kennis,Vaardigheden,Houding\n';
      
      semesterActiviteiten.forEach(item => {
        csv += `"${item.semester}","${item.semesterNaam}","${item.activiteit}","${item.duur}","${item.leeruitkomst}","${item.beschrijving}","${item.speelvelden}","${item.kennis}","${item.vaardigheden}","${item.houding}"\n`;
      });

      // TAB 2: Speelvelden
      csv += '\n\n=== SPEELVELDEN ===\n';
      csv += 'Semester,Semester Naam,Jaar,Zelcom Niveau,Speelveld,Introductie,Globale Beschrijving,Kernfocus,Leeruitkomsten,Typische Activiteiten,Verbanden met Andere Semesters\n';
      
      speelveldenData.forEach(item => {
        csv += `"${item.semester}","${item.semesterNaam}","${item.jaar}","${item.zelcomNiveau || ''}","${item.speelveld}","${item.introductie}","${item.globaleBeschrijving}","${item.kernfocus}","${item.leeruitkomsten || ''}","${item.typischeActiviteiten}","${item.verbandenMetAndereSemesters}"\n`;
      });

      // TAB 3: Opbouw leeruitkomsten
      csv += '\n\n=== OPBOUW LEERUITKOMSTEN ===\n';
      csv += 'Semester,Semester Naam,Leeruitkomst,Beschrijving\n';
      
      leeruitkomstProgressies.forEach(item => {
        csv += `"${item.semester}","${item.semesterNaam}","${item.leeruitkomst}","${item.beschrijving}"\n`;
      });
      
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'cmd-curriculum-export.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error exporting CSV:', error);
      alert('Er is een fout opgetreden bij het exporteren naar CSV. Zie console voor details.');
    }
  };

  const exportToJSON = () => {
    try {
      const data = {
        inhoudPerSemester: semesterActiviteiten,
        speelvelden: speelveldenData,
        opbouwLeeruitkomsten: leeruitkomstProgressies
      };

      const json = JSON.stringify(data, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'cmd-curriculum-export.json');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error exporting JSON:', error);
      alert('Er is een fout opgetreden bij het exporteren naar JSON. Zie console voor details.');
    }
  };

  const exportToExcel = () => {
    try {
      const workbook = XLSX.utils.book_new();

      // TAB 1: Inhoud per semester
      const inhoudData: any[] = [];
      inhoudData.push(['Semester', 'Semester Naam', 'Activiteit', 'Duur', 'Leeruitkomst', 'Beschrijving', 'Speelvelden', 'Kennis', 'Vaardigheden', 'Houding']);
      
      semesterActiviteiten.forEach(item => {
        inhoudData.push([
          item.semester,
          item.semesterNaam,
          item.activiteit,
          item.duur,
          item.leeruitkomst,
          item.beschrijving,
          item.speelvelden,
          item.kennis,
          item.vaardigheden,
          item.houding
        ]);
      });

      // TAB 2: Speelvelden
      const speelveldenDataExcel: any[] = [];
      speelveldenDataExcel.push([
        'Semester', 
        'Semester Naam', 
        'Jaar',
        'Zelcom Niveau',
        'Speelveld', 
        'Introductie',
        'Globale Beschrijving', 
        'Kernfocus', 
        'Leeruitkomsten', 
        'Typische Activiteiten', 
        'Verbanden met Andere Semesters'
      ]);
      
      speelveldenData.forEach(item => {
        speelveldenDataExcel.push([
          item.semester,
          item.semesterNaam,
          item.jaar,
          item.zelcomNiveau || '',
          item.speelveld,
          item.introductie,
          item.globaleBeschrijving,
          item.kernfocus,
          item.leeruitkomsten || '',
          item.typischeActiviteiten,
          item.verbandenMetAndereSemesters
        ]);
      });

      // TAB 3: Opbouw leeruitkomsten
      const opbouwData: any[] = [];
      opbouwData.push(['Semester', 'Semester Naam', 'Leeruitkomst', 'Beschrijving']);
      
      leeruitkomstProgressies.forEach(item => {
        opbouwData.push([
          item.semester,
          item.semesterNaam,
          item.leeruitkomst,
          item.beschrijving
        ]);
      });

      // Create sheets
      const inhoudSheet = XLSX.utils.aoa_to_sheet(inhoudData);
      const speelveldenSheet = XLSX.utils.aoa_to_sheet(speelveldenDataExcel);
      const opbouwSheet = XLSX.utils.aoa_to_sheet(opbouwData);

      // Set column widths
      inhoudSheet['!cols'] = [
        { wch: 10 }, { wch: 20 }, { wch: 30 }, { wch: 10 }, { wch: 20 }, 
        { wch: 100 }, { wch: 30 }, { wch: 80 }, { wch: 80 }, { wch: 60 }
      ];

      speelveldenSheet['!cols'] = [
        { wch: 10 }, { wch: 20 }, { wch: 8 }, { wch: 10 }, { wch: 30 }, 
        { wch: 80 }, { wch: 80 }, { wch: 60 }, { wch: 60 }, { wch: 60 }, { wch: 60 }
      ];

      opbouwSheet['!cols'] = [
        { wch: 10 }, { wch: 20 }, { wch: 25 }, { wch: 100 }
      ];

      // Append sheets to workbook
      XLSX.utils.book_append_sheet(workbook, inhoudSheet, 'Inhoud per semester');
      XLSX.utils.book_append_sheet(workbook, speelveldenSheet, 'Speelvelden');
      XLSX.utils.book_append_sheet(workbook, opbouwSheet, 'Opbouw leeruitkomsten');

      XLSX.writeFile(workbook, 'cmd-curriculum-export.xlsx');
    } catch (error) {
      console.error('Error exporting Excel:', error);
      alert('Er is een fout opgetreden bij het exporteren naar Excel. Zie console voor details.');
    }
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