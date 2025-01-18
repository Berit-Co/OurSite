# BerIT

## Required Extensions

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
├── features/               # Funktionbaserade moduler
│   ├── _car-trading/       # Bilhandelsfunktioner
│   │   ├── marketplace/    # Individuell funktion
│   │   │   ├── components/ # Funktionspecifika komponenter
│   │   │   ├── pages/      # Funktionsidor
│   │   │   └── utils/      # Funktionspecifika verktyg
│   │   ├── garage/
│   │   └── parking/
│   ├── 2.analytics/        # Analysfunktioner
│   └── 3.tools/            # Verktygsrelaterade funktioner
├── components/             # Delade komponenter
├── hooks/                  # Delade krokar
├── context/                # Delad kontext
├── utils/                  # Delade verktyg
└── __tests__/              # Testfiler
```

## Arkitektur & Importregler

### Gränser

Vi följer strikta gränser för import för att bibehålla en ren arkitektur:

1. Funktioner kan ENDAST importera:

   - Från inom sin egen funktionskatalog
   - Från delade resurser (`@/components`, `@/hooks`, `@/utils`)

2. Funktioner KAN INTE importera:
   - Från andra funktioner (t.ex. `marketplace` KAN INTE importera från `garage`)
   - Från andra kategorier (t.ex. `1.car-trading` KAN INTE importera från `2.analytics`)

### Exempel

✅ Godkända importeringar:

```javascript
// Inom samma funktion

// Från delade resurser
import Pagination from "@/components/ui/Pagination"
import { usePagination } from "@/hooks/usePagination"
```

❌ Ogiltiga importeringar:

```javascript
// Från annan funktionskategori

// Från annan funktion i samma kategori
import { GarageList } from "@/features/1.car-trading/garage/components/GarageList"
import { MetricsChart } from "@/features/2.analytics/metrics/components/MetricsChart"
```

## Kodkvalitetsverktyg

### ESLint

- Strikt konsolbruk (endast `info`, `warn`, `error` tillåtna)
- Tillämpar importgränser
- Säkerställer kodkvalitet

### Prettier

```json
{
  "endOfLine": "lf",
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports"
  ],
  "importOrder": [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/context/(.*)$",
    "^@/components/(.*)$",
    "^@/hooks/(.*)$",
    "^@/utils/(.*)$",
    "^@/(.*)$",
    "^[./]"
  ]
}
```

### Produktionsåtgärder

- Console.log-uttalanden tas automatiskt bort i produktion genom att ha `drop_console: true` i vite.config.js
- Kommentarer tas bort i produktionsbyggnader via terser-konfiguration
- Strikt typkontroll
- Omfattande testtäckning krävs

## Utvecklingsflöde

### Tillgängliga kommandon

```bash
# Utveckling
npm run dev           # Starta utvecklingsservern
npm run format        # Formatera kod
npm run format:check  # Kontrollera formatering
npm run lint         # Lintkod

# Testning
npm t                # Kör alla tester
npm run test:watch   # Kör tester i övervakningsläge
npm run test:coverage # Kör tester med täckning

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

## Testning

### Skrivning av tester

Placera tester i lämpliga kataloger:

- `src/__tests__/features/[category]/[feature]/`
- `src/__tests__/components/`
- `src/__tests__/hooks/`

### Exempeltest

```javascript
import { describe, expect, it } from "vitest"

describe("Feature: [Name]", () => {
  it("should [expected behavior]", () => {
    // Testimplementation
  })
})
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

3. Testfel:
   - Kontrollera Node.js-versionen
   - Verifiera testmiljön
   - Kör tester i isolering

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

// 3. Delade komponenter (@/components)
import Pagination from "@/components/ui/Pagination";
import Modal from "@/components/Modal";

// 4. Delade krokar (@/hooks)
import { usePagination } from "@/hooks/usePagination";

// 5. Funktionsspecifika importeringar
import CarList from "./components/CarList";
import { carList } from "./utils/dummyCarList";

// 6. Typer och konstanter
import { ROUTES } from "@/utils/constants";
import type { Car } from "@/types";
```

### Automatisk formatering

- Tailwind-klasser sorteras vid spara
- Importer organiseras vid spara
- Kod formateras enligt Prettier-regler vid spara
- ESLint-fel åtgärdas vid spara när det är möjligt
