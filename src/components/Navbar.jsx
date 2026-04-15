// src/components/Navbar.jsx
import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#050810]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-sky-500" />
          <span className="text-white font-black text-xl tracking-tight">Mailvah</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {/* Use Next.js Link tags to point to your new pages */}
          <Link href="/compare" className="text-slate-300 hover:text-white transition-colors">Compare</Link>
          <Link href="/pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://app.mailvah.com" className="text-sm font-bold text-slate-300 hover:text-white">Log in</a>
          <a href="https://app.mailvah.com/register" className="bg-sky-500 hover:bg-sky-400 text-slate-950 px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-[0_0_15px_rgba(56,189,248,0.4)]">
            Start Verifying
          </a>
        </div>
      </div>
    </nav>
  );
}
