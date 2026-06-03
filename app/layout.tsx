import Header from "./(public)/_components/header";
import "./globals.css";

export const metadata = {
  icons: {
    icon: '/favicon.svg',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-blue">
        <Header/>
        {children}
      </body>
    </html>
  );
}
