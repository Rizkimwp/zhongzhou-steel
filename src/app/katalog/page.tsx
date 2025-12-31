"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Phone, ArrowRight, Download, Package, ChevronRight, Menu, X } from 'lucide-react';
import Image from 'next/image';

const products = [
  { id: 1, name: "Pipa ERW Steel", category: "Pipa", desc: "Akurasi tinggi untuk otomotif & konstruksi.", specs: "OD: 1/2\" - 8\"", image: "/asset/pipa1.jpg" },
  { id: 2, name: "Stainless Steel SUS 304", category: "Stainless", desc: "Tahan korosi, finishing mirror/hairline.", specs: "Grade: 304/316", image: "/asset/pipa2.jpg" },
  { id: 3, name: "Pipa Besi Hollow", category: "Pipa", desc: "Rangka plafon & furnitur industrial.", specs: "Size: 15x15 - 100x100", image: "/asset/pipa3.jpg" },
  { id: 4, name: "Hot Dip Galvanized", category: "Galvanized", desc: "Lapisan seng tebal anti karat luar ruangan.", specs: "Standard: ASTM A123", image: "/asset/pipa4.jpg" },
  { id: 5, name: "Turnbuckle Scaffold", category: "Scaffolding", desc: "Sistem pengunci scaffolding sangat kokoh.", specs: "Heavy Duty", image: "/asset/steel1.jpg" },
  { id: 6, name: "Steel Springboard", category: "Scaffolding", desc: "Papan asiba baja anti slip untuk keamanan.", specs: "Anti-Slip Pattern", image: "/asset/pipa1.jpg" },
  { id: 7, name: "Oil Pipes API 5L", category: "Oil", desc: "Standar industri migas tekanan tinggi.", specs: "Grade: X42 - X70", image: "/asset/pipa1.jpg" },
  { id: 8, name: "Pipa Hollow Hitam", category: "Pipa", desc: "Material besi hitam murni harga kompetitif.", specs: "Thick: 1.2mm - 4.0mm", image: "/asset/pipa1.jpg" },
];

const categories = ["Semua", "Pipa", "Stainless", "Galvanized", "Scaffolding", "Oil"];

export default function KatalogPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredProducts = products.filter(p =>
    (activeCategory === "Semua" || p.category === activeCategory) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Mini Header */}
      <section className="bg-slate-950 pt-32 pb-12 px-6">
        <div className="max-w-[1600px] mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter"
          >
            Product <span className="text-red-600">Stock</span>
          </motion.h1>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row">

        {/* SIDEBAR FILTER (Sticky) */}
        <aside className="hidden lg:block w-80 p-8 sticky top-[80px] h-[calc(100vh-80px)] border-r border-slate-100">
          <div className="mb-10">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Search</h3>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Cari produk..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-red-600/20 text-sm font-bold"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Categories</h3>
            <div className="flex flex-col gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex justify-between items-center px-5 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all
                    ${activeCategory === cat
                      ? 'bg-red-600 text-white shadow-xl shadow-red-600/20 translate-x-2'
                      : 'bg-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                  {cat}
                  {activeCategory === cat && <ChevronRight size={16} />}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-20 p-6 bg-slate-900 rounded-[2rem] text-white">
            <p className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-2">Butuh Bantuan?</p>
            <p className="text-sm font-bold mb-4">Hubungi tim ahli kami untuk konsultasi teknis.</p>
            <a href="https://wa.me/6282113577186" className="text-xs font-black uppercase underline hover:text-red-500 transition-colors">Chat Sales</a>
          </div>
        </aside>

        {/* MOBILE FILTER BUTTON */}
        <div className="lg:hidden p-6 border-b flex gap-4 overflow-x-auto bg-white sticky top-[70px] z-30">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap
                    ${activeCategory === cat ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-500'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MAIN CONTENT (Grid) */}
        <main className="flex-1 p-8 lg:p-12">
          <div className="flex justify-between items-center mb-10">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Menampilkan <span className="text-slate-900">{filteredProducts.length}</span> Produk
            </p>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64 bg-slate-100 overflow-hidden">
                    {/* Gambar Produk */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-w-7xl) 25vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay Gradient (Opsional: agar terlihat lebih elegan) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Badge Kategori - Tetap di pojok kiri atas dengan Glassmorphism */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm border border-white/20">
                      <span className="text-[10px] font-black uppercase tracking-widest text-red-600">
                        {product.category}
                      </span>
                    </div>

                    {/* Indikator "Quick View" atau Harga saat Hover */}
                    <div className="absolute bottom-4 right-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="bg-red-600 text-white p-2 rounded-xl shadow-xl">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter mb-2 leading-none group-hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium mb-6 line-clamp-2 italic">
                      &quot;{product.desc}&quot;
                    </p>

                    <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Spesifikasi</p>
                        <p className="text-sm font-black text-slate-900">{product.specs}</p>
                      </div>
                      <a
                        href="https://wa.me/6282113577186"
                        className="bg-slate-950 text-white p-4 rounded-2xl hover:bg-red-600 transition-all duration-300 shadow-xl shadow-slate-950/20"
                      >
                        <ArrowRight size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </main>
      </div>
    </div>
  );
}