// Script to generate CSV export for GitHub
import { semesters } from '../data/mockData';

// Helper function to add activity names to competencies
const addActivityNameToCompetency = (competency: string, activityName: string) => {
  return `${competency} (${activityName})`;
};

// Generate CSV content
let csv = 'Semester,Semester Naam,Specialisatie,Jaar,Niveau,Leeruitkomst,Kennis,Vaardigheden,Houding\n';

semesters.forEach(semester => {
  if (semester.specializations) {
    // For specializations (semester 6)
    semester.specializations.forEach(spec => {
      spec.activities.forEach(activity => {
        if (activity.learningOutcomeDetails) {
          activity.learningOutcomeDetails.forEach(detail => {
            const kennisWithActivity = detail.kennis.map(k => addActivityNameToCompetency(k, activity.name)).join('; ');
            const vaardighedenWithActivity = detail.vaardigheden.map(v => addActivityNameToCompetency(v, activity.name)).join('; ');
            const houdingItems = detail.houding.join('; ');
            
            csv += `"${semester.number}","${semester.name}","${spec.name}","${semester.year}","${semester.level}","${detail.outcome}","${kennisWithActivity}","${vaardighedenWithActivity}","${houdingItems}"\n`;
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
          const vaardighedenWithActivity = detail.vaardigheden.map(v => addActivityNameToCompetency(v, activity.name)).join('; ');
          const houdingItems = detail.houding.join('; ');
          
          csv += `"${semester.number}","${semester.name}","","${semester.year}","${semester.level}","${detail.outcome}","${kennisWithActivity}","${vaardighedenWithActivity}","${houdingItems}"\n`;
        });
      }
    });
  }
});

// Output to console (can be redirected to file)
console.log(csv);

// Export for use in other scripts
export default csv;
