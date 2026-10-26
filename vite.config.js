import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Keep CRA's env prefix so the existing Netlify env vars still work.
  envPrefix: ['VITE_', 'REACT_APP_'],
  build: {
    outDir: 'build',
  },
});
