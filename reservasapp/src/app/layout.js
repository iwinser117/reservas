import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const isDarkMode = true;
export const metadata = {
  title: "Tu visita",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className={isDarkMode ? "dark" : "light"} lang="en">
      <body className={isDarkMode ? "dark" : "light"}>{children}</body>
    </html>
  );
}
