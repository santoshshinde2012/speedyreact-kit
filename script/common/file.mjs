import file, { promises as fs } from 'fs';
import path, { join } from 'path';

const copyFolder = async (source, destination, ignore = []) => {
  try {
    // Ensure the destination directory exists
    await fs.mkdir(destination, { recursive: true });

    // Read the contents of the source directory
    const entries = await fs.readdir(source, { withFileTypes: true });

    const copyPromises = entries
      .filter(entry => !ignore.includes(entry.name))
      .map(async entry => {
        const sourcePath = join(source, entry.name);
        const destinationPath = join(destination, entry.name);

        if (entry.isDirectory()) {
          // Recursively copy subdirectories
          return copyFolder(sourcePath, destinationPath, ignore);
        } else {
          // Copy files
          return fs.copyFile(sourcePath, destinationPath);
        }
      });

    await Promise.all(copyPromises);
  } catch (error) {
    console.error('Error copying folder:', error);
  }
};

const updateIndexHtml = (source, outputs) => {
  const indexPath = path.resolve(source);
  let indexHtml = file.readFileSync(indexPath, 'utf8');
  const [cssFile, jsFile] = Object.keys(outputs).reduce((files, filename) => {
    if (filename.endsWith('.js')) files[1] = path.basename(filename);
    if (filename.endsWith('.css')) files[0] = path.basename(filename);
    return files;
  }, ['', '']);

  // Replace the filenames in the index.html file with the hashed filenames
  indexHtml = indexHtml.replace(/<link rel="stylesheet" href=".*?\.css" \/>/g, `<link rel="stylesheet" href="${cssFile}" />`);
  indexHtml = indexHtml.replace(/<script type="module" src=".*?\.js"><\/script>/g, `<script type="module" src="${jsFile}"></script>`);

  // Write the updated index.html file
  file.writeFileSync(indexPath, indexHtml, 'utf8');
};

async function deleteFolder(directoryPath) {
  try {
      await fs.rm(directoryPath, { recursive: true });
  } catch (error) {
      console.error(`Error deleting folder: ${error}`);
  }
}

function createDirectoryIfNotExist(directoryPath) {
  if (!file.existsSync(directoryPath)) {
    file.mkdirSync(directoryPath, { recursive: true });
  }
}

export {
  copyFolder,
  deleteFolder,
  updateIndexHtml,
  createDirectoryIfNotExist
}