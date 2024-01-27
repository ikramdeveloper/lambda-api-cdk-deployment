const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/index.ts"], // Your main entry point
    bundle: true, // Bundle all your code and dependencies
    platform: "node", // Specify the Node platform
    outfile: "build/index.js", // Output file
    minify: true,
    keepNames: true,
    sourcesContent: false,
    target: "node18",
    external: ["shared"],
  })
  .catch(() => process.exit(1));
