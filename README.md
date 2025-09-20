# Picsal

Application web construite avec Next.js (App Router), TypeScript et Tailwind CSS 4, pensée pour des interfaces rapides, fluides et modernes. Le projet est initialisé avec `create-next-app` et s’appuie sur des composants et animations légers.

- Démo: https://picsal.vercel.app
- Branche par défaut: `main`

## Pile technique

- Framework: Next.js 15
- Langage: TypeScript
- UI/Styles:
  - Tailwind CSS 4
  - Radix UI (`@radix-ui/react-label`, `@radix-ui/react-slot`)
  - `tailwind-merge`
- Animations/ICÔNES:
  - Framer Motion / Motion 12
  - `lucide-react`
- Qualité:
  - ESLint 9 + `eslint-config-next`

Versions clés (extrait `package.json`):
- next: 15.5.x
- react / react-dom: 19.1.x
- typescript: ^5
- tailwindcss: ^4
- framer-motion / motion: ^12.23.x
- lucide-react: ^0.542.x

## Prise en main

### Prérequis

- Node.js 18+ (recommandé) ou 20+
- Un gestionnaire de paquets (npm, pnpm, yarn ou bun)

### Installation

```bash
# Avec npm
npm install

# Ou pnpm
pnpm install

# Ou yarn
yarn

# Ou bun
bun install
```

### Développement

```bash
npm run dev
# ou
pnpm dev
# ou
yarn dev
# ou
bun dev
```

Lancez ensuite votre navigateur sur http://localhost:3000.

Le point d’entrée de la page d’accueil se trouve dans `src/app/page.tsx` (App Router). Les modifications se rechargent à chaud.

### Build et production

```bash
# Build optimisé (Turbopack)
npm run build

# Démarrer en mode production
npm start
```

### Lint

```bash
npm run lint
```

## Structure du projet

```
.
├─ public/                 # Assets statiques (images, favicons, etc.)
├─ src/
│  ├─ app/                 # App Router (pages, layouts, metadata)
│  ├─ components/          # Composants UI réutilisables
│  └─ lib/                 # Utilitaires, helpers, constantes
├─ next.config.ts          # Configuration Next.js
├─ tailwind / PostCSS      # Configs Tailwind 4 & PostCSS (voir fichiers .mjs)
├─ eslint.config.mjs       # Règles ESLint
├─ tsconfig.json           # Configuration TypeScript
└─ package.json
```

## Scripts disponibles

- `dev`: démarre le serveur de développement (Turbopack)
- `build`: build de production (Turbopack)
- `start`: démarre le serveur Next en production
- `lint`: lance ESLint

Exemple:

```bash
npm run dev
```

## Styles et UI

- Tailwind CSS 4 est déjà configuré (voir `postcss.config.mjs`).
- `tailwind-merge` aide à éviter les classes en conflit.
- Radix UI fournit des primitives accessibles (labels, slots).
- Lucide propose des icônes SVG légères.
- Framer Motion / Motion 12 permet des animations fluides.

## Déploiement

Le projet est prêt pour Vercel:

- Connectez le dépôt à Vercel
- Sélectionnez la branche `main`
- Variables d’environnement: ajoutez-les si nécessaire (non requises par défaut)
- Déployez

Documentation: https://nextjs.org/docs/app/building-your-application/deploying

## Contribution

1. Créez une branche à partir de `main`
2. Faites vos changements
3. Assurez-vous que `npm run lint` passe
4. Ouvrez une Pull Request détaillant vos modifications

## Licence

Aucune licence n’est explicitement fournie dans le dépôt au moment de la rédaction. Par défaut, tous droits réservés. Ajoutez un fichier `LICENSE` si vous souhaitez ouvrir le code (ex: MIT).

## Auteur

- @Okpeyemi — https://github.com/Okpeyemi

---
Made with Next.js, Tailwind CSS & Motion.
