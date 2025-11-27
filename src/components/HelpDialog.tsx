import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { HelpCircle, BookOpen, Layers, TrendingUp, Brain, Zap, Heart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function HelpDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
          <HelpCircle className="w-4 h-4" />
          Help & Uitleg
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Help & Uitleg - CMD Utrecht Curriculum</DialogTitle>
          <DialogDescription>
            Ontdek hoe je het curriculum overzicht gebruikt
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overzicht</TabsTrigger>
            <TabsTrigger value="tabs">Tabs</TabsTrigger>
            <TabsTrigger value="export">Export</TabsTrigger>
            <TabsTrigger value="begrippen">Begrippen</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Over het CMD Curriculum</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-700">
                  De opleiding CMD Utrecht leidt studenten op tot mensgerichte ontwerpers, gebaseerd op het{' '}
                  <a 
                    href="https://www.vereniginghogescholen.nl/system/profiles/documents/000/000/277/original/Communication___Multimedia_Design_-_Beroeps-_en_competentieprofiel.pdf?1657700622"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    INCMD competentieprofiel
                  </a>. 
                  Onderzoekend vermogen speelt een centrale rol in het curriculum en is uitgewerkt in vijf leeruitkomsten: Context, 
                  Ontwerp/Concept, Prototype/Testen, Verbinden en Leren/Reflecteren.
                </p>
                <p className="text-gray-700">
                  Het{' '}
                  <a 
                    href="https://cmdmethods.nl/about/more-info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Development Oriented Triangulation Framework (DOT)
                  </a>{' '}
                  vormt hierbij het uitgangspunt, met aandacht voor het 'Wat', 
                  'Waarom' en 'Hoe' van ontwerpend onderzoek. Deze elementen zijn concreet vertaald in deze interactieve BOKSA 
                  (Body of Knowledge, Skills and Attitudes), welke met enige regelmaat wordt geüpdatet.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="export" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📊 Data Export & GitHub
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-gray-900">Download Opties</h4>
                  <p className="text-gray-700 text-sm">
                    Gebruik de "Download" knop om het curriculum te exporteren in verschillende formaten:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                    <li><strong>Excel (.xlsx)</strong> - Met 4 tabbladen: Jaar 1 & 2, Specialisaties, Praktijk & Afstuderen, en Opbouw Leeruitkomsten</li>
                    <li><strong>CSV (.csv)</strong> - Eenvoudig formaat voor data-analyse en versiebeheer</li>
                    <li><strong>JSON (.json)</strong> - Gestructureerde data voor programmatisch gebruik</li>
                  </ul>
                </div>

                <div className="space-y-2 pt-3 border-t">
                  <h4 className="text-gray-900">CSV voor GitHub</h4>
                  <p className="text-gray-700 text-sm">
                    Een statische CSV is beschikbaar voor version control. Deze bevat activiteitnamen bij elke competentie voor betere traceerbaarheid.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-md border border-blue-200 mt-2">
                    <p className="text-sm text-blue-900">
                      <strong>💡 Tip:</strong> Gebruik de groene "📊 CSV" knop in de header om de statische CSV te downloaden. 
                      Deze kan je committen naar je GitHub repository om curriculum wijzigingen bij te houden.
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t">
                  <h4 className="text-gray-900">CSV Structuur</h4>
                  <p className="text-gray-700 text-sm">
                    De CSV bevat deze kolommen:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                    <li>Semester, Semester Naam, Specialisatie, Jaar, Niveau</li>
                    <li>Leeruitkomst (context, ontwerpen, prototype, verbinden, reflecteren)</li>
                    <li>Kennis items met activiteitnaam tussen haakjes</li>
                    <li>Vaardigheden items met activiteitnaam tussen haakjes</li>
                    <li>Houding items (generiek per semester)</li>
                  </ul>
                </div>

                <div className="space-y-2 pt-3 border-t">
                  <h4 className="text-gray-900">Export Opties</h4>
                  <p className="text-gray-700 text-sm">
                    Gebruik de <strong>Exporteer</strong> knop in de header om alle curriculumdata te downloaden:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                    <li><strong>Excel:</strong> Volledig overzicht met alle tabbladen</li>
                    <li><strong>CSV:</strong> Platte data voor versiebeheer en analyse</li>
                    <li><strong>JSON:</strong> Gestructureerde data voor ontwikkelaars</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tabs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-600" />
                  Per Semester
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-700">
                  Bekijk onderwijsactiviteiten per semester. Elk semester kan in- en uitgeklapt worden.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Klik op een semester om de activiteiten te bekijken</li>
                  <li>Bekijk per activiteit de competenties per leeruitkomst</li>
                  <li>Zie de beroepsproducten die studenten opleveren</li>
                  <li>Filter op leeruitkomsten via het linkermenu</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Leerlijnen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-700">
                  Bekijk de opbouw van kennis, vaardigheden en houding door de jaren heen.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Selecteer Kennis, Vaardigheden of Houding bovenaan</li>
                  <li>Filter op specifieke semesters met de dropdown</li>
                  <li>Zie de progressie in complexiteit en zelfstandigheid</li>
                  <li>Houding wordt weergegeven per leeruitkomst</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Opbouw Leeruitkomsten
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-700">
                  Volg de ontwikkeling van elke leeruitkomst per semester.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>Kies een leeruitkomst via de gekleurde tabs</li>
                  <li>Gemarkeerde tekst toont nieuwe onderdelen per semester</li>
                  <li>Zie de progressie van basis naar gevorderd niveau</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="begrippen" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Belangrijke begrippen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-blue-600" />
                    <h4 className="text-gray-900">Kennis</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Theoretische kennis en begrip van concepten, methoden en technieken die studenten opdoen tijdens hun studie.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-orange-600" />
                    <h4 className="text-gray-900">Vaardigheden</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Praktische vaardigheden en het kunnen toepassen van kennis in concrete situaties en projecten.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-600" />
                    <h4 className="text-gray-900">Houding</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Professionele en persoonlijke houding, zoals reflectievermogen, samenwerken, initiatief nemen en onderzoekende instelling.
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t">
                  <h4 className="text-gray-900">Leeruitkomsten</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="p-2 bg-red-50 rounded text-sm">
                      <span className="text-gray-900">Context:</span> Analyseren en begrijpen van context
                    </div>
                    <div className="p-2 bg-blue-50 rounded text-sm">
                      <span className="text-gray-900">Ontwerpen:</span> Concepten en oplossingen ontwerpen
                    </div>
                    <div className="p-2 bg-green-50 rounded text-sm">
                      <span className="text-gray-900">Prototype & testen:</span> Uitwerken en testen van prototypes
                    </div>
                    <div className="p-2 bg-yellow-50 rounded text-sm">
                      <span className="text-gray-900">Verbinden:</span> Samenwerken en communiceren
                    </div>
                    <div className="p-2 bg-purple-50 rounded text-sm">
                      <span className="text-gray-900">Leren & reflecteren:</span> Kritisch reflecteren en evalueren
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t">
                  <h4 className="text-gray-900">Beroepsproducten</h4>
                  <p className="text-gray-700 text-sm">
                    Concrete producten en resultaten die studenten opleveren per leeruitkomst, zoals onderzoeksrapporten, ontwerpen, prototypes en presentaties.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}