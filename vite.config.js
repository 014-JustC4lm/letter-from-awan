    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [react()],
      base: '/letter-from-awan/', // <--- Make sure this matches your deployment path
      build: {
        outDir: 'dist', // Default output directory
        assetsDir: 'assets', // Default assets directory within outDir
      },
    });
    