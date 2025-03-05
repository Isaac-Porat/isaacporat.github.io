import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        work: './work.html',
        projects: './projects.html'
      }
    }
  }
});