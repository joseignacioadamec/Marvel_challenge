import { defineConfig } from 'vite'
import replace from '@rollup/plugin-replace'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  return {
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify(
          isProduction ? 'production' : 'development',
        ),
        preventAssignment: true,
      }),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
      css: true,
    },
    build: {
      minify: isProduction,
      rollupOptions: {
        input: {
          main: './index.html',
        },
      },
    },
  }
})
