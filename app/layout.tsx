import { Footer } from "./(public)/_components/footer";
import GoogleAnalytics from "./(public)/_components/googleAnalytics";
import Header from "./(public)/_components/header";
import MicrosoftClarity from "./(public)/_components/microsoftClarity";
import RegisterSW from "./components/RegisterSW";
import "./globals.css";


export const metadata = {
  metadataBase: new URL('https://jemly.fr'),
  title: {
    default: 'Jemly Studio | Création de logo et identité visuelle sur mesure',
    template: '%s | Jemly Studio',
  },
  icons: {
  icon: [
    { url: '/favicon.svg', type: 'image/svg+xml' },
    { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
  ],
  apple: '/apple-touch-icon.png',
},
  verification: {
    google: "cxHoPuqsLplSujy39vYeECHJCdTNdJkYVWggFtOA9_c",
  },
  authors: [{ name: 'Jemly Studio' }],
  creator: 'Jemly Studio',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: 'Jemly Studio',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className="h-full antialiased"
    >
       <body className="min-h-full flex flex-col bg-blue">
        <Header />
        <main className="flex-1">
          <GoogleAnalytics/>
          <MicrosoftClarity/>
          {children}
        </main>
        <Footer />
        <RegisterSW />
      </body>
    </html>
  );
}
