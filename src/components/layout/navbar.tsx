"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // State untuk mobile menu

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Tentang Kami', href: '/#tentang' },
        { name: 'Produk', href: '/katalog' },
        { name: 'Kontak', href: '/#kontak' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 ${isScrolled ? 'py-3' : 'py-6'}`}>
            <div className={`max-w-7xl mx-auto flex justify-between items-center px-8 py-3 rounded-2xl transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border border-white/20' : 'bg-transparent'}`}>

                {/* Logo Section */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                    <Link href="/" className="group">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={500}
                            height={500}
                            className={`transition-all duration-500 object-contain ${isScrolled ? 'h-12' : 'h-16 brightness-0 invert'}`}
                            priority
                        />
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {menuItems.map((item, idx) => (
                        <Link key={idx} href={item.href} className={`text-xs font-black uppercase tracking-widest relative group transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-100'}`}>
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Link href="https://wa.me/6282113577186" className="bg-red-600 hover:bg-slate-950 text-white text-[10px] font-black px-6 py-2.5 rounded-full transition-all duration-300">
                        GET QUOTE
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-2 transition-colors ${isScrolled || isOpen ? 'text-slate-900' : 'text-white'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white mt-2 rounded-2xl overflow-hidden shadow-2xl border border-slate-100"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {menuItems.map((item) => (
                                <Link 
                                    key={item.name} 
                                    href={item.href} 
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-900 font-bold uppercase tracking-widest text-sm border-b border-slate-50 pb-2"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="https://wa.me/6282113577186" 
                                className="bg-red-600 text-white text-center py-4 rounded-xl font-black tracking-widest text-xs"
                            >
                                GET QUOTE
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}