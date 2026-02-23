import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { SemesterView } from './components/SemesterView';
import { LearningOutcomeView } from './components/LearningOutcomeView';
import { LeerlijnenView } from './components/LeerlijnenView';
import { SearchView } from './components/SearchView';
import { HelpDialog } from './components/HelpDialog';
import { ExportButton } from './components/ExportButton';
import { MobileWarning } from './components/MobileWarning';
import { semesters } from './data/curriculumDataConverter';
import { BookOpen, Layers, Search, Map } from 'lucide-react';
import { CompetencyType } from './types/curriculum';
import { Button } from './components/ui/button';

export default function App() {
  const [selectedOutcomes, setSelectedOutcomes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCompetencies, setSelectedCompetencies] = useState<CompetencyType[]>([]);
  const [activeTab, setActiveTab] = useState("semester");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-white sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-gray-900">BoKSA CMD Utrecht</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-8">
            <TabsList className="bg-white border border-gray-200 shadow-sm rounded-xl h-auto p-1.5 grid grid-cols-1 md:grid-cols-3 w-full xl:w-auto gap-1">
              <TabsTrigger 
                value="semester" 
                className="flex items-center justify-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm px-6 py-2.5 rounded-lg transition-all duration-200 font-medium whitespace-nowrap"
              >
                <Layers className="w-4 h-4" />
                Semesteroverzicht
              </TabsTrigger>
              <TabsTrigger 
                value="leerlijnen" 
                className="flex items-center justify-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm px-6 py-2.5 rounded-lg transition-all duration-200 font-medium whitespace-nowrap"
              >
                <Map className="w-4 h-4" />
                Leerlijnen
              </TabsTrigger>
              <TabsTrigger 
                value="outcome" 
                className="flex items-center justify-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm px-6 py-2.5 rounded-lg transition-all duration-200 font-medium whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4" />
                Leeruitkomsten
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2 w-full xl:w-auto">
              <Button 
                variant={activeTab === 'search' ? 'default' : 'outline'}
                className={`flex-1 xl:flex-none gap-2 h-auto py-3 px-6 shadow-sm transition-all duration-200 ${
                  activeTab === 'search' 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('search')}
              >
                <Search className="w-4 h-4" />
                Zoeken in BoKSA
              </Button>
              <HelpDialog />
            </div>
          </div>

          <TabsContent value="semester">
            <SemesterView
              semesters={semesters}
              selectedOutcomes={selectedOutcomes}
              searchQuery={""}
              selectedCompetencies={selectedCompetencies}
              onOutcomeChange={setSelectedOutcomes}
              onSearchChange={setSearchQuery}
              onCompetencyChange={setSelectedCompetencies}
            />
          </TabsContent>

          <TabsContent value="outcome">
            <LearningOutcomeView
              searchQuery={""}
            />
          </TabsContent>

          <TabsContent value="leerlijnen">
            <LeerlijnenView />
          </TabsContent>

          <TabsContent value="search">
            <SearchView
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
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

      {/* Mobile Warning */}
      <MobileWarning />
    </div>
  );
}