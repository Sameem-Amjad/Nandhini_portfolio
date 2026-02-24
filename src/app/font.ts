// src/app/fonts.ts
import localFont from 'next/font/local'

export const shopifySans = localFont({
    // Path is relative to THIS file (src/app/fonts.ts)
    src: '../assets/fonts/ShopifySans/Shopify Sans Web Regular Regular/shopify_sans_web_regular_regular.woff2',
    weight: '400',
    style: 'normal',
    variable: '--font-shopify-sans',
})