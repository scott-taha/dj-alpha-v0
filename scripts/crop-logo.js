import sharp from "sharp";
import path from "path";
import { rename } from "fs/promises";

const logoPath = path.resolve("public/images/alpha-logo.png");
const outputPath = logoPath;

async function cropLogo() {
  const metadata = await sharp(logoPath).metadata();
  const { width, height } = metadata;
  console.log(`Original size: ${width}x${height}`);

  // Crop ~5% from the bottom to remove the thin white line/sparkle artifact
  const cropHeight = Math.floor(height * 0.95);

  await sharp(logoPath)
    .extract({ left: 0, top: 0, width, height: cropHeight })
    .toFile(outputPath + ".tmp");

  // Replace original
  await rename(outputPath + ".tmp", outputPath);

  console.log(`Cropped to: ${width}x${cropHeight}`);
  console.log("Logo saved successfully.");
}

cropLogo().catch(console.error);
