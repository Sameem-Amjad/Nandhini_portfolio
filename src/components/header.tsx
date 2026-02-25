"use client";

import Image from "next/image";
import { Menu, Search, ChevronDown, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

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
        <header className="bg-gray-100 py-1 pb-4 sticky top-0 z-50 ">
            {/* Main Top Bar */}
            <div className="max-w-7xl mx-auto px-4 lg:px-20 h-16 flex items-center justify-between gap-4">
                {/* Logo Area */}
                <div className="flex items-center  gap-2">
                    <div className="flex items-center gap-1.5 font-bold text-lg tracking-tight text-[#008060] cursor-pointer">
                        {/* <div className="w-6 h-6 bg-[#008060] rounded-sm flex items-center justify-center text-white text-xs">S</div> */}
                        {/* <span className="text-black">shopify</span>
            <span className="text-gray-500 font-normal">Partners</span> */}
                        <Image src="https://cdn.shopify.com/b/shopify-brochure2-assets/08b278c519512d187520e1fe10b4f5b7.svg" alt="Shopify Partners" width={169} height={28} className="object-contain" />
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
            <div className="hidden  lg:flex px-4 pt-5 lg:px-16  border-gray-200 bg-gray-100 h-14">
                <div className="max-w-7xl mx-auto px-4 w-full flex items-center">
                    <nav className="flex items-center gap-x-8 h-full w-full relative">

                        {/* Browse Dropdown */}
                        <div className="relative group h-full flex items-center">
                            <button className="flex items-center text-base tracking-wide text-[#162120] font-medium h-full border-b-[3px] border-transparent group-hover:border-black transition-colors">
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
                            <button className="flex items-center text-base tracking-wide text-[#162120] font-medium h-full border-b-[3px] border-transparent group-hover:border-black transition-colors">
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

export default Header;