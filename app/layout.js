import { Dancing_Script, Mochiy_Pop_P_One } from "next/font/google";
import "./style/globals.min.css";

const primaryFont = Mochiy_Pop_P_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const secondaryFont = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-script",
});

export const metadata = {
  title: "Happy Birthday To You",
  description: "Click to open",
  openGraph: {
    images: `${process.env.NEXT_PUBLIC_SITE_URL}/thumb.png`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={`${primaryFont.variable} ${secondaryFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
