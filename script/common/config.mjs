import { pnpPlugin } from "@yarnpkg/esbuild-plugin-pnp";
import svgPlugin from "esbuild-plugin-svgr";

import envPlugin from "../plugin/env-plugin.mjs";

const outdir = "./dist";
const publicdir = "./public";
const analyzerdir = "analyzer";

const sharedEsbuildConfig = {
  // Entry point of the project
  entryPoints: ["src/index.tsx"],

  // Enable bundling
  bundle: true,

  // Generate a metafile
  metafile: true,

  // Enable tree shaking
  treeShaking: true,

  // Enable splitting of the bundle
  splitting: true,

  // Output format as ES modules
  format: "esm",

  // Public path
  // publicPath: "/",

  // Loaders for different file types
  loader: {
    ".png": "file",
    ".jpg": "file",
    ".svg": "file",
    ".js": "jsx",
    ".woff": "dataurl",
    ".woff2": "dataurl",
    ".eot": "dataurl",
    ".ttf": "dataurl",
  },

  // Output directory
  outdir,

  plugins: [envPlugin({}), pnpPlugin(), svgPlugin()],
};

export { analyzerdir, outdir, publicdir, sharedEsbuildConfig };
