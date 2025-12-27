import {  } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



export const metadata = {
  title: "HBCI",
  description: "Harvest Time Bible Church International",
  icons: {
    icon: '/logo.svg', // /public/favicon.ico
    shortcut: '/logo.svg',
    apple: '/logo.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.svg',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" webcrx="">
      <body
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
