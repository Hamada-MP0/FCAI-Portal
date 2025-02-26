import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { VitePWA } from 'vite-plugin-pwa';
// https://vite.dev/config/

export default defineConfig({

  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate', // تحديث تلقائي عند توفر نسخة جديدة
      devOptions: {
        enabled: true, // دعم PWA أثناء التطوير
      },
      manifest: {
        name: "My PWA App",
        short_name: "PWA",
        description: "A Progressive Web App built with React and Vite",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/FCAI-Portal/",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
   base: "/FCAI-Portal/" 
});
