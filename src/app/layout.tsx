import type { Metadata } from "next";
import "./globals.css";
import { shopifySans } from '@/app/font'

export const metadata: Metadata = {
  title: "Qunstack - Shopify Expert Agency | Premier Partner",
  description: "Generated For Christopher",
  icons: {
    icon: "https://img.icons8.com/color/48/shopify.png"
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

