// =============================================
// TypeScript Setup
// =============================================
// Step 1: Install TypeScript globally
// npm install -g typescript
// Step 2: Check version
// tsc -v
// Step 3: Compile a TypeScript file
// tsc file.ts
// This generates file.js that can be run with node
// Step 4: Run directly with ts-node (optional, install separately)
// npm install -g ts-node
// ts-node file.ts
// Step 5: Initialize a tsconfig.json for project configuration
// tsc --init
// Example tsconfig.json (partial):
/*
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
*/
// Then just run:
// tsc
// It will compile all .ts files in the project
