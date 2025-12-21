import {  } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



export const metadata = {
  title: "HBCI",
  description: "Harvest Time Bible Church International",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" webcrx="">
      <body
        className={``}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
