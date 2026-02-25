import type { Metadata } from "next";
import "./globals.css";
import { shopifySans } from '@/app/font'

export const metadata: Metadata = {
  title: "Cristopher",
  description: "Generated For Christopher",
  icons: {
    icon: "https://img.icons8.com/color/1200/shopify.jpg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={shopifySans.variable}
      >
        {children}
      </body>
    </html>
  );
}

