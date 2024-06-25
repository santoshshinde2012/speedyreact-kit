# speedyreact-kit

- The React Redux Esbuild Jest Starter is a modern, efficient boilerplate designed to kickstart your React projects with powerful tools and best practices. This template integrates React, Redux Toolkit, Esbuild, and Jest, ensuring optimal performance and a smooth development experience.
  
## Common Feature

- Redux Toolkit: Integrated with Redux Toolkit for efficient state management.
- TypeScript: Fully typed with TypeScript for static typing and improved productivity.
- Yarn and Yarn Berry: Uses Yarn and Yarn Berry for fast and reliable dependency management.
- ESBuild: Utilizes ESBuild for fast and efficient application bundling.
- Jest: Pre-configured with Jest for unit and integration testing.
- ESLint: Configured with ESLint for consistent code quality and style.
- Prettier: Integrated with Prettier for code formatting.
- Husky: Uses Husky for Git hooks to enforce code quality before commits.
- Project Structure: Organized project structure with clear separation of concerns.
- Development Experience: Hot module replacement (HMR) for a smooth development experience.
- CI/CD Integration: Example CI/CD pipeline configurations for automated testing and deployment.
- Environment Configuration: Supports multiple environments with easy configuration.
  
## Core Packages 
  
## Setup

### Prerequisite 
- [Install Yarn Globally](https://classic.yarnpkg.com/lang/en/docs/install/)
- Yarn PnP and ESBuild 
    - [Make sure to enable corepack (Open CMD as admin)](https://yarnpkg.com/corepack)
        - `corepack enable`
    - [To allow yarn command in VS code make sure to use `Set-ExecutionPolicy Unrestricted` (Open Powershell as admin)](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.4)
- Setup Yarn PnP in vs code
    - Install the [ZipFS](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs) extension, which is maintained by the Yarn team.
    - Run command on terminal `yarn dlx @yarnpkg/sdks vscode`

### Project Setup

- Clone the project 
    - `git clone https://github.com/santoshshinde2012/speedyreact-kit.git`
- Set the Yarn Version (Make sure to do `corepack enable`)
    - `yarn set version berry`
- Install Modules locally using Yarn
    - `yarn install`
    - Make sure to create env variables `.env.development`

## Run Project

### Development Mode

- Run Project in Development Watch Mode `yarn dev`
- Create Build for Development Environment `yarn build-dev`
- Serve Dev Build `yarn serve` before running this to make sure to create dev build using `yarn build-dev`
  
## Testing

- To run the test cases `yarn test`
  
## Project Structure

```
├── eslint.config.mjs
├── jest.config.ts
├── mock
│   ├── file.ts
│   └── style.ts
├── package.json
├── prettierrc.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── script
│   ├── build.mjs
│   ├── common
│   │   ├── args.mjs
│   │   ├── config.mjs
│   │   └── file.mjs
│   ├── plugin
│   │   ├── env-plugin.mjs
│   │   └── meta-plugin.mjs
│   └── serve.mjs
├── setupTests.ts
├── src
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── config
│   │   └── index.ts
│   ├── index.css
│   ├── index.tsx
│   └── logo.svg
├── tsconfig.json
├── types.d.ts
├── wiki
│   ├── faq.md
│   └── jest-setup.md
└── yarn.lock
```

## Wiki

- [FAQ](wiki/faq.md)
  
## Refrences

 - [A Comprehensive Guide to Setting Up ESLint, Jest, and Prettier in Node TypeScript](https://blog.santoshshinde.com/a-comprehensive-guide-to-setting-up-eslint-jest-and-prettier-in-node-typescript-b04d8e5673fd)
 - [Modern Testing Setup: Jest and React Testing Library for React TypeScript Projects](https://blog.santoshshinde.com/modern-testing-setup-jest-and-react-testing-library-for-react-typescript-projects-a534c651746f)


<hr/>

### Connect with me on
<div id="badges">
  <a href="https://twitter.com/shindesan2012">
    <img src="https://img.shields.io/badge/shindesan2012-black?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter Badge"/>
  </a>
  <a href="https://www.linkedin.com/in/shindesantosh/">
    <img src="https://img.shields.io/badge/shindesantosh-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
   <a href="https://blog.santoshshinde.com/">
    <img src="https://img.shields.io/badge/Blog-black?style=for-the-badge&logo=medium&logoColor=white" alt="Medium Badge"/>
  </a>
  <a href="https://www.buymeacoffee.com/santoshshin" target="_blank">
   <img src="https://img.shields.io/badge/buymeacoffee-black?style=for-the-badge&logo=buymeacoffee&logoColor=white" alt="Buy Me A Coffee"/>
  </a>
</div>

