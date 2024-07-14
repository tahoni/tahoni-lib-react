import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import {extname, relative, resolve} from 'node:path'
import {fileURLToPath} from "node:url";
import {glob} from "glob";
import dts from 'vite-plugin-dts';
import {libInjectCss} from "vite-plugin-lib-inject-css";

import {peerDependencies} from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({include: ["lib"]}),
    dts({include: ["lib"]}),
    libInjectCss(),
  ],
  build: {
    target: 'ESNext',
    minify: false,
    sourcemap: false,
    copyPublicDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'TahoniLib',
      // the proper extensions will be added
      fileName: 'tahoni-lib',
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react/jsx-runtime', ...Object.keys(peerDependencies)],
      input: Object.fromEntries(
          glob.sync('lib/**/*.{ts,tsx,scss}', {
            ignore: ["lib/!**/!*.d.ts", "lib/vite-env.d.ts"],
          }).map(file => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative(
                'lib',
                file.slice(0, file.length - extname(file).length)
            ),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url))
          ])
      ),
      output: {
        assetFileNames: '[name][extname]',
        entryFileNames: '[name].js',
      }
    },
  },
})
