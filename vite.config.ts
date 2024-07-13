import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import {resolve} from 'node:path'
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

import {peerDependencies} from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts(),
  ],
  build: {
    target: 'ESNext',
    minify: false,
    sourcemap: false,
    copyPublicDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'TahoniLib',
      // the proper extensions will be added
      fileName: 'tahoni-lib',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // Exclude peer dependencies from the bundle to reduce bundle size
      external: ['react', 'react/jsx-runtime',...Object.keys(peerDependencies)],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
        },
      },
    },
  },
})
