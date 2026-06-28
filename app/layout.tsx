import { Footer } from "./(public)/_components/footer";
import GoogleAnalytics from "./(public)/_components/googleAnalytics";
import Header from "./(public)/_components/header";
import RegisterSW from "./components/RegisterSW";
import "./globals.css";


export const metadata = {
  icons: {
    icon: '/icon192.png',
  },
  verification: {
    google: "cxHoPuqsLplSujy39vYeECHJCdTNdJkYVWggFtOA9_c",
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
          {children}
        </main>
        <Footer />
        <RegisterSW />
      </body>
    </html>
  );
}
