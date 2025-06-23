import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',                   // main entry (root)
        login: 'public/login.html',           // extra pages
        dashboard: 'public/dashboard.html',
        silver: 'public/silver.html',
        platinum: 'public/platinum.html',
        intern: 'public/intern.html'
      }
    }
  }
});
