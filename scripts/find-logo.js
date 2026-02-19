import { readdirSync, existsSync } from "fs";
import { execSync } from "child_process";

console.log("CWD:", process.cwd());
console.log("HOME:", process.env.HOME);

// Try to find the logo
const tryPaths = [
  "/vercel/share/v0-project/public/images/alpha-logo.png",
  "/home/user/public/images/alpha-logo.png",
  "./public/images/alpha-logo.png",
  "public/images/alpha-logo.png",
];

for (const p of tryPaths) {
  console.log(`${p} exists: ${existsSync(p)}`);
}

// Try find command
try {
  const result = execSync("find / -name 'alpha-logo.png' 2>/dev/null", { encoding: "utf-8", timeout: 5000 });
  console.log("Found:", result);
} catch (e) {
  console.log("Find timed out or errored, trying ls:");
  try {
    const ls = execSync("ls -la /home/user/", { encoding: "utf-8" });
    console.log("Home contents:", ls);
  } catch (e2) {
    console.log("ls also failed");
  }
}
