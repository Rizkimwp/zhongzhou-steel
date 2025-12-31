"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../../public/logo.png"
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Deteksi scroll untuk mengubah style navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 
      ${isScrolled ? 'py-3' : 'py-6'}`}
        >
            <div
                className={`max-w-7xl mx-auto flex justify-between items-center px-8 py-3 rounded-2xl transition-all duration-500
        ${isScrolled
                        ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] border border-white/20'
                        : 'bg-transparent'}`}
            >
                {/* Logo Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative"
                >
                    <Link href="/" className=" group">
                        <Image
                            src="/logo.png"
                            alt="Logo PT Zhongzhou Steel Indonesia"
                            width={500}
                            height={500}
                            className={`  transition-all duration-500 object-contain drop-shadow-sm group-hover:scale-105
              ${isScrolled ? 'h-16' : 'h-24 brightness-0 invert'}`}
                            priority
                        />
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {[
                        { name: 'Tentang Kami', href: '/#tentang' },
                        { name: 'Produk', href: '/katalog' },
                        { name: 'Kontak', href: '/#kontak' },
                    ].map((item, idx) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link
                                href={item.href}
                                className={`text-xs font-black uppercase tracking-[0.2em] relative group transition-colors
                ${isScrolled ? 'text-slate-900' : 'text-slate-100'}`}
                            >
                                {item.name}
                                {/* Animated Underline */}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </motion.div>
                    ))}

                    {/* Call to Action Button in Nav */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            href="https://wa.me/6282113577186"
                            className="bg-red-600 hover:bg-slate-950 text-white text-[10px] font-black px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-red-600/20 uppercase tracking-widest"
                        >
                            Get Quote
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Menu Icon (Placeholder) */}
                <div className="md:hidden text-slate-900">
                    <button className="p-2">
                        <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                        <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                        <div className="w-4 h-0.5 bg-current"></div>
                    </button>
                </div>
            </div>
        </nav>
    );
}