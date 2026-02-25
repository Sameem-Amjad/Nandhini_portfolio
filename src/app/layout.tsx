import type { Metadata } from "next";
import "./globals.css";
import { shopifySans } from '@/app/font'

export const metadata: Metadata = {
  title: "Qunstack - Shopify Expert Agency | Premier Partner",
  description: "Generated For Christopher",
  icons: {
    icon: "https://cdn.shopify.com/b/shopify-brochure2-assets/88ee7022e2749387148cb4098cc4f9fb.svg"
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

