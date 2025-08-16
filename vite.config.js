import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    historyApiFallback: true
  },
  base: "/Enkamax_V3",
  
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"./src"),
    },
  },
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
});
