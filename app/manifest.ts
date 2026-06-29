import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jemly-Studio',
    short_name: 'Jemly',
    description: 'Création de logo et identité visuelle sur mesure',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#850e35',
    icons: [
         {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any' 
      },
    ],
  }
}