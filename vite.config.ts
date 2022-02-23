import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  publicDir: false,
  build: {
    lib: {
      entry: resolve(__dirname, 'src/directives/uid.ts'),
      name: 'UidDirective',
      fileName: (format) => {
        if (format === 'es') {
          return `uid-directive.mjs`
        }
        return `uid-directive.${format}.js`
      }
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Remove console warning about mixed exports
        exports: "named",
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
})
