import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { SemesterView } from './components/SemesterView';
import { LearningOutcomeView } from './components/LearningOutcomeView';
import { CompetencyView } from './components/CompetencyView';
import { HelpDialog } from './components/HelpDialog';
import { semesters, mockActivities } from './data/mockData';
import { BookOpen, Layers, TrendingUp } from 'lucide-react';
import cmdLogo from 'figma:asset/68e356bfb1ce5a4466aa3dede71306cadf1e68d2.png';
import { CompetencyType } from './types/curriculum';

export default function App() {
  const [selectedOutcomes, setSelectedOutcomes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCompetencies, setSelectedCompetencies] = useState<CompetencyType[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-white border-b-4 border-blue-600 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src={cmdLogo} 
                alt="CMD Utrecht Logo" 
                className="h-16 w-auto"
              />
              <div>
                <h1 className="text-gray-900">BoKSA CMD Utrecht</h1>
              </div>
            </div>
            <HelpDialog />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="semester" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6 h-auto p-1 bg-white border-2 border-gray-200 shadow-md">
            <TabsTrigger 
              value="semester" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3"
            >
              <Layers className="w-4 h-4" />
              Per Semester
            </TabsTrigger>
            <TabsTrigger 
              value="competency" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3"
            >
              <TrendingUp className="w-4 h-4" />
              Competenties
            </TabsTrigger>
            <TabsTrigger 
              value="outcome" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3"
            >
              <BookOpen className="w-4 h-4" />
              Opbouw Leeruitkomsten
            </TabsTrigger>
          </TabsList>

          <TabsContent value="semester">
            <SemesterView
              semesters={semesters}
              selectedOutcomes={selectedOutcomes}
              searchQuery={searchQuery}
              selectedCompetencies={selectedCompetencies}
              onOutcomeChange={setSelectedOutcomes}
              onSearchChange={setSearchQuery}
              onCompetencyChange={setSelectedCompetencies}
            />
          </TabsContent>

          <TabsContent value="competency">
            <CompetencyView
              activities={mockActivities}
              searchQuery={searchQuery}
            />
          </TabsContent>

          <TabsContent value="outcome">
            <LearningOutcomeView
              searchQuery={searchQuery}
            />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white border-t-2 border-blue-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} CMD Utrecht - Communication & Multimedia Design
          </p>
        </div>
      </footer>
    </div>
  );
}
