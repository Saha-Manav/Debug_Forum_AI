import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: [
      'd76e7ee2-d35a-4542-8ec7-9d72003f3d09-00-25n2j9urr21qs.spock.replit.dev'
    ],
  },
});
