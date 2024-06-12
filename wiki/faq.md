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