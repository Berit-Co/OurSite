# BerIT

## Obligatoriska Extensions

Se till att du har dessa VS Code-tillägg installerade:

- **Prettier** - Kodformaterare
- **ESLint** - Kodkvalitet och stilkontrollant
- **Tailwind CSS IntelliSense** - Intelligenta Tailwind CSS-verktyg
- **PostCSS Language Support** - PostCSS språkfunktioner

## Utvecklingsinställningar

### Förutsättningar

```json
"engines": {
  "node": ">=18.0.0",
  "npm": ">=9.0.0"
}
```

### Installation

```bash
# Installera beroenden
npm install
```

## Projektstruktur

```
src/
├── assets/ # Statiska tillgångar
│     ├── img/ # Bilder
│     └── style/ # CSS
│
├── components/ # React-komponenter
│     ├── animation/ # Animationskomponenter
│     ├── navigation/ # Navigeringskomponenter
│     ├── sections/ # Komponenter för sidans sektioner
│     └── ui/ # UI-komponenter
│          └── icons / # Här sparas alla ikoner
│
├── pages/ # Vår landingpage
│
├── utils/ # Hjälpfunktioner
│ └── infoData.js # Samlad data för sektionernas info
│
```

## Kodkvalitetsverktyg

### ESLint

- Strikt konsolbruk (endast `info`, `warn`, `error` tillåtna)
- Tillämpar importgränser
- Säkerställer kodkvalitet
- Maximalt antal rader per fil: 100
- Maximalt antal characters per rad: 80

### Prettier

```json
{
  "endOfLine": "lf",
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "arrowParens": "always",
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxSingleQuote": false,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "plugins": [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports"
  ],
  "importOrder": [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/components/(.*)$",
    "^@/utils/(.*)$",
    "^@/(.*)$",
    "^[./]"
  ]
}
```

### Produktionsåtgärder

- Console.log-uttalanden tas automatiskt bort i produktion genom att ha `drop_console: true` i vite.config.js
- Kommentarer tas bort i produktionsbyggnader via terser-konfiguration

## Utvecklingsflöde

### Tillgängliga kommandon

```bash
# Utveckling
npm run dev           # Starta utvecklingsservern
npm run format        # Formatera kod
npm run format:check  # Kontrollera formatering
npm run lint         # Lintkod

# Produktion
npm run build        # Bygg för produktion
npm run preview      # Förhandsgranska produktionsbyggnaden
```

### Git-flöde

#### Förkommitthooks (Husky)

Alla commits måste passera:

- Prettier-formatering
- ESLint-kontroller
- Tester
- Typkontroll

#### Commit-meddelandemall

```
feat: *lägg till ny funktion*
fix: *lösa bugg*
docs: *uppdatera dokumentation*
style: *formatera kod*
refactor: *omstrukturera kod*
test: *lägg till tester*
chore: *uppdatera beroenden*
```

## Felsökning

### Vanliga problem

1. Importfel:

   - Verifiera att importerna följer gränserna
   - Kontrollera sökvägsalias (@/)
   - Se till att rätt fil finns

2. Formateringsproblem:

   - Kör `npm run format`
   - Kontrollera Prettier-konfigurationen
   - Verifiera VS Code-inställningarna

## Ytterligare resurser

- [Vitest-dokumentation](https://vitest.dev/)
- [Tailwind CSS-dokumentation](https://tailwindcss.com/)
- [ESLint-dokumentation](https://eslint.org/)
- Kontakta teamledaren för ytterligare frågor

## Kodstil & Formatering

### Tailwind CSS

Vi använder automatisk Tailwind-klasssortering vid spara (Ctrl + S). Klasser kommer att organiseras enligt Tailwinds rekommenderade ordning:

```jsx
// Innan spara
<div className="p-4 flex text-white bg-coral hover:bg-coral-dark">

// Efter spara (Ctrl + S)
<div className="flex bg-coral p-4 text-white hover:bg-coral-dark">
```

### Importsortering

Genom att använda `@ianvs/prettier-plugin-sort-imports` organiseras importerna automatiskt i denna ordning:

```javascript
// 1. React-importer
import { useState, useEffect } from "react";

// 2. Externa bibliotek
import { QueryClient } from "@tanstack/react-query";

// 3. Komponenter (@/components)
import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";

// 4. Delade krokar (@/hooks)
import { usePagination } from "@/hooks/usePagination";

// 5. Funktionsspecifika importeringar
import Navitems from "./components/Navitems";
import { Navitems } from "./utils/Navitems";

// 6. Typer och konstanter
import { infoData } from "@/utils/infoData";
import type { sections } from "@/types";
```

### Automatisk formatering

- Tailwind-klasser sorteras vid spara
- Importer organiseras vid spara
- Kod formateras enligt Prettier-regler vid spara
- ESLint-fel åtgärdas vid spara när det är möjligt
