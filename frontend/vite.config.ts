import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    base: '/BenPomme/projectCP/',
    build: {
      outDir: 'dist',
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom', 'react-router-dom'],
            'ui': ['@headlessui/react', '@heroicons/react']
          }
        }
      },
      chunkSizeWarningLimit: 1000,
      commonjsOptions: {
        include: [/node_modules/]
      }
    },
    server: {
      port: 3000,
      open: true
    },
    optimizeDeps: {
      include: ['firebase']
    },
    define: {
      'process.env': env
    }
  }
})
