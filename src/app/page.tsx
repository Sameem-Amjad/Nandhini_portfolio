"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Search, Star, MapPin, Globe, Linkedin, Twitter,
  ChevronDown, ChevronUp, ExternalLink, Menu,
  MessageSquare, LayoutGrid, ArrowRight, Share2, Heart,
  Mail, Phone, Instagram,
  ChevronRight,
  X,
  Plus,
  Minus
} from 'lucide-react';

// --- Extracted Data from Target Profile ---

const REVIEWS_DATA = [
  {
    id: 1,
    author: "Vegas Matt",
    date: "Jan 14, 2026",
    quality: 5,
    communication: 5,
    service: "Email marketing",
    text: "If you're on the fence about hiring someone to help you set up Klaviyo, don't hesitate to hire Dray workx. They've far exceeded my expectations. Excellent service, response time, and they help me to learn vs just doing it for me. You will be very pleased with everyone you encounter from dray agency. Can not recommend them enough."
  },
  {
    id: 2,
    author: "Shock Coffee",
    date: "Dec 17, 2025",
    quality: 5,
    communication: 5,
    service: "Store build or redesign",
    text: "I highly recommend Dray workx. The transfer from our old site to the new one was handled quickly and professionally. When we had questions about Shopify settings and workflows, Ben often responded within minutes, frequently with clear video walkthroughs showing exactly what to do. His Shopify knowledge is excellent and exceeded our expectations."
  },
  {
    id: 3,
    author: "FAO Schwarz",
    date: "Oct 28, 2025",
    quality: 5,
    communication: 5,
    service: "Email marketing",
    text: "Dray team have been fantastic to work with! They've completely revamped our email marketing, and untapped tons of potential in our flows that desperately need a refresh. Their data-driven strategies and polished design work have made a clear impact on our marketing performance. They are constantly willing to improve and tweak aspects of the emails to ensure optimal performance. High..."
  },
  {
    id: 4,
    author: "Foffy",
    date: "Sep 29, 2025",
    quality: 5,
    communication: 5,
    service: "Email marketing",
    text: "Worked with us to set up and implement all of our email flows. Created and managed our campaigns. The team has strong domain expertise, and, most importantly to us, took the time to become familiar with and implement our brand voice and positioning while creating our campaigns."
  },
  {
    id: 5,
    author: "La Voie",
    date: "Sep 17, 2025",
    quality: 5,
    communication: 5,
    service: "Store build or redesign",
    text: "Dray team were amazing to work with. Their communication was super clear and they were always prompt in completing tasks. Every question and concern I had was addressed thoughtfully, and they even provided video step-by-step guides that made everything easy to follow. Ben not only helped bring my vision to life, but he also went above and beyond by teaching me so much about Shopify along th..."
  }
];

const FEATURED_WORK = [
  {
    title: "Bleacher Report: Website Setup & Ongoing Optimization",
    desc: "Establish updated ecommerce presence for bleacherreportshop.com by customizing various visual and functional elements on a new Shopify theme. Solved the unique challenge of presenting sold out content and various collections in an easy-to-navigate way."
  },
  {
    title: "Mariano Rivera: Website Build",
    desc: "Created website for Mariano Rivera, Major League Baseball's all-time Saves leader, 5x World Series champion and only unanimous inductee in the history of the National Baseball Hall of Fame."
  },
  {
    title: "Gleyber Torres: Website Build",
    desc: "Created gleybertorres25.com for the current starting shortstop of the New York Yankees."
  },
  {
    title: "Mythical: Strategic Audit and Conversion Rate Optimization",
    desc: "Worked with the Mythical team to develop a comprehensive strategy for making various improvements to the setup and marketing of mythical.com."
  },
  {
    title: "MoviePosters.com: Visual and Functional Customizations",
    desc: "Update website search and navigation along with the customization of various functional elements of product display pages and collection filtering."
  }
];

// --- Components ---

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return <>
    <header className="bg-gray-100 py-2 pb-4 sticky top-0 z-50 ">
      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-20 h-16 flex items-center justify-between gap-4">
        {/* Logo Area */}
        <div className="flex items-center  gap-2">
          <div className="flex items-center gap-1.5 font-bold text-lg tracking-tight text-[#008060] cursor-pointer">
            {/* <div className="w-6 h-6 bg-[#008060] rounded-sm flex items-center justify-center text-white text-xs">S</div> */}
            {/* <span className="text-black">shopify</span>
            <span className="text-gray-500 font-normal">Partners</span> */}
            <Image src="https://cdn.shopify.com/b/shopify-brochure2-assets/08b278c519512d187520e1fe10b4f5b7.svg" alt="Shopify Partners" width={200} height={50} className="object-contain" />
          </div>
          <button
            className="lg:hidden text-gray-800 hover:bg-gray-100 p-1 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-3xl mx-auto relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400 " />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#008060] focus:border-transparent sm:text-sm transition duration-150 ease-in-out"
            placeholder="Search by keyword, service, partner name, or country"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-medium bg-gray-700 text-white hover:text-gray-900 px-6 py-3 rounded-full">Log in</button>
        </div>
      </div>

      {/* Secondary Navigation Bar (Browse, Services, Locations) */}
      <div className="hidden lg:flex px-4 pt-5 lg:px-16  border-gray-200 bg-gray-100 h-14">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center">
          <nav className="flex items-center gap-x-8 h-full w-full relative">

            {/* Browse Dropdown */}
            <div className="relative group h-full flex items-center">
              <button className="flex items-center text-black font-medium h-full border-b-[3px] border-transparent group-hover:border-black transition-colors">
                Browse <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-lg py-2 w-72 hidden group-hover:block transition-opacity opacity-0 group-hover:opacity-100 z-50">
                <a href="#" className="block px-4 py-3 hover:bg-gray-50">
                  <div className="font-medium text-gray-900">Service partners</div>
                  <div className="text-sm text-gray-500">Hire a professional</div>
                </a>
                <a href="#" className="block px-4 py-3 hover:bg-gray-50">
                  <div className="font-medium text-gray-900">Technology solutions</div>
                  <div className="text-sm text-gray-500">Use apps or pre-built software integrations</div>
                </a>
              </div>
            </div>

            {/* Services Dropdown (with nested menus) */}
            <div className="relative group h-full flex items-center">
              <button className="flex items-center text-black font-medium h-full border-b-[3px] border-transparent group-hover:border-black transition-colors">
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-lg py-2 w-72 hidden group-hover:block transition-opacity opacity-0 group-hover:opacity-100 z-50">

                {/* Marketing and sales */}
                <div className="relative group/sub">
                  <button className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-50 text-left font-medium text-gray-900">
                    Marketing and sales <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                  <div className="absolute top-0 left-full bg-white border border-gray-200 shadow-lg rounded-lg py-2 w-64 hidden group-hover/sub:block -ml-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Email marketing</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">SEO</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Search engine advertising</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Social media marketing</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Content marketing</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Sales channel setup</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Conversion rate optimization</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Analytics and tracking</a>
                  </div>
                </div>

                {/* Store setup and management */}
                <div className="relative group/sub">
                  <button className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-50 text-left font-medium text-gray-900">
                    Store setup and management <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                  <div className="absolute top-0 left-full bg-white border border-gray-200 shadow-lg rounded-lg py-2 w-72 hidden group-hover/sub:block -ml-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Store build or redesign</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Store migration</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Product and collection setup</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Theme customization</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Store settings configuration</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">POS setup and migration</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Headless commerce</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Website audit and optimization strategy</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Ongoing website management</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Checkout upgrade</a>
                  </div>
                </div>

                {/* Development and troubleshooting */}
                <div className="relative group/sub">
                  <button className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-50 text-left font-medium text-gray-900">
                    Development and troubleshooting <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                  <div className="absolute top-0 left-full bg-white border border-gray-200 shadow-lg rounded-lg py-2 w-64 hidden group-hover/sub:block -ml-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Custom apps and integrations</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Custom domain setup</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Troubleshooting</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Systems integration</a>
                  </div>
                </div>

                {/* Visual content and branding */}
                <div className="relative group/sub">
                  <button className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-50 text-left font-medium text-gray-900">
                    Visual content and branding <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                  <div className="absolute top-0 left-full bg-white border border-gray-200 shadow-lg rounded-lg py-2 w-64 hidden group-hover/sub:block -ml-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Logo and visual branding</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Banner ads</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Video and illustrations</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Product photography</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">3D modelling</a>
                  </div>
                </div>

                {/* Content writing */}
                <div className="relative group/sub">
                  <button className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-50 text-left font-medium text-gray-900">
                    Content writing <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                  <div className="absolute top-0 left-full bg-white border border-gray-200 shadow-lg rounded-lg py-2 w-64 hidden group-hover/sub:block -ml-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Product descriptions</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Website and marketing content</a>
                  </div>
                </div>

                {/* Expert guidance */}
                <div className="relative group/sub">
                  <button className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-50 text-left font-medium text-gray-900">
                    Expert guidance <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                  <div className="absolute top-0 left-full bg-white border border-gray-200 shadow-lg rounded-lg py-2 w-64 hidden group-hover/sub:block -ml-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Business strategy guidance</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Product sourcing guidance</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Site performance and speed</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Sales tax guidance</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Wholesale/B2B</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">International expansion</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Product development</a>
                  </div>
                </div>

              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group h-full flex items-center">
              <button className="flex items-center text-black font-medium h-full border-b-[3px] border-transparent group-hover:border-black transition-colors">
                Locations <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-lg py-2 w-60 hidden group-hover:block transition-opacity opacity-0 group-hover:opacity-100 z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">United States</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Canada</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">India</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">United Kingdom</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Australia</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Germany</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">France</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50">Italy</a>
                <a href="#" className="block px-4 py-3 mt-1 border-t border-gray-100 text-sm font-medium text-black hover:bg-gray-50">View all partner locations</a>
              </div>
            </div>

          </nav>
        </div>
      </div>


    </header>
    {/* Mobile Drawer Overlay */}
    {isMobileMenuOpen && (
      <div className="fixed inset-0 z-[100] lg:hidden">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div className="absolute top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <div className="flex items-center gap-1.5 font-bold text-lg tracking-tight text-[#008060]">
              {/* <div className="w-6 h-6 bg-[#008060] rounded-sm flex items-center justify-center text-white text-xs">S</div>
              <span className="text-black">shopify</span> */}
              <Image src="https://cdn.shopify.com/b/shopify-brochure2-assets/08b278c519512d187520e1fe10b4f5b7.svg" alt="Shopify Partners" width={200} height={50} className="object-contain" />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-2">
            <nav className="flex flex-col gap-2">
              <a href="#" className="px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-lg">Log in</a>
              <hr className="my-2 border-gray-200" />
              <a href="#" className="px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-lg flex justify-between items-center">
                Browse <ChevronRight className="w-5 h-5 text-gray-400" />
              </a>
              <a href="#" className="px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-lg flex justify-between items-center">
                Services <ChevronRight className="w-5 h-5 text-gray-400" />
              </a>
              <a href="#" className="px-4 py-3 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-lg flex justify-between items-center">
                Locations <ChevronRight className="w-5 h-5 text-gray-400" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    )}
  </>
};


const Sidebar = () => (
  <div className="bg-white rounded-lg border-2 border-gray-200  md:shadow-md md:p-6 flex flex-col w-full relative">
    {/* Profile Header */}
    <div className="flex flex-col items-start gap-4 mb-6">
      <div className="absolute top-5 right-5 hidden md:flex items-center gap-1  text-white text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-sm">
        {/* <Star className="w-3 h-3 fill-white" />
        Premier tier */}
        <svg xmlns="http://www.w3.org/2000/svg" width="101" height="46" fill="none" role="img" aria-describedby="premier-badge-title">
          <title id="premier-badge-title">Premier tier</title>
          <path fill="#000" d="M44.94 13.474c.403.26 1.008.465 1.635.465.934 0 1.486-.498 1.486-1.223 0-.672-.382-1.061-1.338-1.43-1.157-.422-1.868-1.039-1.868-2.046 0-1.126.913-1.96 2.293-1.96.722 0 1.253.174 1.56.347l-.254.769c-.223-.141-.701-.347-1.338-.347-.977 0-1.337.585-1.337 1.083 0 .671.435.996 1.411 1.386 1.2.476 1.805 1.072 1.805 2.122 0 1.05-.796 2.079-2.473 2.079-.68 0-1.434-.206-1.805-.466l.244-.78h-.021ZM52.626 7.389v3.02h3.418V7.39h.924v7.21h-.924v-3.388h-3.418V14.6h-.924V7.389h.924ZM66.182 10.93c0 2.479-1.476 3.8-3.28 3.8-1.805 0-3.185-1.484-3.185-3.66s1.39-3.79 3.28-3.79 3.185 1.505 3.185 3.66v-.01Zm-5.5.107c0 1.549.819 2.924 2.262 2.924 1.444 0 2.272-1.354 2.272-3 0-1.44-.732-2.933-2.25-2.933-1.519 0-2.272 1.429-2.272 3.01h-.011ZM68.942 7.475c.446-.075 1.02-.14 1.763-.14.891 0 1.56.216 1.985.595.382.347.626.866.626 1.505 0 .639-.191 1.17-.552 1.548-.488.53-1.274.79-2.165.79-.276 0-.531 0-.744-.064v2.89h-.913V7.476Zm.913 3.476c.202.065.457.087.754.087 1.104 0 1.773-.553 1.773-1.538s-.67-1.418-1.667-1.418c-.403 0-.7.043-.86.076v2.804-.011ZM76.947 7.389v7.21h-.924V7.39h.924ZM80.047 7.389h3.81v.78H80.97v2.403h2.675v.769H80.97v3.27h-.923V7.388ZM88.487 14.61v-3.064l-2.24-4.157h1.05l.999 1.992c.265.541.488.985.7 1.494h.022c.19-.476.435-.953.71-1.494l1.02-1.992h1.04l-2.367 4.146v3.075h-.934ZM44.993 19.537c.467-.087 1.114-.152 1.974-.152.945 0 1.635.206 2.081.585.425.357.69.92.69 1.602s-.212 1.245-.605 1.635c-.52.53-1.316.78-2.24.78a2.8 2.8 0 0 1-.637-.054v2.728h-1.284v-7.124h.02Zm1.284 3.367c.17.043.372.065.638.065.966 0 1.56-.487 1.56-1.332 0-.79-.542-1.223-1.444-1.223-.35 0-.616.032-.754.065v2.436-.011ZM52.371 19.537c.488-.087 1.21-.152 1.964-.152 1.02 0 1.71.173 2.176.585.393.325.616.834.616 1.45 0 .932-.616 1.56-1.284 1.809v.032c.51.195.806.693.987 1.397.223.898.414 1.732.563 2.014h-1.327c-.107-.206-.276-.802-.478-1.7-.202-.942-.542-1.245-1.274-1.267h-.648v2.967h-1.284v-7.114l-.01-.021Zm1.285 3.194h.764c.881 0 1.412-.466 1.412-1.191 0-.78-.541-1.159-1.38-1.159-.414 0-.669.033-.807.065v2.274l.01.01ZM63.868 23.456h-2.665v2.111h2.983v1.083h-4.278v-7.21h4.12v1.082h-2.825v1.851h2.665v1.082ZM72.912 23.716a70.323 70.323 0 0 1-.085-3.032h-.031c-.234.888-.531 1.863-.839 2.772l-1.04 3.118h-.998l-.934-3.075a32.165 32.165 0 0 1-.712-2.814h-.02c-.033.941-.075 2.1-.129 3.074l-.159 2.902h-1.2l.468-7.21h1.698l.924 2.9c.255.856.478 1.712.648 2.513h.032c.19-.79.435-1.668.71-2.523l.977-2.89H73.9l.403 7.21H73.04l-.138-2.945h.01ZM78.433 19.44v7.21h-1.295v-7.21h1.295ZM85.376 23.456H82.71v2.111h2.983v1.083h-4.278v-7.21h4.119v1.082h-2.824v1.851h2.665v1.082ZM88.39 19.537c.489-.087 1.211-.152 1.965-.152 1.019 0 1.709.173 2.176.585.393.325.615.834.615 1.45 0 .932-.615 1.56-1.284 1.809v.032c.51.195.807.693.987 1.397.224.898.414 1.732.563 2.014h-1.327c-.106-.206-.276-.802-.478-1.7-.201-.942-.541-1.245-1.273-1.267h-.648v2.967H88.4v-7.114l-.01-.021Zm1.285 3.194h.764c.882 0 1.413-.466 1.413-1.191 0-.78-.542-1.159-1.38-1.159-.414 0-.67.033-.807.065v2.274l.01.01ZM45.057 31.587c.446-.076 1.019-.14 1.762-.14.892 0 1.56.216 1.985.595.382.346.627.866.627 1.505 0 .639-.192 1.17-.552 1.548-.489.53-1.275.79-2.166.79-.276 0-.531 0-.744-.064v2.89h-.912v-7.124Zm.912 3.476c.202.065.457.086.754.086 1.104 0 1.773-.552 1.773-1.537 0-.985-.668-1.419-1.666-1.419-.404 0-.701.044-.86.076v2.805-.011ZM52.913 36.449l-.733 2.262h-.945l2.41-7.21h1.104l2.42 7.21h-.976l-.753-2.262H52.913Zm2.325-.737-.7-2.079c-.15-.476-.256-.898-.362-1.32h-.021c-.106.422-.212.866-.35 1.299l-.701 2.09h2.134v.01ZM59.908 31.598c.467-.098 1.125-.152 1.763-.152.966 0 1.613.184 2.048.596.35.314.552.812.552 1.375 0 .953-.594 1.58-1.337 1.84v.022c.541.195.87.715 1.04 1.462.234 1.007.404 1.7.542 1.981h-.945c-.107-.206-.265-.823-.467-1.732-.212-.985-.595-1.375-1.423-1.397h-.86v3.13h-.913v-7.125Zm.913 3.28h.934c.977 0 1.593-.54 1.593-1.374 0-.942-.658-1.343-1.624-1.343-.446 0-.754.043-.903.087v2.63ZM68.602 32.28h-2.155v-.79h5.245v.79h-2.166v6.43h-.924v-6.43ZM74.027 38.711v-7.21h1.008l2.262 3.648c.52.845.923 1.603 1.263 2.35h.021c-.085-.975-.095-1.852-.095-2.978v-3.02h.86v7.21h-.934l-2.251-3.66c-.488-.811-.966-1.634-1.316-2.414h-.032c.053.92.063 1.798.063 2.989v3.085h-.86.011ZM86.341 35.333h-2.739v2.61h3.069v.779h-3.982V31.51h3.822v.78h-2.909v2.284h2.74v.769-.011ZM89.611 31.598c.468-.098 1.126-.152 1.762-.152.966 0 1.614.184 2.05.596.35.314.551.812.551 1.375 0 .953-.594 1.58-1.337 1.84v.022c.541.195.87.715 1.04 1.462.234 1.007.404 1.7.542 1.981h-.945c-.106-.206-.266-.823-.467-1.732-.213-.985-.595-1.375-1.423-1.397h-.86v3.13h-.913v-7.125Zm.913 3.28h.935c.976 0 1.592-.54 1.592-1.374 0-.942-.658-1.343-1.624-1.343-.446 0-.754.043-.903.087v2.63ZM37.778 7.275H6.938v31.453h30.84V7.275Z"></path>
          <path fill="#fff" fill-rule="evenodd" d="M23.256 15.818c0-.422-.053-1.018-.255-1.527.626.12.945.845 1.072 1.267-.244.076-.52.162-.817.26Zm-3.302 5.64c.053.9 2.4 1.094 2.527 3.195.106 1.656-.87 2.782-2.272 2.88-1.688.108-2.612-.899-2.612-.899l.361-1.527s.935.715 1.678.66c.488-.032.658-.432.647-.714-.074-1.169-1.974-1.104-2.102-3.031-.106-1.624.956-3.26 3.28-3.41.892-.055 1.36.172 1.36.172l-.531 2.014s-.595-.27-1.296-.227c-1.03.065-1.04.725-1.03.888h-.01Zm1.624-7.686c.192 0 .361.043.5.13a2.532 2.532 0 0 0-.648.508c-.531.574-.934 1.462-1.094 2.317-.499.163-.998.314-1.444.455.287-1.353 1.402-3.367 2.686-3.41Zm1.136 2.219c-.552.173-1.157.357-1.762.552.17-.66.499-1.31.892-1.743.148-.162.35-.336.594-.444.234.487.276 1.17.276 1.635Zm2.41-.758s-.191.065-.51.162a4.3 4.3 0 0 0-.244-.606c-.36-.704-.891-1.072-1.539-1.072h-.138l-.064-.065a1.303 1.303 0 0 0-1.072-.433c-.828.022-1.656.628-2.335 1.711-.478.758-.828 1.71-.934 2.447-.956.303-1.625.509-1.635.509-.478.151-.5.162-.563.628-.043.346-1.306 10.188-1.306 10.188l10.467 1.83v-15.31s-.095.011-.127.022v-.01ZM25.42 30.619l4.523-1.094s-1.942-12.754-1.953-12.84c-.01-.087-.096-.141-.16-.141-.063 0-1.337-.022-1.337-.022s-.775-.726-1.072-1.007v15.104Z" clip-rule="evenodd"></path>
        </svg>
      </div>

      {/* Profile Image (Floating) */}
      <div className="w-20 h-20 md:w-40 md:h-40 rounded-full overflow-hidden border border-gray-200 bg-gray-100 shrink-0 md:absolute md:-top-20 md:left-6 shadow-md z-10">
        <div className="w-full h-full bg-[#1a2b3c] flex items-center justify-center text-white text-4xl font-bold">
          DW
        </div>
      </div>

      <div className="md:mt-24 w-full">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dray Workx</h1>
        <div className="inline-block mt-2 border rounded-full py-1 px-3 font-medium text-xs border-gray-400 text-gray-700">
          Service partner
        </div>
      </div>
    </div>

    {/* Stats */}
    <div className="flex flex-col gap-3 mb-6">
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <div className="flex items-center gap-1">
          <Star className="w-5 h-5 fill-[#F5C452] text-[#F5C452]" />
          <span className="font-bold text-base">5.0</span>
          <span className="text-gray-500 text-base">(175)</span>
        </div>
        <span className="mx-2 text-gray-300">|</span>
        <div className="flex items-center gap-1.5 text-gray-500">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 9C12.2091 9 14 7.20914 14 5C14 2.79086 12.2091 1 10 1C7.79086 1 6 2.79086 6 5C6 7.20914 7.79086 9 10 9Z" fill="#87909B"></path><path d="M2 16C2 17.6569 3.34315 19 5 19H15C16.6569 19 18 17.6569 18 16C18 14.3431 16.5 11 10 11C3.5 11 2 14.3431 2 16Z" fill="#87909B"></path></svg>
          <span>Partner since January 2015</span>
        </div>
      </div>
    </div>

    {/* Contact Button */}
    <button className="w-full bg-[#2e3e48] text-white font-semibold hover:bg-gray-200 border border-gray-300  py-3 px-6 rounded-full mb-6 flex justify-start items-start  gap-2 transition-colors">
      Contact
    </button>

    <hr className="border-gray-200 mb-6" />

    {/* Details Section */}
    <div className="space-y-6 text-sm">
      <div>
        <h3 className="text-gray-500 font-medium mb-1">Price range for selected services</h3>
        <p className="text-gray-900 font-medium">Starting from $500</p>
      </div>

      <div>
        <h3 className="text-gray-500 font-medium mb-2">Contact information</h3>
        <div className="flex flex-col gap-3">
          <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
            <Globe className="w-5 h-5 text-gray-400" /> drayagency.drayworkx.com
          </a>
          <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
            <Phone className="w-5 h-5 text-gray-400" /> +17055309648
          </a>
          <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
            <Mail className="w-5 h-5 text-gray-400" /> info@drayworkx.com
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-gray-500 font-medium mb-2">Social links</h3>
        <div className="flex items-center gap-3 text-gray-400">
          <a href="#" className="hover:text-gray-600 transition-colors"><Linkedin className="w-6 h-6" /></a>
          <a href="#" className="hover:text-gray-600 transition-colors"><Twitter className="w-6 h-6" /></a>
          <a href="#" className="hover:text-gray-600 transition-colors"><Instagram className="w-6 h-6" /></a>
        </div>
      </div>

      <div>
        <h3 className="text-gray-500 font-medium mb-1">Primary location</h3>
        <p className="text-gray-900">Franklin Lakes, United States</p>
      </div>

      <div>
        <h3 className="text-gray-500 font-medium mb-1">Languages</h3>
        <p className="text-gray-900">English</p>
      </div>
    </div>
  </div>
);

interface AccordionItemProps {
  title: string;
  price: string;
  description: string;
}

const AccordionItem = ({ title, price, description }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 bg-white transition-colors">
      <button
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-gray-900 text-base">{title}</span>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-gray-800' : 'bg-gray-800'}`}>
          {isOpen
            ? <Minus width={18} className=" text-white" />
            : <Plus width={18} className=" text-white" />
          }
        </div>
      </button>
      {isOpen && (
        <div className="pb-4 pr-8 text-gray-600 text-base">
          <p className="mb-2 text-sm text-gray-500">Starting at {price}</p>
          <p className="leading-relaxed">Description: {description}</p>
        </div>
      )}
    </div>
  );
};

interface ReviewItemProps {
  review: {
    id: number;
    author: string;
    date: string;
    quality: number;
    communication: number;
    service: string;
    text: string;
  };
}

const ReviewItem = ({ review }: ReviewItemProps) => (
  <div className="py-6 border-b border-gray-200 last:border-0">
    <div className="flex justify-between items-start mb-4">
      <h4 className="font-bold text-gray-900 text-lg">{review.author}</h4>
      <span className="text-sm text-gray-500 hidden md:block">{review.date}</span>
    </div>

    <div className="flex flex-col gap-2 mb-4">
      <div className="flex items-center text-sm">
        <span className="w-28 text-gray-600">Quality of work</span>
        <div className="flex text-[#F5C452]">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
        </div>
        <span className="ml-2 text-gray-500">5</span>
      </div>
      <div className="flex items-center text-sm">
        <span className="w-28 text-gray-600">Communication</span>
        <div className="flex text-[#F5C452]">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
        </div>
        <span className="ml-2 text-gray-500">5</span>
      </div>
    </div>

    <p className="text-gray-700 text-base leading-relaxed mb-3">{review.text}</p>
    <p className="text-sm text-gray-500">Service reviewed: {review.service}</p>
  </div>
);

const FooterList = ({ title, links }: { title: string; links: string[] }) => (
  <div className="mb-8 md:mb-0">
    <h3 className="text-white font-bold mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map((link, idx) => (
        <li key={idx}>
          <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors font-medium hover:underline">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen  bg-white font-sans text-gray-900 " style={{ fontFamily: 'ShopifySans, Helvetica, Arial, sans-serif' }}>
      <Header />

      <main className="max-w-7xl px-4 mt-20 lg:px-20 mx-auto  pb-16 pt-8 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-4 gap-y-8 items-start">

          {/* Left Sidebar Layout */}
          <div className="lg:col-span-5 xl:col-span-5 ">
            <Sidebar />
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-6 xl:col-span-6 md:pt-4">

            {/* About Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">About</h2>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Business description</h3>
              <p className="text-gray-600 mb-4 leading-relaxed whitespace-pre-line">
                Dray workx is a digital marketing agency for Klaviyo retention, paid media and Shopify development. We help brands convert better, keep more customers and spend smarter.{"\n\n"}
                Shopify Premier Partners | Klaviyo Elite Partners | Meta Business Partners | Google Partners
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Premier Partner</h3>
              <p className="text-gray-600 mb-6">
                Partners are tiered based on multiple factors, including their history of experience and proven success on Shopify.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-8 mb-4">Specialized services</h3>
              <div className="mb-8">
                <AccordionItem
                  title="Store build or redesign"
                  price="$2500"
                  description="We design, build, and optimize Shopify websites that convert — blending clean code, smart UX, and full-funnel strategy for scalable growth."
                />
                <AccordionItem
                  title="Email marketing"
                  price="$2500"
                  description="We build and optimize retention ecosystems that turn first-time buyers into lifelong customers — uniting email, SMS, and on-site experiences for sustained growth."
                />
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Other services</h3>
                <p className="text-gray-600">Conversion rate optimization, Search engine advertising, Site performance and speed, Store migration, SEO, Social media marketing</p>
                <button className="text-gray-500 underline hover:no-underline mt-2 text-sm">More services</button>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Industries</h3>
                <p className="text-gray-600">Clothing and fashion, Health and beauty, Jewelry and accessories, Sports and recreation</p>
              </div>

              {/* Featured Work */}
              <div className="mt-10">
                <h2 className="text-xl font-bold mb-6">Featured work</h2>
                <div className="space-y-8">
                  {FEATURED_WORK.map((work, idx) => (
                    <div key={idx} className="flex flex-col">
                      <h3 className="font-bold text-gray-900 text-base mb-1">{work.title}</h3>
                      <p className="text-gray-600 mb-2 leading-relaxed">{work.desc}</p>
                      <a href="#" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium">
                        View featured work <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Ratings & Reviews Section */}
            <section className="pt-8 border-t border-gray-200">
              <div className="mb-8">
                <h2 className="text-xl font-bold flex items-center mb-4">
                  Rating
                  <Star className="w-5 h-5 fill-[#F5C452] text-[#F5C452] ml-3 mr-1" />
                  <span className="font-normal text-xl">5.0 <span className="text-gray-500">(151)</span></span>
                </h2>

                <h3 className="font-bold text-sm mb-2">Overall rating summary</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Ratings based on <span className="underline decoration-dotted cursor-pointer">quality of work</span> and <span className="underline decoration-dotted cursor-pointer">communication</span>
                </p>

                {/* Rating Progress Bars */}
                <div className="flex max-w-md">
                  <div className="flex flex-col gap-2 w-24">
                    {[5, 4, 3, 2, 1].map(num => (
                      <div key={num} className="flex items-center gap-1 text-sm text-gray-500 justify-end pr-2 h-5">
                        {num} <Star className="w-3 h-3 fill-gray-300 text-gray-300" />
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    {[
                      { percent: '96%', count: 145 },
                      { percent: '3%', count: 5 },
                      { percent: '0%', count: 0 },
                      { percent: '0%', count: 0 },
                      { percent: '1%', count: 1 },
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center gap-3 h-5">
                        <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-400 rounded-full" style={{ width: row.percent }} />
                        </div>
                        <span className="text-sm text-gray-500 w-8">({row.count})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reviews List */}
              <div className="mt-10 border-t border-gray-200">
                <h3 className="text-xl font-bold py-6">Reviews</h3>
                <div>
                  {REVIEWS_DATA.map((review) => (
                    <ReviewItem key={review.id} review={review} />
                  ))}
                </div>
              </div>

              {/* Pagination Placeholder */}
              <div className="mt-8 flex items-center gap-2 text-sm text-gray-600">
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 cursor-not-allowed">
                  <ChevronDown className="w-5 h-5 rotate-90" />
                </button>
                <div className="px-4 py-2 border border-gray-200 rounded-md">1 <ChevronDown className="w-4 h-4 inline ml-1" /></div>
                <span>/ 16</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 text-black">
                  <ChevronDown className="w-5 h-5 -rotate-90" />
                </button>
              </div>

            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#000000] text-white pt-16 pb-8 lg:px-20 px-4">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 font-bold text-xl tracking-tight mb-6 cursor-pointer">
                {/* <div className="w-8 h-8 bg-[#008060] rounded-sm flex items-center justify-center text-white text-base">S</div> */}
                {/* <span>shopify</span> */}
                <Image src="https://cdn.shopify.com/b/shopify-brochure2-assets/88ee7022e2749387148cb4098cc4f9fb.svg" alt="Shopify Logo" width={40} height={32} />
              </div>
            </div>
            <div className='lg:col-span-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8  rounded-lg'>
              <FooterList
                title="Shopify"
                links={['About', 'Careers', 'Investors', 'Press and Media', 'Partners', 'Affiliates', 'Legal', 'Service Status']}
              />
              <FooterList
                title="Support"
                links={['Merchant Support', 'Shopify Help Center', 'Hire a Partner', 'Shopify Academy', 'Shopify Community']}
              />
              <FooterList
                title="Developers"
                links={['Shopify.dev', 'API Documentation', 'Dev Degree']}
              />
              <FooterList
                title="Products"
                links={['Shop', 'Shop Pay', 'Shopify Plus', 'Shopify Fulfillment Network', 'Shopify for Enterprise']}
              />
              <FooterList
                title="Global Impact"
                links={['Sustainability', 'Build Black', 'Accessibility', 'Research']}
              />
              <FooterList
                title="Solutions"
                links={['Online Store Builder', 'Website Builder', 'Ecommerce Website']}
              />
            </div>


          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2 hover:text-white cursor-pointer order-2 md:order-1">
              <Globe className="w-4 h-4" />
              <span className="font-medium">USA | English</span>
              <ChevronDown className="w-3 h-3" />
            </div>

            <div className="flex flex-wrap gap-6 items-center order-1 md:order-2">
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Sitemap</a>
              <a href="#" className="hover:underline flex items-center gap-1">Your Privacy Choices</a>
            </div>

            <div className="flex items-center gap-5 order-3">
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5 fill-current" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5 fill-current" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}