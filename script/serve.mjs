import esbuild from "esbuild";
import { copyFolder } from "./common/file.mjs";
import { sharedEsbuildConfig, outdir, publicdir } from "./common/config.mjs";

const esbuildConfig = {
  ...sharedEsbuildConfig,
  entryNames: "bundle",
  minify: false,
  sourcemap: true,
  logLevel: "info",
};

async function buildAndServe() {
  try {
    copyFolder(publicdir, outdir);
    const context = await esbuild.context(esbuildConfig);
    await context.watch();
    await context.serve({
      port: 3000,
      servedir: outdir,
      fallback: `${outdir}/index.html`,
    });
  } catch (error) {
    console.error("An error occurred during the build process:", error);
  }
}

buildAndServe();
