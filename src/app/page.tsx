"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FEATURED_WORK } from '@/data/featuredWork';
import { REVIEWS_DATA } from '@/data/reviewsData';
import {
  Search, Star, MapPin, Globe, Linkedin, Twitter,
  ChevronDown, ChevronUp, ExternalLink, Menu,
  MessageSquare, LayoutGrid, ArrowRight, Share2, Heart,
  Mail, Phone, Instagram,
  ChevronRight,
  X,
  Plus,
  Minus,
  Facebook,
  Youtube
} from 'lucide-react';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import AccordionItem from '@/components/accordianItems';
import ReviewItem from '@/components/reviewItem';
import FooterList from '@/components/footer';

const REVIEWS_PER_PAGE = 5;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(REVIEWS_DATA.length / REVIEWS_PER_PAGE);

  const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;
  const endIndex = startIndex + REVIEWS_PER_PAGE;

  const paginatedReviews = REVIEWS_DATA.slice(startIndex, endIndex);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputPage, setInputPage] = useState(currentPage.toString());

  useEffect(() => {
    setInputPage(currentPage.toString());
  }, [currentPage]);

  return (
    <div className="min-h-screen  bg-white font-sans text-gray-900 " style={{ fontFamily: 'ShopifySans, Helvetica, Arial, sans-serif' }}>
      <Header />

      <main className="max-w-7xl px-4 mt-20 lg:px-20 mx-auto  pb-16 pt-8 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-8 items-start">

          {/* Left Sidebar Layout */}
          <div className="lg:col-span-5 xl:col-span-5 ">
            <Sidebar />
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-6 xl:col-span-6 md:pt-4">

            {/* About Section */}
            <section className="mb-12">
              <h2 className="text-[28px] font-semibold mb-4">About</h2>

              <h3 className="text-2xl font-medium text-gray-900 mt-6 mb-2">Business description</h3>
              <p className="text-gray-800 text-lg  font-sans whitespace-pre-wrap opacity-70 pb-4">
                We bring passion, creativity, and 25 years of experience to every Shopify store we build.
                Whether you're launching a new brand or refreshing an existing store, We&apos;re more than just an agency, we&apos;re your success partner. Every expert on our team is industry-certified and vetted by top professionals in their field.
                Shopify Premier Partners | Klaviyo Elite Partners | Meta Business Partners | Google Partners
              </p>

              <h3 className="text-2xl font-medium text-gray-900 mt-6 mb-2">Premier Partner</h3>
              <p className="text-gray-800 text-lg  font-sans whitespace-pre-wrap opacity-70 pb-4">
                Partners are tiered based on multiple factors, including their history of
                experience and proven success on Shopify.
              </p>

              <h3 className="text-2xl font-medium text-gray-900 mt-8 mb-4">Specialized services</h3>
              <div className="mb-8">
                <AccordionItem
                  title="Store build or redesign"
                  price="$2500"
                  description="We design, build, and optimize Shopify websites that convert — blending clean code, smart UX, and full-funnel strategy for scalable growth."
                />
                <AccordionItem
                  title='Social Media Marketing'
                  price="$2500"
                  description="We create and optimize paid social campaigns that drive efficient growth — blending data-driven strategy, compelling creative, and relentless testing for scalable results."
                />
                <AccordionItem
                  title="Email marketing"
                  price="$2500"
                  description="We build and optimize retention ecosystems that turn first-time buyers into lifelong customers — uniting email, SMS, and on-site experiences for sustained growth."
                />
                <AccordionItem
                  title='Website audit and optimization strategy'
                  price="$2500"
                  description="We optimize your Shopify store for search engines to increase visibility and drive organic traffic. Our team conducts comprehensive keyword research, on-page optimization, and technical SEO improvements to help your store rank higher in search results, attract more visitors, and ultimately boost sales."
                />
                <AccordionItem
                  title='POS setup and migration'
                  price="$2500"
                  description="We fix issues in your Shopify store to ensure optimal performance and user experience. Our team identifies and resolves bugs that may be affecting your store's functionality, speed, or user experience, helping to maintain a seamless shopping experience for your customers."
                />
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-medium text-gray-900 mb-2">Other services</h3>
                <p className="text-body-base font-sans whitespace-pre-wrap opacity-70 ">Theme customization, Store migration, Business strategy guidance, Logo and visual branding, Banner ads, Ongoing website management, Sales channel
                  setup</p>
                <button className="text-gray-500 underline hover:no-underline mt-2 text-sm">More services</button>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Industries</h3>
                <p className="text-body-base font-sans whitespace-pre-wrap opacity-70">Art and photography, Clothing and fashion, Health and beauty, Jewelry and accessories,Sports and recreation</p>
              </div>

              {/* Featured Work */}
              <div className="mt-10">
                <h2 className="text-2xl font-medium mb-6">Featured work</h2>
                <div className="space-y-8">
                  {FEATURED_WORK.map((work, idx) => (
                    <div key={idx} className="flex flex-col">
                      <h3 className="font-bold  text-gray-900 text-lg mb-1">{work.title}</h3>
                      <p className="text-gray-800 mb-2 leading-relaxed opacity-70">{work.desc}</p>
                      <a href="https://qunstack.com/customer-success-stories" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium">
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
                <h2 className="text-2xl font-medium flex items-center mb-4">
                  Rating
                  <Star className="w-5 h-5 fill-[#F5C452] text-[#F5C452] ml-3 mr-1" />
                  <span className="font-normal text-xl">5.0 <span className="text-gray-500">(186)</span></span>
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
                      { percent: '90.32%', count: 168 },
                      { percent: '5.38%', count: 10 },
                      { percent: '2.69%', count: 5 },
                      { percent: '1.08%', count: 2 },
                      { percent: '0.54%', count: 1 },
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
                  {paginatedReviews.map((review) => (
                    <ReviewItem key={review.id} review={review} />
                  ))}
                </div>
              </div>

              {/* Pagination Placeholder */}
              <div className="mt-8 flex items-center gap-2 text-sm text-gray-600">
                <button
                  onClick={() => currentPage > 1 && setCurrentPage(prev => prev - 1)}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 cursor-not-allowed">
                  <ChevronDown className="w-5 h-5 rotate-90" />
                </button>
                <div className="relative">
                  <div
                    onClick={() => setIsDropdownOpen(prev => !prev)}
                    className="px-4 py-2 border border-gray-200 rounded-md cursor-pointer select-none"
                  >
                    {currentPage}
                    <ChevronDown className="w-4 h-4 inline ml-1" />
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute mt-2 w-24 bg-white border border-gray-200 rounded-md shadow-md z-50 p-2">
                      {/* Input */}
                      <input
                        type="number"
                        min={1}
                        max={totalPages}
                        value={inputPage}
                        onChange={(e) => setInputPage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            const page = Number(inputPage);
                            if (page >= 1 && page <= totalPages) {
                              setCurrentPage(page);
                              setIsDropdownOpen(false);
                            }
                          }
                        }}
                        className="w-full border border-gray-200 rounded px-2 py-1 text-sm outline-none"
                      />

                      {/* Page List */}
                      <div className="max-h-40 overflow-y-auto mt-2">
                        {Array.from({ length: totalPages }, (_, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setCurrentPage(i + 1);
                              setIsDropdownOpen(false);
                            }}
                            className="px-2 py-1 text-sm hover:bg-gray-100 cursor-pointer"
                          >
                            {i + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <span>/ {totalPages}</span>
                <button
                  onClick={() => currentPage < totalPages && setCurrentPage(prev => prev + 1)}
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 ${currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-black hover:bg-gray-50'
                    }`}
                >
                  <ChevronDown className="w-5 h-5 -rotate-90" />
                </button>
              </div>
              {/* Pagination */}


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
            <div className='lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 rounded-lg'>

              <FooterList
                title="Shopify"
                links={[
                  { label: "About", link: "https://www.shopify.com/pk/about" },
                  { label: "Investors", link: "https://www.shopify.com/investors" },
                  { label: "Partners", link: "https://www.shopify.com/pk/partners" },
                  { label: "Affiliates", link: "https://www.shopify.com/pk/affiliates" },
                  { label: "Legal", link: "https://www.shopify.com/pk/legal" },
                  { label: "Service Status", link: "https://www.shopifystatus.com/" }
                ]}
              />

              <FooterList
                title="Support"
                links={[
                  { label: "Merchant Support", link: "https://help.shopify.com/en/questions" },
                  { label: "Shopify Help Center", link: "https://help.shopify.com/en/" },
                  { label: "Hire a Partner", link: "https://www.shopify.com/partners/directory" },
                  { label: "Shopify Academy", link: "https://www.shopifyacademy.com/" },
                  { label: "Shopify Community", link: "https://community.shopify.com/" }
                ]}
              />

              <FooterList
                title="Developers"
                links={[
                  { label: "Shopify.dev", link: "https://shopify.dev" },
                  { label: "API Documentation", link: "https://shopify.dev/api" },
                  { label: "Dev Degree", link: "https://devdegree.ca" }
                ]}
              />

              <FooterList
                title="Products"
                links={[
                  { label: "Shop", link: "https://shop.app" },
                  { label: "Shop Pay", link: "https://www.shopify.com/pk/shop-pay" },
                  { label: "Shopify for Enterprise", link: "https://www.shopify.com/pk/enterprise" }
                ]}
              />

              <FooterList
                title="Global Impact"
                links={[
                  { label: "Sustainability", link: "https://www.shopify.com/pk/climate" },
                  { label: "Build Black", link: "https://operationhope.org/initiatives/1-million-black-businesses/" }
                ]}
              />

              <FooterList
                title="Solutions"
                links={[
                  { label: "Online Store Builder", link: "https://www.shopify.com/pk/online" },
                  { label: "Website Builder", link: "https://www.shopify.com/pk/website/builder" },
                  { label: "Ecommerce Website", link: "https://www.shopify.com/pk/tour/ecommerce-website" }
                ]}
              />

            </div>


          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-300 text-lg">
            <div className="flex items-center gap-2 hover:text-white cursor-pointer order-2 md:order-1 ">
              <Globe className="w-4 h-4" />
              <span className="font-medium">USA | English</span>
              <ChevronDown className="w-3 h-3" />
            </div>

            <div className="flex flex-wrap gap-6 items-center order-1 md:order-2">
              <a href="https://www.shopify.com/" className="hover:underline">Terms of Service</a>
              <a href="https://www.shopify.com/legal/privacy" className="hover:underline">Privacy Policy</a>
              <a href="https://www.shopify.com/legal/privacy" className="hover:underline">Sitemap</a>
              <a href="https://www.shopify.com/legal/privacy" className="hover:underline flex items-center gap-1">Your Privacy Choices <Image src="https://cdn.shopify.com/b/shopify-brochure2-assets/8051dee1dd72e78a9528a16c062cff66.svg" alt="" width={30} height={10} /></a>
            </div>

            <div className="flex items-center gap-8 order-3">
              <a href="https://www.facebook.com/shopify" className="hover:text-white transition-colors p-2 bg-white rounded-full"><Facebook className="w-5 h-5 fill-transparent text-black" /></a>
              <a href="https://twitter.com/shopify" className="hover:text-white transition-colors  p-2 bg-white rounded-full"><Twitter className="w-5 h-5 fill-transparent text-black" /></a>
              <a href="https://www.youtube.com/user/shopify" className="hover:text-white transition-colors  p-2 bg-white rounded-full"><Youtube className="w-5 h-5 fill-transparent text-black" /></a>
              <a href="https://www.instagram.com/shopify/" className="hover:text-white transition-colors p-2 bg-white rounded-full"><Instagram className="w-5 h-5 fill-transparent text-black" /></a>
              <a href="https://www.linkedin.com/company/shopify" className="hover:text-white transition-colors p-2 bg-white rounded-full"><Linkedin className="w-5 h-5 fill-transparent text-black" /></a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}