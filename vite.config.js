import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'Arial-Security', // Replace <repository-name> with your GitHub repository name
  build: {
    outDir: 'dist' // Ensure this matches the build output directory
  }
});
