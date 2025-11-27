# GitHub Integration Instructies

## CSV Export voor Version Control

De applicatie genereert automatisch een CSV export van het volledige CMD curriculum. Dit bestand kan gebruikt worden voor version control in GitHub.

## Setup

### 1. Voeg CSV toe aan je repository

```bash
# Kopieer het CSV bestand naar je repository
cp public/cmd-boksa-overzicht.csv /path/to/your/repo/

# Commit het bestand
git add cmd-boksa-overzicht.csv
git commit -m "Add CMD curriculum CSV export"
git push
```

### 2. Track wijzigingen

GitHub toont automatisch verschillen tussen versies van CSV bestanden. Je kunt:

- **Geschiedenis bekijken**: Klik op "History" in GitHub om alle wijzigingen te zien
- **Vergelijken**: Gebruik de "Compare" functie om verschillende versies te vergelijken
- **Bladeren**: Blader door verschillende versies met de "Blame" view

### 3. Automatische updates (optioneel)

Als je de CSV automatisch wilt updaten bij wijzigingen in de data:

1. Voeg het `.github/workflows/update-csv.yml` bestand toe aan je repository
2. Pas de workflow aan voor jouw specifieke setup
3. De CSV wordt automatisch bijgewerkt bij wijzigingen in de `data/` folder

## CSV Structuur

Het bestand bevat de volgende kolommen:

```
Semester | Semester Naam | Specialisatie | Jaar | Niveau | Leeruitkomst | Kennis | Vaardigheden | Houding
```

### Kolom Details

- **Semester**: Nummer 1-7
- **Semester Naam**: BASE, CHALLENGE, EXPLORE, CONNECT, Praktijk, Specialisaties, Afstuderen
- **Specialisatie**: Naam van de specialisatie (alleen semester 6)
- **Jaar**: Studiejaar 1-4
- **Niveau**: Niveau beschrijving
- **Leeruitkomst**: context, ontwerpen, prototype, verbinden, reflecteren
- **Kennis**: Kennis items met activiteitnaam tussen haakjes, gescheiden door `;`
- **Vaardigheden**: Vaardigheden items met activiteitnaam tussen haakjes, gescheiden door `;`
- **Houding**: Houding items gescheiden door `;`

## Gebruik Cases

### Data Analyse

```python
import pandas as pd

# Lees CSV
df = pd.read_csv('cmd-boksa-overzicht.csv')

# Analyseer competenties per semester
print(df.groupby('Semester')['Leeruitkomst'].value_counts())
```

### Filtering

```bash
# Toon alleen semester 1 data
grep "^\"1\"" cmd-boksa-overzicht.csv

# Toon alleen context leeruitkomst
grep "context" cmd-boksa-overzicht.csv
```

### Excel Import

1. Open Excel
2. Ga naar Data > From Text/CSV
3. Selecteer `cmd-boksa-overzicht.csv`
4. Kies delimiter: comma (,)
5. Klik "Load"

## Updates

Om de CSV bij te werken:

1. **In de applicatie**: Gebruik de "Download" knop en selecteer "Exporteer als CSV"
2. **Vervang het bestand**: Overschrijf het oude bestand in je repository
3. **Commit**: 
   ```bash
   git add cmd-boksa-overzicht.csv
   git commit -m "Update curriculum data"
   git push
   ```

## Tips

- **Reguliere backups**: Commit de CSV regelmatig om wijzigingen bij te houden
- **Meaningful commits**: Gebruik duidelijke commit messages (bijv. "Update semester 3 competenties")
- **Branches**: Gebruik branches voor grote wijzigingen
- **Pull Requests**: Review wijzigingen via pull requests voordat je merge

## Support

Bij vragen over de CSV export of GitHub integratie, neem contact op met het CMD team.
