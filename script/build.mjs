import * as esbuild from "esbuild";
import {
  updateIndexHtml,
  deleteFolder,
  copyFolder,
  createDirectoryIfNotExist,
} from "./common/file.mjs";
import {
  sharedEsbuildConfig,
  outdir,
  publicdir,
  analyzerdir,
} from "./common/config.mjs";
import { analyze } from "./common/args.mjs";
import { metaPlugin } from "./plugin/meta-plugin.mjs";

const esbuildConfig = {
  ...sharedEsbuildConfig,
  entryNames: "bundle-[hash]",
  minify: true,
  sourcemap: false,
  logLevel: "warning",
  define: {
    "process.env.NODE_ENV": '"production"',
  },
};

async function buildProject() {
  try {
    if (analyze) {
      createDirectoryIfNotExist(analyzerdir);
      esbuildConfig.plugins.push(metaPlugin);
    }

    await deleteFolder(outdir);

    const result = await esbuild.build(esbuildConfig);
    await copyFolder(publicdir, outdir);

    const { outputs } = result.metafile;

    await updateIndexHtml(`${outdir}/index.html`, outputs);

    console.log(`Successfully created build at ${outdir}`);
  } catch (error) {
    console.error("An error occurred during the build process:", error);
  }
}

buildProject();
