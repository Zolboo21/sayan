import React, { useState } from 'react';
import { Phone, Printer, Menu, X, ChevronRight } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

interface ExecutiveHeaderProps {
  onPrint: () => void;
  activeSection: string;
}

export const ExecutiveHeader: React.FC<ExecutiveHeaderProps> = ({ onPrint, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const primaryPhone = TOURNAMENT_DATA.organizer.phones[0];

  const navLinks = [
    { href: '#zorilogo', id: 'zorilogo', label: TOURNAMENT_DATA.section1.title },
    { href: '#sports', id: 'sports', label: 'Спортын 3 төрөл' },
    { href: '#hugatsaa', id: 'hugatsaa', label: 'Хугацаа' },
    { href: '#burtgel', id: 'burtgel', label: 'Бүртгэл' },
    { href: '#juram', id: 'juram', label: 'Журам' },
    { href: '#shagnal', id: 'shagnal', label: TOURNAMENT_DATA.section5.title },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0a0f1d]/95 backdrop-blur-md border-b border-slate-800 text-white">
      {/* Main top navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 sm:gap-6">
        {/* Zone 1: Brand with Sayan Shintse Logo next to HURD CUP 2026 */}
        <a
          href="#home"
          className="text-base sm:text-xl font-bold font-display tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5 sm:gap-3 group"
        >
          <img
            src={TOURNAMENT_DATA.assets.sayanShintseLogo}
            alt="Саян Шинцэ ХХК"
            className="h-8 sm:h-9 w-auto object-contain rounded border border-amber-500/30 bg-black/60 p-0.5 shadow-sm shrink-0"
            onError={(e) => {
              (e.target as HTMLImageElement).src = TOURNAMENT_DATA.assets.fallbackSayan;
            }}
          />
          <span className="border-l border-slate-700 pl-2 sm:pl-2.5 text-sm sm:text-lg lg:text-xl">
            {TOURNAMENT_DATA.shortTitle}
          </span>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
                activeSection === item.id ? 'text-amber-400 font-semibold' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Print Action, Direct Phone & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onPrint}
            title="Албан ёсны удирдамжийг хэвлэх / харах"
            aria-label="Хэвлэх"
            className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700/60"
          >
            <Printer className="w-4 h-4" />
          </button>

          <a
            href={`tel:${primaryPhone}`}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="font-mono">{primaryPhone}</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white bg-slate-800/80 rounded-lg border border-slate-700/60"
            aria-label="Цэс нээх"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown / Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-t border-slate-800 px-4 py-4 space-y-2 shadow-2xl backdrop-blur-xl">
          <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider px-2 pb-1 font-semibold">
            Цэсний навигаци
          </div>
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-amber-400/15 text-amber-300 font-bold border border-amber-500/30'
                  : 'text-slate-300 hover:bg-slate-900 hover:text-white'
              }`}
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          ))}

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono px-2">
            <span>{TOURNAMENT_DATA.organizer.company}</span>
            <span className="text-amber-400 font-semibold">{primaryPhone}</span>
          </div>
        </div>
      )}

      {/* Mobile Horizontal Quick-Scroll Ribbon for immediate one-tap jumping */}
      <div className="lg:hidden flex items-center gap-1 px-3 py-1.5 overflow-x-auto no-scrollbar border-t border-slate-800/80 bg-slate-900/60 text-xs">
        {navLinks.map((item) => (
          <a
            key={`ribbon-${item.href}`}
            href={item.href}
            className={`whitespace-nowrap px-2.5 py-1 rounded-md transition-colors ${
              activeSection === item.id
                ? 'bg-amber-400 text-slate-950 font-bold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
};
