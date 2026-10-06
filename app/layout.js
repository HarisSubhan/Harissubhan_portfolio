import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const inter = Inter({ subsets: ["latin"] });
const grotesk = Space_Grotesk({ weight: ["500", "700"], subsets: ["latin"], variable: "--font-display" });

export const metadata = { title: "Muhammad Haris Subhan | Full-Stack Developer", description: "Portfolio of Muhammad Haris Subhan: web, mobile and WordPress development." };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${grotesk.variable}`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
