"use client";

import Image from "next/image";
import { Menu, Search, ChevronDown, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // adjust scroll threshold
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    }, [isMobileMenuOpen]);

    return (
        <header className={`lg:px-[90px] md:px-[90px] h-[144px] py-1 pb-4 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-transparent" : "bg-gray-100"
            }`}>
            {/* Top Bar */}
            <div className="lg:max-w-7xl md:max-w-7xl  max-w-full  mx-auto  h-16 flex items-center justify-between gap-8">
                {/* Logo */}
                <div className="lg:hidden md:hidden flex  items-center ml-4 gap-2 w-full justify-between ">
                    <a href="https://www.shopify.com/pk/partners">
                        <Image
                            src="https://cdn.shopify.com/b/shopify-brochure2-assets/08b278c519512d187520e1fe10b4f5b7.svg"
                            alt="Shopify Partners"

                            width={169}
                            height={28}
                            className="object-contain"
                        />
                    </a>
                    <button
                        className="lg:hidden md:hidden flex -mr-5 items-center gap-5 text-gray-800 hover:bg-gray-100 p-1 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open mobile menu"
                    >
                        <Search className="h-5 w-4 text-black stroke-3 mx-2 font-semibold stroke-4" />
                        <Menu className="h-5 w-5 stroke-3 text-black " />
                    </button>
                </div>
                <div className="lg:flex md:flex hidden items-center gap-2 ">
                    <a href="https://www.shopify.com/pk/partners">
                        <Image
                            src="https://cdn.shopify.com/b/shopify-brochure2-assets/08b278c519512d187520e1fe10b4f5b7.svg"
                            alt="Shopify Partners"

                            width={169}
                            height={28}
                            className="object-contain"
                        />
                    </a>
                    <button
                        className="lg:hidden md:hidden flex bg-white items-center gap-5 text-gray-800 hover:bg-gray-100 p-1 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open mobile menu"
                    >
                        <Search className="h-4 w-4 text-gray-600 mx-2 font-semibold stroke-4" />
                        <Menu className="h-6 w-6" />
                    </button>
                </div>

                {/* Search */}
                <div className="hidden md:flex flex-1 max-w-[728px]   mx-auto relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-600 mx-2 font-semibold stroke-4" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 p-[14px] border border-gray-600 rounded-full leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#008060] placeholder:font-medium placeholder:text-base focus:border-transparent  sm:text-sm transition duration-150 ease-in-out"
                        placeholder="Search by keyword, service, partner name, or country"
                    />
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-base font-medium bg-gray-700 text-white hover:text-gray-900 px-6 py-[10px] rounded-full">
                        Log in
                    </button>
                </div>
            </div>

            {/* Secondary Navigation */}
            <div className="hidden lg:flex justify-start pt-5  border-gray-200  h-14 ">
                <div className="max-w-7xl mx-auto  w-full flex items-center">
                    <nav className="flex items-center gap-x-8 h-full w-full relative">

                        {/* Browse */}
                        <div className="relative group h-full gap-2 mt-1 flex items-center">
                            <button className="flex items-center text-base  tracking-wide text-[#162120] font-medium h-full border-b-[3px] border-transparent group-hover:border-black transition-colors">
                                Browse <ChevronDown className="w-6 h-6 ml-2 stroke-1" />
                            </button>
                            <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-lg py-2 w-72 hidden group-hover:block transition-opacity opacity-0 group-hover:opacity-100 z-50">
                                <a href="https://www.shopify.com/pk/partners/directory/services" className="block px-4 py-3 hover:bg-gray-50 hover:underline">
                                    <div className="font-medium text-gray-900">Service partners</div>
                                    <div className="text-sm text-gray-500">Hire a professional</div>
                                </a>
                                <a href="https://www.shopify.com/pk/partners/directory/technologies" className="block px-4 py-3 hover:bg-gray-50 hover:underline">
                                    <div className="font-medium text-gray-900">Technology solutions</div>
                                    <div className="text-sm text-gray-500">Use apps or pre-built software integrations</div>
                                </a>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="relative group h-full flex mt-1 items-center">
                            <button className="flex items-center text-base tracking-wide text-[#162120] font-medium h-full border-b-[3px] border-transparent group-hover:border-black transition-colors">
                                Services <ChevronDown className="w-6 h-6 ml-2 stroke-1" />
                            </button>
                            <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-lg py-2 w-72 hidden group-hover:block transition-opacity opacity-0 group-hover:opacity-100 z-50">
                                {/* Marketing and sales */}
                                <div className="relative group/sub">
                                    <button className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-50 text-left font-medium text-gray-900">
                                        Marketing and sales <ChevronRight className="w-4 h-4 text-gray-400" />
                                    </button>
                                    <div className="absolute top-0 left-full bg-white border border-gray-200 shadow-lg rounded-lg py-2 w-64 hidden group-hover/sub:block -ml-1">
                                        <a href="https://www.shopify.com/pk/partners/directory/services/marketing-and-sales/email-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">Email marketing</a>
                                        <a href="https://www.shopify.com/pk/partners/directory/services/marketing-and-sales/seo-and-paid-search" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">SEO</a>
                                        <a href="https://www.shopify.com/pk/partners/directory/services/marketing-and-sales/setup-search-engine-advertising-campaigns" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">Search engine advertising</a>
                                        <a href="https://www.shopify.com/pk/partners/directory/services/marketing-and-sales/social-media-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">Social media marketing</a>
                                        <a href="https://www.shopify.com/pk/partners/directory/services/marketing-and-sales/content-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">Content marketing</a>
                                        <a href="https://www.shopify.com/pk/partners/directory/services/marketing-and-sales/sales-channel-setup" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">Sales channel setup</a>
                                        <a href="https://www.shopify.com/pk/partners/directory/services/marketing-and-sales/conversion-rate-optimization" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">Conversion rate optimization</a>
                                        <a href="https://www.shopify.com/pk/partners/directory/services/marketing-and-sales/analytics-and-tracking" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">Analytics and tracking</a>
                                    </div>
                                </div>

                                {/* Store setup and management */}
                                <div className="relative group/sub">
                                    <button className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-50 text-left font-medium text-gray-900">
                                        Store setup and management <ChevronRight className="w-4 h-4 text-gray-400" />
                                    </button>
                                    <div className="absolute top-0 left-full bg-white border border-gray-200 shadow-lg rounded-lg py-2 w-72 hidden group-hover/sub:block -ml-1">
                                        <a href="https://www.shopify.com/pk/partners/directory/services/store-setup/customize-design" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">Store build or redesign</a>
                                        <a href="https://www.shopify.com/pk/partners/directory/services/store-setup/migrate-from-another-platform" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">Store migration</a>
                                        <a href="https://www.shopify.com/pk/partners/directory/services/store-setup/set-up-products-and-collections" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">Product and collection setup</a>
                                        <a href="https://www.shopify.com/pk/partners/directory/services/store-setup/customize-theme" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">Theme customization</a>
                                        <a href="https://www.shopify.com/pk/partners/directory/services/store-setup/configure-settings" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">Store settings configuration</a>
                                        <a href="https://www.shopify.com/pk/partners/directory/services/store-setup/pos-setup-and-migration" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">POS setup and migration</a>
                                        <a href="https://www.shopify.com/pk/partners/directory/services/store-setup/headless-commerce" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">Headless commerce</a>
                                        <a href="https://www.shopify.com/pk/partners/directory/services/store-setup/website-audit-and-optimization-strategy" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">Website audit and optimization strategy</a>
                                        <a href="https://www.shopify.com/pk/partners/directory/services/store-setup/ongoing-website-management" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">Ongoing website management</a>
                                        <a href="https://www.shopify.com/pk/partners/directory/services/store-setup/checkout-upgrade" className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 hover:underline">Checkout upgrade</a>
                                    </div>
                                </div>

                                {/* You can continue adding Development, Visual Content, Content Writing, Expert Guidance similarly */}
                            </div>
                        </div>

                        {/* Locations */}
                        <div className="relative group h-full flex mt-1 items-center">
                            <button className="flex items-center text-base tracking-wide text-[#162120] font-medium h-full border-b-[3px] border-transparent group-hover:border-black transition-colors">
                                Locations <ChevronDown className="w-6 h-6 ml-2 stroke-1 " />
                            </button>
                            <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-lg py-2 w-72 hidden group-hover:block transition-opacity opacity-0 group-hover:opacity-100 z-50">
                                <a href="https://www.shopify.com/pk/partners/directory/locations/united-states" className="block px-4 py-2 hover:bg-gray-50 hover:underline">United States</a>
                                <a href="https://www.shopify.com/pk/partners/directory/locations/canada" className="block px-4 py-2 hover:bg-gray-50 hover:underline">Canada</a>
                                <a href="https://www.shopify.com/pk/partners/directory/locations/india" className="block px-4 py-2 hover:bg-gray-50 hover:underline">India</a>
                                <a href="https://www.shopify.com/pk/partners/directory/locations/united-kingdom" className="block px-4 py-2 hover:bg-gray-50 hover:underline">United Kingdom</a>
                                <a href="https://www.shopify.com/pk/partners/directory/locations/australia" className="block px-4 py-2 hover:bg-gray-50 hover:underline">Australia</a>
                                <a href="https://www.shopify.com/pk/partners/directory/locations/germany" className="block px-4 py-2 hover:bg-gray-50 hover:underline">Germany</a>
                                <a href="https://www.shopify.com/pk/partners/directory/locations/france" className="block px-4 py-2 hover:bg-gray-50 hover:underline">France</a>
                                <a href="https://www.shopify.com/pk/partners/directory/locations/italy" className="block px-4 py-2 hover:bg-gray-50 hover:underline">Italy</a>
                                <a href="https://www.shopify.com/pk/partners/directory/locations" className="block px-4 py-2 hover:bg-gray-50 hover:underline">View all partner locations</a>
                            </div>
                        </div>

                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;