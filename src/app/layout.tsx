import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: "Zafira Luxury",
  description: "Discover our collection of luxury makhawir, handcrafted with premium fabrics and intricate designs. Elegance and tradition for modern women.",
  keywords: ["luxury makhawir, traditional attire, Moroccan caftan, elegant dresses, handcrafted fashion, bespoke garments, modest wear, designer kaftan"],
  openGraph: {
    "title": "Zafira Luxury - Exquisite Traditional Attire",
    "description": "Discover our collection of luxury makhawir, handcrafted with premium fabrics and intricate designs. Elegance and tradition for modern women.",
    "url": "https://www.zafiraluxury.com",
    "siteName": "Zafira Luxury",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/beautiful-young-woman-wearing-sari_23-2149502984.jpg",
        "alt": "Crimson Royale Makhawir"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Zafira Luxury - Exquisite Traditional Attire",
    "description": "Discover our collection of luxury makhawir, handcrafted with premium fabrics and intricate designs. Elegance and tradition for modern women.",
    "images": [
      "http://img.b2bpic.net/free-photo/beautiful-young-woman-wearing-sari_23-2149502984.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
