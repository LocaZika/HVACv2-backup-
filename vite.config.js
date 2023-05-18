import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dns from "dns";

const projectDirRoot = path.resolve(__dirname);
dns.setDefaultResultOrder("verbatim");
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: "Components", replacement: path.resolve(projectDirRoot, "src/Components") },
      { find: "Pages", replacement: path.resolve(projectDirRoot, "src/Pages") },
      { find: "Services", replacement: path.resolve(projectDirRoot, "src/Services") },
      { find: "Routes", replacement: path.resolve(projectDirRoot, "src/Routes") },
      { find: "Middlewares", replacement: path.resolve(projectDirRoot, "src/Middlewares") },
      { find: "assets", replacement: path.resolve(projectDirRoot, "src/assets") },
      { find: "Layouts", replacement: path.resolve(projectDirRoot, "src/Layouts") },
      { find: "Errors", replacement: path.resolve(projectDirRoot, "src/Errors") },
    ],
  },
});
