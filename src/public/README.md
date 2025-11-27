# CMD BoKSA Overzicht - Data Exports

## CSV Export

Dit bestand bevat een volledig overzicht van het CMD curriculum in CSV formaat. Het bestand kan gebruikt worden voor:

- **Data-analyse** met tools zoals Excel, Google Sheets, of Python/R
- **Versiebeheer** in Git/GitHub voor het bijhouden van curriculum wijzigingen
- **Automatische verwerking** in andere systemen
- **Backup** van de curriculum data

### Structuur

Het CSV bestand heeft de volgende kolommen:

| Kolom | Beschrijving |
|-------|-------------|
| Semester | Semester nummer (1-7) |
| Semester Naam | Naam van het semester (bijv. BASE, CHALLENGE, etc.) |
| Specialisatie | Specialisatie naam (alleen bij semester 6) |
| Jaar | Studiejaar (1-4) |
| Niveau | Niveau beschrijving van het semester |
| Leeruitkomst | Leeruitkomst ID (context, ontwerpen, prototype, verbinden, reflecteren) |
| Kennis | Kennis competenties met activiteitnaam tussen haakjes |
| Vaardigheden | Vaardigheden competenties met activiteitnaam tussen haakjes |
| Houding | Houding competenties (generiek per semester) |

### Gebruik in GitHub

1. **Download het bestand**: `cmd-boksa-overzicht.csv`
2. **Commit naar je repository**:
   ```bash
   git add cmd-boksa-overzicht.csv
   git commit -m "Update curriculum data"
   git push
   ```
3. **Track wijzigingen**: GitHub toont automatisch verschillen tussen versies

### Updates

Het CSV bestand wordt automatisch gegenereerd op basis van de data in de applicatie. Om het bestand te updaten:

1. Maak wijzigingen in de applicatie data
2. Download de nieuwe CSV via de "Download" knop in de app
3. Vervang het bestaande bestand in `/public/`

## Andere Formaten

De applicatie ondersteunt ook export naar:
- **Excel (.xlsx)** - Met 4 tabbladen: Jaar 1 & 2, Specialisaties, Praktijk & Afstuderen, en Opbouw Leeruitkomsten
- **JSON (.json)** - Gestructureerde data voor programmatisch gebruik

## Contact

Voor vragen over de data structuur of exports, neem contact op met het CMD team.
