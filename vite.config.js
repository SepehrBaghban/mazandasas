import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import path from 'path';
import {fileURLToPath} from 'url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  resolve:{
    alias: {
      '@media': path.resolve(__dirname, 'src/media'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@fonts': path.resolve(__dirname, 'src/fonts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@requests': path.resolve(__dirname, 'src/requests'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    }
  }
})
