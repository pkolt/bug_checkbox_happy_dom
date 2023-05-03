import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              ssr: false,
              pure: true,
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
  test: {
    environment: 'happy-dom',
    threads: true,
    isolate: true,
    clearMocks: true,
    mockReset: true,
    setupFiles: ['./src/setupTests.ts'],
    watch: false,
    update: false,
    css: false,
  },
});
