import {  } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: "HBCI",
  description: "Harvest Time Bible Church International",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
