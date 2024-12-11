import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import PrettierPlugin from 'vite-plugin-prettier';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), PrettierPlugin()],
  optimizeDeps: {
    include: ['@mui/material', '@mui/icons-material'],
  },
});
