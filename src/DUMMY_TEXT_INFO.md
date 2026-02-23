# Dummy Text Status

## Aangepast:
1. ✅ Speelveld beschrijvingen in `/data/speelvelden.ts` - alle 6 speelvelden hebben dummy Lorem ipsum teksten
2. ✅ "Toon competenties" vervangen door "Meer info" in `/components/SpeelveldView.tsx`
3. ✅ Semester 1 Design (als voorbeeld) heeft dummy text voor globalDescription en kernfocus

## Nog te doen (handmatig later):
- Alle 45 globalDescription velden in `/data/leerlijnProgressions.ts` vervangen door korte dummy tekst (ca. 2-3 zinnen)
- Alle 45 kernfocus velden vervangen door korte dummy tekst
- Alle competenties (kennis/vaardigheden) in `/data/speelveldCompetencies.ts` vervangen door dummy tekst

## Dummy text patterns:
**GlobalDescription** (voor in semester kaarten - 2-3 zinnen):
- "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
- "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
- etc.

**Kernfocus** (korte zin):
- "Lorem ipsum dolor sit amet consectetur adipiscing elit"
- "Duis aute irure dolor reprehenderit"
- etc.

**Competenties bullets**:
- Kennis: "Lorem ipsum dolor sit amet consectetur"
- Vaardigheden: "Ut enim ad minim veniam quis nostrud"
- Houding: Wordt al gevuld uit `/data/houdingPerLeeruitkomst.ts`

## Script optie:
Er is een script `/scripts/updateDummyText.js` dat automatisch alle text kan vervangen.
Run met: `node scripts/updateDummyText.js` (maar dit werkt alleen in een Node environment).
