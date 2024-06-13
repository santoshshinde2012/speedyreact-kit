- What are the challenges during JEST setup?
  - We set up by following the Jest getting started documentation, but the main challenge was that while running the test cases, we needed to mock image assets and svg, so we added mock file style to the test mock folder.
    - `mock/file.ts`
      ```
          module.exports = 'test-file-stub';
      ```
    - `mock/style.ts`
      ```
         module.exports = {};
      ```
  - Also, we need to define the type for SVG and other assets in `types.d.ts`.
      ```
          declare module "*.svg" {
              const content: string;
              export default content;
          }
          declare module "*.png" {
              const value: T;
              export = value;
          }

          declare module "*.ico" {
              const value: T;
              export = value;
          }
      ```

- Why do we have issues like When running yarn commands, eslint incorrectly meets some peer dependencies.
  - Console Warning
  ```
    eslint is listed by your project with version 9.4.0, which doesn't satisfy what typescript-eslint (pfe5b0) and other dependencies request (^8.56.0).
    Some peer dependencies are incorrectly met; run yarn explain peer-requirements <hash> for details, where <hash> is the six-letter p-prefixed code.
  ```
  - That is because the typescript eslint version is not supporting the eslint 9 version, and they have some breaking changes. You can check this thread for details. After the upgrade, we must update the typescript eslint version.
  - [ESLint v9 Support](https://github.com/typescript-eslint/typescript-eslint/issues/8211)
  - [Eslint 9 doesn't work with typescript?](https://www.reddit.com/r/typescript/comments/1cjbjis/eslint_9_doesnt_work_with_typescript/)