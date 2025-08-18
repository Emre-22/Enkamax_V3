import fs from "fs";
import path from "path";
import sharp from "sharp";

const assetsDir = path.join(process.cwd(), "src/assets"); // adjust if needed
const maxWidth = 2560;
const webpQuality = 75;

function processFolder(folder) {
  const files = fs.readdirSync(folder);

  files.forEach((file) => {
    const filePath = path.join(folder, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processFolder(filePath); // recurse into subfolders
    } else if (/\.(jpe?g|png)$/i.test(file)) {
      const outputPath = filePath.replace(/\.(jpe?g|png)$/i, ".webp");

      sharp(filePath)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality: webpQuality })
        .toFile(outputPath)
        .then(() => console.log(`Processed: ${outputPath}`))
        .catch(console.error);
    }
  });
}

processFolder(assetsDir);
