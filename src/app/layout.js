import "./globals.css";

const isDarkMode = false;

export const metadata = {
  title: "D'visita",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className={isDarkMode ? "dark" : "light"} lang="en">
      <head>
        <link rel="icon" href="./assets/iconiwinser.svg" /> {/* Asegúrate de tener un favicon en public/favicon.ico */}
      </head>
      <body className={isDarkMode ? "dark" : "light"}>
        {children}
      </body>
    </html>
  );
}
