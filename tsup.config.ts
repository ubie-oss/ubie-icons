import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  entry: ['src', '!src/**/*.spec.*', '!src/**/*.d.ts'],
  external: ['react'],
  bundle: false,
  plugins: [
    {
      name: 'fix-esm',
      renderChunk(_, chunk) {
        if (this.format === 'esm') {
          // https://github.com/egoist/tsup/issues/953
          const code = addMjsExtension(chunk.code);
          return { code };
        }
      },
    },
  ],
});

function addMjsExtension(content) {
  return content.replace(
    /import\s+\{\s*default\s+as\s+(default\d+)\s*\}\s+from\s+"\.\/([^"]+)"/g,
    `import { default as $1 } from "./$2.mjs"`,
  );
}
