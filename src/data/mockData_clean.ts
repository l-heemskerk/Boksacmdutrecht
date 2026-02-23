];

export const semesters: Semester[] = Array.from({ length: 7 }, (_, i) => ({
  number: i + 1,
  name: semesterNames[i],
  description: semesterDescriptions[i + 1],
  level: semesterLevels[i + 1],
  year: i >= 4 && i <= 5 ? 3 : i >= 6 ? 4 : Math.floor(i / 2) + 1,
  activities: i === 5 ? [] : mockActivities.filter(a => a.semester === i + 1),
  specializations: i === 5 ? semester6Specializations : undefined,
  professionalProducts: professionalProductsBySemester[i + 1]
}));
