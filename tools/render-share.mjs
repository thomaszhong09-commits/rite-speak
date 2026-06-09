import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";

const runtimeModules =
  "/Users/lunnet/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.js";
const require = createRequire(import.meta.url);
const { chromium } = require(runtimeModules);

const root = process.cwd();
const htmlPath = path.join(root, "docs", "ritespeak-share.html");
const outPath = path.join(root, "assets", "ritespeak-share.png");

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});

const page = await browser.newPage({
  viewport: { width: 1080, height: 1350 },
  deviceScaleFactor: 1,
});

await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
await page.screenshot({ path: outPath, fullPage: false });
await browser.close();

console.log(outPath);
