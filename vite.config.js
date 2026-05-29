import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User site: https://sisrar40.github.io/ → base must be '/'
// Project site: https://sisrar40.github.io/repo-name/ → set base to '/repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/',
});
