import { parse } from "dotenv";
import { existsSync, promises as fs } from "fs";
import path from "path";

const envPlugin = (inputs = {}) => {
  const options = {
    shim: true,
    filter: () => true,
    ...inputs,
  };
  const mode = process.env.NODE_ENV ?? "development";
  const { shim, filter } = options;

  const envFiles = options?.file
    ? [options?.file]
    : [`.env.${mode}`, `.env.local`, `.env`];

  return {
    name: "env-plugin",
    async setup(build) {
      const define = (build.initialOptions.define = {
        ...build.initialOptions.define,
      });

      // Catch-all for undefined variables
      if (shim) {
        build.initialOptions.inject = [...(build.initialOptions.inject || [])];
      }

      // Grab from process env
      for (const key in process.env) {
        const flag = filter(key, null);
        if (!flag) {
          continue;
        }

        const value = process.env[key];
        define[`process.env.${key}`] =
          define[`process.env.${key}`] ?? JSON.stringify(value);
      }

      // Grab from dotfiles
      for (const file of envFiles) {
        const dir = process.cwd();
        const filePath = path.join(dir, file);
        if (!existsSync(filePath)) {
          continue;
        }

        const source = await fs.readFile(filePath, "utf-8");
        const parsed = parse(source);

        for (const key in parsed) {
          if (!filter(key, filePath)) {
            continue;
          }

          const value = parsed[key];
          define[`process.env.${key}`] =
            define[`process.env.${key}`] ?? JSON.stringify(value);
        }
      }
    },
  };
};

export default envPlugin;
