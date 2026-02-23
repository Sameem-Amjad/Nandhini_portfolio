"use client"
import React, { useState } from "react";
import {
  Search, Star, ChevronDown, Plus, Globe, Phone, Mail,
  Linkedin, Twitter, Instagram, ChevronLeft, ChevronRight,
  CheckCircle2, ExternalLink
} from "lucide-react";

// ==========================================
// 1. DATA CONSTANTS
// ==========================================
const DUMMY_REVIEWS = [
  { id: 1, author: "Organethic", date: "Oct 15, 2023", text: "Great communication, very fast and efficient. Fixed my Klaviyo flows exactly how I needed them.", rating: 5 },
  { id: 2, author: "Pina Muffin", date: "Sep 22, 2023", text: "The team did an amazing job redesigning our Shopify store. Highly recommend their services!", rating: 5 },
  { id: 3, author: "The Emperor", date: "Aug 05, 2023", text: "Very knowledgeable about SEO and retention. We saw a boost in sales within weeks.", rating: 5 },
  { id: 4, author: "Tully", date: "Jul 18, 2023", text: "Excellent work on our custom theme development. They paid attention to every detail.", rating: 5 },
  { id: 5, author: "La Croa", date: "Jun 30, 2023", text: "Professional and delivered on time. Will definitely hire them again for future updates.", rating: 4 },
  { id: 6, author: "Asi Vida", date: "May 12, 2023", text: "Good experience overall, helped us migrate from WooCommerce to Shopify seamlessly.", rating: 5 },
  { id: 7, author: "Goldbear", date: "Apr 02, 2023", text: "Helped optimize our site speed significantly. Great technical skills.", rating: 5 },
];

const FEATURED_WORK = [
  {
    id: 1,
    title: "EcoBrand Migration & Redesign",
    description: "Successfully migrated a high-volume cosmetics brand to Shopify Plus. Improved site load speed by 40% and implemented custom Klaviyo retention flows that increased repeat customer rate by 22%.",
    link: "https://example.com/work/ecobrand",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: 2,
    title: "Urban Apparel - Custom Theme Build",
    description: "Built a fully custom, headless Shopify storefront using Next.js for a streetwear brand. Features include advanced 3D product filtering, custom cart drawer, and seamless email marketing integration.",
    link: "https://example.com/work/urban-apparel",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

// ==========================================
// 2. MODULAR COMPONENTS
// ==========================================

const Header = () => (
  <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-2 shrink-0 cursor-pointer">
        <div className="text-emerald-700 font-bold text-xl tracking-tight flex items-center">
          <span className="bg-emerald-700 text-white p-1 rounded-md mr-1.5 shadow-sm">S</span>
          shopify<span className="text-slate-900 font-normal ml-1">partners</span>
        </div>
      </div>

      <div className="flex-1 max-w-2xl hidden md:block px-6">
        <div className="relative group">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-emerald-600 transition-colors" />
          <input
            type="text"
            placeholder="Search by keyword, service, partner name..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 active:scale-95 transition-all shadow-sm">
        Log in
      </button>
    </div>

    <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex gap-8 text-sm text-slate-600 font-medium border-t border-slate-100 overflow-x-auto hide-scrollbar">
      {['Browse', 'Services', 'Locations'].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="flex items-center gap-1.5 hover:text-slate-900 transition-colors whitespace-nowrap">
          {item} <ChevronDown className="w-3.5 h-3.5 opacity-70" />
        </a>
      ))}
    </nav>
  </header>
);

const ProfileSidebar = () => (
  <aside className="space-y-6 lg:sticky lg:top-32 h-fit">
    {/* Main Profile Card */}
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div className="w-24 h-24 rounded-full bg-slate-100 overflow-hidden relative ring-4 ring-white shadow-md">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" alt="Profile" className="object-cover w-full h-full" />
        </div>
        <div className="bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-md uppercase tracking-wide flex items-center gap-1.5 shadow-sm">
          Shopify Premier Partner
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-slate-900 mb-2">Client Agency Name</h1>
      <span className="inline-flex items-center border border-slate-200 bg-slate-50 rounded-full px-3 py-1 text-xs font-medium text-slate-600 mb-5">
        Service partner
      </span>

      <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
        <div className="flex items-center text-amber-400">
          <Star className="w-4 h-4 fill-current" />
        </div>
        <span className="font-semibold text-slate-900">5.0</span>
        <span className="text-slate-500">( 175 )</span>
        <span className="text-slate-300 mx-1">•</span>
        <span>Partner since 2015</span>
      </div>

      <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 hover:shadow-md active:scale-[0.98] transition-all">
        Contact Partner
      </button>
    </div>

    {/* Info Card */}
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
      <div>
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Pricing</h3>
        <p className="text-slate-900 font-medium text-sm">Contact for pricing</p>
      </div>

      <hr className="border-slate-100" />

      <div>
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Contact</h3>
        <div className="flex flex-col gap-3.5 text-sm text-slate-600">
          <a href="#" className="flex items-center gap-3 hover:text-emerald-600 transition-colors group">
            <Globe className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" /> clientwebsite.com
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-emerald-600 transition-colors group">
            <Phone className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" /> +1 (555) 000-0000
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-emerald-600 transition-colors group">
            <Mail className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" /> info@clientwebsite.com
          </a>
        </div>
      </div>

      <hr className="border-slate-100" />

      <div>
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Social</h3>
        <div className="flex gap-3 text-slate-400">
          {[Linkedin, Twitter, Instagram].map((Icon, idx) => (
            <a key={idx} href="#" className="p-2 hover:bg-slate-100 rounded-lg hover:text-slate-900 transition-all">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </aside>
);

const AboutSection = () => (
  <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
    <h2 className="text-2xl font-semibold text-slate-900 mb-6">About the Agency</h2>

    <div className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed mb-8">
      <p className="mb-4">
        [Client Agency Description] is a digital marketing agency for retention, paid media and Shopify development. We help brands convert better, keep more customers and spend smarter.
      </p>
      <div className="flex flex-wrap gap-2 text-xs font-medium mt-4">
        {['Shopify Premier', 'Klaviyo Elite', 'Meta Business', 'Google Partners'].map(badge => (
          <span key={badge} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200">{badge}</span>
        ))}
      </div>
    </div>

    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Specialized Services
        </h3>
        <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100">
          {['Store build or redesign', 'Email marketing'].map((service, i) => (
            <div key={i} className="py-3.5 px-4 flex justify-between items-center cursor-pointer hover:bg-slate-50 transition-colors group">
              <span className="font-medium text-slate-700 text-sm">{service}</span>
              <Plus className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-2">Other Services</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          Conversion rate optimization, Search engine advertising, Site performance and speed, Store migration, SEO, Social media marketing
        </p>
        <button className="text-emerald-600 text-sm font-medium hover:underline">View all services</button>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-2">Industries Served</h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {['Beauty & Cosmetics', 'Apparel & Fashion', 'Food & Beverage', 'Health & Wellness', 'Jewelry'].map(industry => (
            <span key={industry} className="bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm">
              {industry}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FeaturedWorkSection = () => (
  <section className="mb-12">
    <h3 className="text-2xl font-semibold text-slate-900 mb-6 px-1">Featured Work</h3>
    <div className="flex flex-col gap-6">
      {FEATURED_WORK.map((work) => (
        <div key={work.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-all duration-300">
          <div className="w-full sm:w-[320px] shrink-0 overflow-hidden bg-slate-100 relative">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover aspect-video sm:aspect-auto sm:h-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
            <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
              <a href={work.link} className="flex items-center gap-2">
                {work.title} <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
              </a>
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {work.description}
            </p>
            <a
              href={work.link}
              className="inline-flex items-center justify-center px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 transition-colors w-fit"
            >
              View Case Study
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ReviewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = DUMMY_REVIEWS.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(DUMMY_REVIEWS.length / reviewsPerPage);

  return (
    <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-900 mb-8">Ratings and Reviews</h2>

      {/* Rating Summary */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 mb-12 p-6 bg-slate-50 rounded-xl border border-slate-100">
        <div className="flex flex-col items-center justify-center min-w-[140px]">
          <span className="text-6xl font-bold text-slate-900 tracking-tight mb-2">5.0</span>
          <div className="flex text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <span className="text-sm font-medium text-slate-500">175 reviews</span>
        </div>

        <div className="flex-1 space-y-3">
          {[
            { stars: 5, count: 172, percent: '98%' },
            { stars: 4, count: 3, percent: '2%' },
            { stars: 3, count: 0, percent: '0%' },
            { stars: 2, count: 0, percent: '0%' },
            { stars: 1, count: 0, percent: '0%' },
          ].map((row) => (
            <div key={row.stars} className="flex items-center gap-4 text-sm font-medium text-slate-600">
              <span className="w-14 text-right flex items-center justify-end gap-1">
                {row.stars} <Star className="w-3 h-3 fill-slate-400 text-slate-400" />
              </span>
              <div className="flex-1 h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{ width: row.percent }}></div>
              </div>
              <span className="w-8 text-slate-400">{row.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Review List */}
      <div className="space-y-6">
        {currentReviews.map((review) => (
          <div key={review.id} className="p-6 border border-slate-100 rounded-xl bg-white shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-semibold text-slate-900">{review.author}</h4>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-current' : 'text-slate-200'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 disabled:opacity-50 disabled:bg-slate-50 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-1 px-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${currentPage === i + 1
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 disabled:opacity-50 disabled:bg-slate-50 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
};

const Footer = () => {
  const footerLinks = {
    Shopify: ['About', 'Careers', 'Investors', 'Press and Media', 'Partners', 'Affiliates', 'Legal', 'Service Status'],
    Support: ['Merchant Support', 'Shopify Help Center', 'Hire a Partner', 'Shopify Academy', 'Shopify Community'],
    Developers: ['Shopify.dev', 'API Documentation', 'Dev Degree'],
    Products: ['Shop', 'Shop Pay', 'Shopify Plus', 'Shopify Fulfillment Network', 'Shopify for Enterprise'],
    'Global Impact': ['Sustainability', 'Build Black', 'Accessibility', 'Research'],
    Solutions: ['Online Store Builder', 'Website Builder', 'Ecommerce Website']
  };

  return (
    <footer className="bg-[#0b0c10] text-slate-300 pt-20 pb-10 text-sm mt-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-slate-900 font-bold text-2xl shadow-lg">S</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 mb-20">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-6 text-base">{title}</h4>
              <ul className="space-y-4">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="hover:text-white hover:underline underline-offset-4 transition-all">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-8 gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4">
            <button className="flex items-center gap-2 hover:text-white font-medium">
              <Globe className="w-4 h-4" /> USA | English <ChevronDown className="w-3 h-3 opacity-70" />
            </button>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Sitemap</a>
            <a href="#" className="hover:text-white flex items-center gap-2">
              Your Privacy Choices
              <div className="w-7 h-3.5 bg-blue-600 rounded-full relative ml-1 shadow-inner">
                <div className="absolute right-0.5 top-0.5 w-2.5 h-2.5 bg-white rounded-full shadow"></div>
              </div>
            </a>
          </div>

          <div className="flex gap-5 text-slate-400">
            {[Twitter, Linkedin, Instagram].map((Icon, idx) => (
              <a key={idx} href="#" className="hover:text-white transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// 3. MAIN APP COMPONENT
// ==========================================
export default function App() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="max-w-[1300px] mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 xl:gap-12 items-start">
          {/* Left Column - Sticky Profile Sidebar */}
          <ProfileSidebar />

          {/* Right Column - Main Content Flow */}
          <div className="min-w-0">
            <AboutSection />
            <FeaturedWorkSection />
            <ReviewsSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}