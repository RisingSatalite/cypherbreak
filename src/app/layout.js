import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cypher Break",
  description: "By Saihaj Mann",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Nav></Nav>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
