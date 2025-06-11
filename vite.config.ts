import react from '@vitejs/plugin-react'
import path from 'node:path'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import type { InlineConfig } from 'vitest/node'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
    onConsoleLog(log) {
      if (log.includes("React Router Future Flag Warning")) return false;
    },
  },
} as UserConfig & {
  test: InlineConfig
})
