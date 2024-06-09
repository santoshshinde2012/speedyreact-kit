import { writeFile } from "fs/promises";
import { analyzerdir } from "../common/config.mjs";

// Custom plugin to generate meta file
const metaPlugin = {
  name: "meta-plugin",
  setup(build) {
    build.onEnd(async (result) => {
      const metaFileContent = JSON.stringify(result.metafile, null, 2);
      await writeFile(`${analyzerdir}/meta.json`, metaFileContent);
      console.log("Meta file generated as meta.json");
    });
  },
};

export { metaPlugin };
