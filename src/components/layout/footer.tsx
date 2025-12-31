"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight 
} from 'lucide-react';

export default function ModernFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/zzsindonesia668", color: "hover:bg-pink-600" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/profile.php?id=61573756597022", color: "hover:bg-blue-600" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/david-wang-685855354/", color: "hover:bg-blue-700" },
    { icon: <Youtube size={20} />, href: "https://www.youtube.com/channel/UCRDszCIEVQOKUvP5Sldvewg", color: "hover:bg-red-600" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-6">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={180} 
                height={50} 
                className="brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-8 font-medium">
              Pelopor industri baja lokal dengan standar kualitas global. Berdedikasi untuk membangun infrastruktur Indonesia yang lebih kuat dan tahan lama.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((soc, idx) => (
                <Link 
                  key={idx} 
                  href={soc.href}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300 ${soc.color} hover:-translate-y-1 hover:shadow-lg`}
                >
                  {soc.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Tentang Kami', 'Katalog Produk', 'Proyek', 'Karir', 'Kontak'].map((item) => (
                <li key={item}>
                  <Link href="#" className="group flex items-center gap-2 text-sm hover:text-white transition-colors font-semibold">
                    <span className="w-0 h-[1px] bg-red-600 transition-all duration-300 group-hover:w-4" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Products</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center justify-between group">
                Pipa Besi Hollow <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center justify-between group">
                Stainless Steel Series <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center justify-between group">
                Scaffolding Solution <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center justify-between group">
                Custom Fabrication <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
              </li>
            </ul>
          </div>

          {/* Office Column */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Head Office</h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center text-red-500 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                  <MapPin size={18} />
                </div>
                <p className="text-sm font-medium leading-relaxed">
                  Kawasan Industri Cikande, <br />
                  Serang, Banten, Indonesia
                </p>
              </div>
              <div className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center text-red-500 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                  <Phone size={18} />
                </div>
                <p className="text-sm font-bold text-white">0821-1357-7186</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            © {currentYear} <span className="text-white">PT. Zhong Zhou Steel Indonesia</span>. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}