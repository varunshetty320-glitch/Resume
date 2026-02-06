import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as esbuild from 'esbuild'

// Pre-transform .js files containing JSX so Vite's import analysis can parse them
function jsxInJs() {
  return {
    name: 'jsx-in-js',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.js') || id.includes('node_modules')) return
      if (!/<\/?[\w.:-]+/.test(code)) return // no JSX tags
      const result = esbuild.transformSync(code, {
        loader: 'jsx',
        sourcefile: id,
        format: 'esm',
        jsx: 'automatic',
        sourcemap: false,
      })
      // Only return transformed code. Returning an invalid / empty source map
      // string can cause JSON parse errors during the Rollup build step.
      return { code: result.code }
    },
  }
}

export default defineConfig({
  plugins: [jsxInJs(), react()],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})
