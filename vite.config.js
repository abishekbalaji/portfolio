import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative so the build works whether it's
// served from a GitHub Pages project URL (user.github.io/repo) or a custom domain.
export default defineConfig({
  plugins: [react()],
  base: './',
})
