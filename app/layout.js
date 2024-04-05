import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./Navbar";
import SmoothScrolling from "./(components)/SmoothScrolling";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: " By rh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SmoothScrolling>
          <Nav />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
