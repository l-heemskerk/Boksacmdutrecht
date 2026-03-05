import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './components/ui/sheet';
import { SemesterView } from './components/SemesterView';
import { LearningOutcomeView } from './components/LearningOutcomeView';
import { LeerlijnenView } from './components/LeerlijnenView';
import { SearchView } from './components/SearchView';
import { HelpDialog } from './components/HelpDialog';
import { ExportButton } from './components/ExportButton';
import { MobileWarning } from './components/MobileWarning';
import { semesters } from './data/curriculumDataConverter';
import { BookOpen, Layers, Search, Map, Menu } from 'lucide-react';
import { CompetencyType } from './types/curriculum';
import { Button } from './components/ui/button';

export default function App() {
  const [selectedOutcomes, setSelectedOutcomes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCompetencies, setSelectedCompetencies] = useState<CompetencyType[]>([]);
  const [activeTab, setActiveTab] = useState("semester");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Reorder semesters: 1, 2, 3, 4, 5 (PRAKTIJK), 6 (SPECIALISATIE), 7
  const reorderedSemesters = [...semesters].sort((a, b) => {
    const order = [1, 2, 3, 4, 5, 6, 7];
    return order.indexOf(a.number) - order.indexOf(b.number);
  });

  const tabItems = [
    { value: 'semester', label: 'Semesteroverzicht', icon: Layers },
    { value: 'leerlijnen', label: 'Leerlijnen', icon: Map },
    { value: 'outcome', label: 'Leeruitkomsten', icon: BookOpen },
  ];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-white sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Mobile Menu Button */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="md:hidden border-2 border-gray-300 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all duration-200 shadow-sm h-10 w-10"
                  >
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] sm:w-[320px]">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <Menu className="w-5 h-5" />
                      Navigatie
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-2">
                    {tabItems.map((item) => {
                      const isActive = activeTab === item.value;
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.value}
                          onClick={() => handleTabChange(item.value)}
                          className={`
                            w-full px-4 py-4 rounded-lg text-left transition-all duration-200 flex items-center gap-3 border
                            ${isActive 
                              ? 'bg-blue-50 border-blue-200 shadow-sm' 
                              : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                            }
                          `}
                        >
                          <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-100' : 'bg-gray-100'}`}>
                            <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                          </div>
                          <div className="flex-1">
                            <div className={`font-bold ${isActive ? 'text-blue-900' : 'text-gray-700'}`}>
                              {item.label}
                            </div>
                            {isActive && (
                              <div className="text-xs text-blue-600 mt-0.5">Actief</div>
                            )}
                          </div>
                          {isActive && (
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </SheetContent>
              </Sheet>

              <div>
                <h1 className="text-gray-900">BoKSA CMD Utrecht</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline"
                size="icon" 
                className={`transition-all duration-200 border-2 shadow-sm h-10 w-10 ${
                  activeTab === 'search' 
                    ? 'border-blue-600 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:border-blue-700' 
                    : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('search')}
                title="Zoeken in BoKSA"
              >
                <Search className="w-5 h-5" />
              </Button>
              <HelpDialog />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Desktop Tabs */}
          <div className="hidden md:flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 mb-8">
            <TabsList className="bg-white border border-gray-200 shadow-sm rounded-xl h-auto p-1.5 grid grid-cols-1 md:grid-cols-3 w-full xl:w-auto gap-1">
              {tabItems.map((item) => {
                const Icon = item.icon;
                return (
                  <TabsTrigger 
                    key={item.value}
                    value={item.value}
                    className="flex items-center justify-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm px-6 py-2.5 rounded-lg transition-all duration-200 font-medium whitespace-nowrap text-sm"
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          <TabsContent value="semester">
            <SemesterView
              semesters={reorderedSemesters}
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