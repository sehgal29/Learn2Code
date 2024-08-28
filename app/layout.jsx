import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn2Code | A Learning Website in which people can learn the Web Development in MERN and MEAN stack.",
  description: "This is my Major Project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <p className="line"></p>
        {children}
        <Footer/>
        </body>
        
    </html>
  );
}
