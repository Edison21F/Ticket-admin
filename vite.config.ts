import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  resolve: {
    alias: {
      '@': '/src', // Alias para rutas relativas más fáciles
    },
  },
  server: {
    port: 4200, // Cambia el puerto si lo necesitas
    open: true, // Abre automáticamente en el navegador
  },
});
