# REACT-CODING-TASK
Build a small single-page application that consumes the public Rick and Morty REST API and presents  paginated list of characters and details


**Installation steps:**

The import path @/components/ui is an alias commonly used in projects that have a custom UI component library (like shadcn/ui) and configured path aliases in tools like Vite or Next.js.

**To install and use shadcn/ui** (which matches the imports used in the code):

**Install Tailwind CSS** (if not already installed):
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

**Install shadcn/ui:**
npx shadcn-ui init

**Generate the components:**
npx shadcn-ui add card button

**Configure the alias @/components/ui in your vite.config.js or jsconfig.json (for Vite/CRA) or tsconfig.json (for Next.js):**

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})


This way, the @/components/ui/card and @/components/ui/button imports will work correctly.


