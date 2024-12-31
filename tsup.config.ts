import { defineConfig } from 'tsup';
import packageJson from './package.json' assert { type: 'json' };

export default defineConfig({
   format: ['cjs', 'esm'],
   entry: ['./src/index.ts'],
   dts: true,
   shims: true,
   skipNodeModulesBundle: true,
   clean: true,
   external: [
      'tailwindcss',
      ...Object.keys(packageJson.dependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {}),
   ],
});
