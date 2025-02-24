import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Arial-Security-Escort/', // Add leading and trailing slashes
  build: {
    outDir: 'dist' // Ensure this matches the build output directory
  }
});
