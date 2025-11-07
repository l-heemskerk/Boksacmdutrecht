import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { SemesterView } from './components/SemesterView';
import { LearningOutcomeView } from './components/LearningOutcomeView';
import { CompetencyView } from './components/CompetencyView';
import { FilterPanel } from './components/FilterPanel';
import { semesters, mockActivities } from './data/mockData';
import { BookOpen, Target, Lightbulb } from 'lucide-react';

export default function App() {
  const [selectedOutcomes, setSelectedOutcomes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeView, setActiveView] = useState('semester');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-gray-900">CMD Utrecht Curriculum</h1>
              <p className="text-gray-600 mt-1">
                8 semesters · 4 jaar · 5 leeruitkomsten
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filter Sidebar */}
          <aside className="lg:col-span-1">
            <FilterPanel
              selectedOutcomes={selectedOutcomes}
              searchQuery={searchQuery}
              onOutcomeChange={setSelectedOutcomes}
              onSearchChange={setSearchQuery}
              showOutcomeFilter={activeView !== 'outcome'}
            />
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeView} onValueChange={setActiveView} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="semester" className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Per Semester
                </TabsTrigger>
                <TabsTrigger value="outcome" className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Per Leeruitkomst
                </TabsTrigger>
                <TabsTrigger value="competency" className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Per Competentie
                </TabsTrigger>
              </TabsList>

              <TabsContent value="semester">
                <div className="mb-4">
                  <p className="text-gray-600">
                    Overzicht van alle onderwijsactiviteiten georganiseerd per semester
                  </p>
                </div>
                <SemesterView
                  semesters={semesters}
                  selectedOutcomes={selectedOutcomes}
                  searchQuery={searchQuery}
                />
              </TabsContent>

              <TabsContent value="outcome">
                <div className="mb-4">
                  <p className="text-gray-600">
                    Bekijk de opbouw van elke leeruitkomst door de semesters heen
                  </p>
                </div>
                <LearningOutcomeView
                  activities={mockActivities}
                  searchQuery={searchQuery}
                />
              </TabsContent>

              <TabsContent value="competency">
                <div className="mb-4">
                  <p className="text-gray-600">
                    Zie de progressie van kennis, vaardigheden en houding door het curriculum
                  </p>
                </div>
                <CompetencyView
                  activities={mockActivities}
                  selectedOutcomes={selectedOutcomes}
                  searchQuery={searchQuery}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}
