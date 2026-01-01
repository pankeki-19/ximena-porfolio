// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   base: '/ximena-portfolio/',
//   plugins: [react()],
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "ximena-porfolio";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // <-- your repo name EXACTLY
});
