"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, Factory, ShieldCheck, Award, Zap, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import headerimage from "../../public/asset/header.jpg"
export default function FramerLanding() {
  // Animasi Variabel
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const productCategories = [
    {
      title: "Pipa & Besi & Baja",
      items: ["Pipa ERW Steel", "Pipa Besi Hollow", "Pipa Besi Hitam", "Pipa Besi Baja Hollow", "Pipa Hollow Hitam"],
      gradient: "from-slate-900 to-slate-800",
      icon: <Factory className="text-red-500" />
    },
    {
      title: "Solusi Konstruksi",
      items: ["Besi Baja Turnbuckle", "Besi Baja Papan Asiba", "Stainless Steel Series"],
      gradient: "from-red-700 to-red-900",
      icon: <ShieldCheck className="text-white" />
    },
    {
      title: "Layanan Khusus",
      items: ["Mendukung Pesanan Massal", "Spesifikasi Khusus (Custom)", "Kebutuhan Proyek Besar"],
      gradient: "from-slate-800 to-slate-700",
      icon: <Zap className="text-yellow-400" />
    }
  ];

  return (
    <div className="bg-white selection:bg-red-500 selection:text-white overflow-x-hidden">

      {/* Hero Section dengan Parallax Effect */}
      <header className="relative min-h-screen flex items-center justify-center bg-slate-700 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={headerimage}
            alt="Industrial Steel Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        <div className="relative max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 p-1 pr-4 rounded-full mb-8"
          >
            <span className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-full uppercase">Live</span>
            <span className="text-white text-xs font-medium tracking-wide italic">Pabrik Cikande: Kapasitas Produksi Maksimal</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter"
          >
            THE ART OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400">
              INDUSTRIAL STEEL.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            PT. Zhong Zhou Steel Indonesia menghadirkan presisi baja lokal dengan standar global.
            Solusi material untuk infrastruktur masa depan Indonesia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link href="https://wa.me/6282113577186" className="group bg-red-600 text-white px-10 py-5 rounded-full font-bold transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] flex items-center justify-center gap-2">
              KONSULTASI HARGA <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/katalog" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black px-10 py-5 rounded-full font-bold transition-all">
              LIHAT KATALOG
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Bento Grid dengan Hover Animation */}
      <section id='tentang' className="py-24 px-6 -mt-20 relative z-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="inline-block p-4 bg-red-50 rounded-2xl text-red-600">
                <Award size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter italic"> PT. Zhong Zhou Steel Indonesia</h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                PT. Zhong Zhou Steel Indonesia merupakan pabrik baja dan besi lokal 100% Indonesia yang berfokus pada produksi dan distribusi material konstruksi berkualitas dengan harga termurah dan kompetitif. Berlokasi strategis di kawasan industri Cikande, kami melayani kebutuhan proyek skala kecil hingga besar di seluruh Indonesia.

                Kami memproduksi dan menyediakan berbagai jenis pipa, besi, dan baja yang telah melalui proses produksi terstandar untuk memastikan kekuatan, presisi, dan daya tahan sesuai kebutuhan industri konstruksi, manufaktur, dan infrastruktur.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col items-center justify-center text-center group">
            <Zap className="text-yellow-400 mb-4 group-hover:scale-125 transition-transform" size={48} />
            <div className="text-6xl font-black tracking-tighter italic">#1</div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-2">Harga Termurah di Kelasnya</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Product List dengan Staggered Animation */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-red-600 font-black tracking-[0.3em] text-sm mb-2 uppercase">Core Products</h3>
            <h4 className="text-5xl font-black text-slate-950 italic uppercase tracking-tighter">Material Berstandar Tinggi</h4>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-2 rounded-[2.5rem] shadow-xl border border-slate-100 group"
              >
                <div className={`h-48 rounded-[2rem] bg-gradient-to-br ${cat.gradient} flex flex-col items-center justify-center p-8 text-center`}>
                  <div className="mb-4 opacity-80 group-hover:scale-110 transition-transform duration-500">
                    {cat.icon}
                  </div>
                  <h5 className="text-white text-2xl font-black uppercase italic leading-none">{cat.title}</h5>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-bold text-slate-600 hover:text-red-600 transition-colors cursor-default">
                        <CheckCircle size={16} className="text-red-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating CTA dengan Animasi Pulse */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-red-600 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(220,38,38,0.4)]"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black italic uppercase mb-8 leading-none">
              Bangun Proyek Anda <br /> Hari Ini.
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/6282113577186"
                className="bg-slate-900 text-white px-12 py-6 rounded-full font-black text-xl flex items-center gap-4 shadow-2xl"
              >
                <Phone /> 0821-1357-7186
              </motion.a>
              <div className="text-left md:border-l md:pl-8 border-red-400">
                <p className="font-bold text-red-100 uppercase tracking-widest text-sm">Email Marketing</p>
                <p className="text-xl font-bold">zzsindonesia668@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Background Decorative Circles */}
          <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-50%] right-[-10%] w-96 h-96 bg-black/10 rounded-full blur-3xl" />
        </motion.div>
      </section>
    </div>
  );
}