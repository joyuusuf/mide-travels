import { Unbounded, Sora } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav";

//FONT AWESOME CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

//RAMIX ICONS CSS
import "remixicon/fonts/remixicon.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight:["400", "500", "600", "700", ]
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight:["400", "500", "600", "700", ]
});

export const metadata = {
  title: "OpenSky Travels and Tours Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${sora.variable} ${unbounded.variable} antialiased`}
      >

        <Nav />
        {children}
      </body>
    </html>
  );
}
