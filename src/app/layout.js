import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cypher Break",
  description: "By Saihaj Mann",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
