# Blackspine

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Description

Blackspine is a web application built with Next.js 15.2.1, React (19.0.0) and ReactDOM, with support for Turbopack, Sass, and TypeScript. The project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize and load local fonts.  
The workspace includes a `src` directory organized into:

- **app/**: Root components, layouts, pages, and favicon.
- **assets/**: Fonts and styles (SCSS) organized into variables, mixins, modules, and transitions.
- **components/**: Reusable components, including those for specific sections and modules.

## Project Structure

```
blackspine

├── .gitignore
├── .node-version              # Node Version: 22.14.0
├── .nvmrc                     # Node Version: 22.14.0
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── src/
    ├── app/
    │   ├── favicon.ico
    │   ├── layout.tsx         # Main layout that imports local fonts and global styles
    │   └── page.tsx
    ├── assets/
    │   ├── fonts/
    │   │   ├── Blackside.ttf
    │   │   ├── Witch.ttf
    │   │   └── Yantramanav.woff2
    │   └── styles/
    │       ├── main.scss
    │       ├── animations/
    │       │   └── text-focus-in.scss
    │       ├── mixins/
    │       │   └── media-queries.scss
    │       ├── modifiers/
    │       │   ├── _all.scss
    │       │   ├── global.scss
    │       │   ├── spacing.scss
    │       │   └── typography.scss
    │       ├── modules/
    │       │   ├── _all.scss
    │       │   └── atoms/
    │       │       ├── badges.scss
    │       │       └── ...other files
    │       ├── transitions/
    │       │   └── _all.scss
    │       └── variables/
    │           ├── _all.scss
    │           └── custom-variables.scss
    └── components/
        └── sections/
            └── components/
                └── main/
                    ├── main.module.scss
                    └── main.tsx
```

## Requirements

- **Node.js**: 22.14.0 (you can check using `.nvmrc` or `.node-version`)
- **Package manager**: PNPM (or npm/yarn/bun according to your preference)
- **Next.js** 15.2.1, React 19, and ReactDOM 19
- **Sass** for styles and **TypeScript** as the main language

## NPM Scripts

From the project root you can use the following commands:

- **Development**

  ```bash
  npm run dev
  # or
  pnpm dev
  ```

  Starts the development server with Turbopack enabled.

- **Build the application**

  ```bash
  npm run build
  ```

  Generates the production version of the application.

- **Start production server**

  ```bash
  npm run start
  ```

  Runs the production version.

- **Run linting**
  ```bash
  npm run lint
  ```
- **Format code with Prettier**
  ```bash
  npm run format
  npm run format:check
  ```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd blackspine
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

The recommended way to deploy this application is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), as it's optimized for Next.js.  
Check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Font and Styles

The `/src/app/layout.tsx` file globally imports styles from:

- `@/assets/styles/main.scss` for general styles.
- Uses `next/font/local` to load the `Blackside.ttf` font that is part of the project assets.

## Resources and Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Interactive Tutorial](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

## Contributing

Contributions are welcome! If you find any bugs or have suggestions, please create an issue or submit a pull request.

---

This README includes essential information about the project, folder structure, dependencies, scripts, and recommendations for development and deployment.
