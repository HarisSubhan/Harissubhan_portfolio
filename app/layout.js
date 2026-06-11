import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SmoothScrollProvider>
      <body className={inter.className}>{children}</body>
      </SmoothScrollProvider>
    </html>
  );
}
