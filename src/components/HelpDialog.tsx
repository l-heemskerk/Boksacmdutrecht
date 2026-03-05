import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { HelpCircle, BookOpen, Layers, TrendingUp, Brain, Zap, Heart, Map } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function HelpDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="border-2 border-gray-300 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all duration-200 shadow-sm h-10 w-10"
          title="Help & Uitleg"
        >
          <HelpCircle className="w-5 h-5" />
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
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overzicht</TabsTrigger>
            <TabsTrigger value="tabs">Tabs</TabsTrigger>
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
                  <li>Filter op leeruitkomsten via het linkermenu</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Map className="w-5 h-5 text-blue-600" />
                  Leerlijnen & Speelvelden
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  De leerlijnen beschrijven hoe studenten zich ontwikkelen vanuit zes speelvelden: Design, Digitale technologie & AI, Mens & ervaring, Organisatie & strategie, Maatschappij & toekomst en Onderzoekend vermogen. In samenhang met ZELCOM kennen de leerlijnen een opbouw met toenemende complexiteit en zelfstandigheid per semester.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div className="p-3 bg-purple-50 border border-purple-100 rounded-lg">
                    <h5 className="font-semibold text-purple-900 mb-1">Design</h5>
                    <p className="text-sm text-purple-800">Visueel, interactie en conceptueel ontwerp.</p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                    <h5 className="font-semibold text-blue-900 mb-1">Digitale technologie & AI</h5>
                    <p className="text-sm text-blue-800">Front-end, back-end en AI-toepassingen.</p>
                  </div>
                  <div className="p-3 bg-pink-50 border border-pink-100 rounded-lg">
                    <h5 className="font-semibold text-pink-900 mb-1">Mens & ervaring</h5>
                    <p className="text-sm text-pink-800">User experience, psychologie en ethiek.</p>
                  </div>
                  <div className="p-3 bg-orange-50 border border-orange-100 rounded-lg">
                    <h5 className="font-semibold text-orange-900 mb-1">Organisatie & strategie</h5>
                    <p className="text-sm text-orange-800">Business modellen en projectmanagement.</p>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-100 rounded-lg">
                    <h5 className="font-semibold text-green-900 mb-1">Maatschappij & toekomst</h5>
                    <p className="text-sm text-green-800">Maatschappelijke impact en trends.</p>
                  </div>
                  <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-lg">
                    <h5 className="font-semibold text-indigo-900 mb-1">Onderzoekend vermogen</h5>
                    <p className="text-sm text-indigo-800">Methodisch werken en valideren.</p>
                  </div>
                </div>
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
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <h4 className="text-gray-900">ZELCOM</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    De opbouw van het curriculum volgt expliciet het ZELCOM-model (Bulthuis, 2013), waarin de ontwikkeling van studenten wordt beschreven langs zes samenhangende dimensies: Zelfstandigheid, Expertise, Leercontext, Complexiteit, Organisatorische rol en Multidisciplinariteit. Deze dimensies maken zichtbaar hoe studenten gedurende de opleiding groeien van beginnend naar startbekwaam professional.
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