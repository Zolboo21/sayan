import React from 'react';
import { Phone, Printer, Check, Copy } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

interface ExecutiveHeaderProps {
  onPrint: () => void;
  activeSection: string;
}

export const ExecutiveHeader: React.FC<ExecutiveHeaderProps> = ({ onPrint, activeSection }) => {
  const [copiedPhone, setCopiedPhone] = React.useState(false);

  const primaryPhone = TOURNAMENT_DATA.organizer.phones[0];

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(primaryPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0f1d]/90 backdrop-blur-md border-b border-slate-800 text-white">
      {/* Top executive approval ticker/strip */}
      <div className="bg-slate-900/90 border-b border-slate-800/80 px-3 sm:px-4 py-2 text-[11px] sm:text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="text-amber-400 font-semibold">{TOURNAMENT_DATA.approval}</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 text-slate-400 text-[10px] sm:text-xs">
            <span>{TOURNAMENT_DATA.organizer.label}: {TOURNAMENT_DATA.organizer.company}</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="hidden sm:inline font-mono">{TOURNAMENT_DATA.organizer.phoneLabel}: {primaryPhone}</span>
          </div>
        </div>
      </div>

      {/* Main top navigation complying strictly with Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6 sm:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="text-lg sm:text-2xl font-bold font-display tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5 sm:gap-3"
        >
          <span className="w-2.5 h-6 bg-gradient-to-b from-amber-400 to-amber-600 rounded-xs"></span>
          <span>{TOURNAMENT_DATA.shortTitle}</span>
        </a>

        {/* Zone 2: Single-line Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#zorilogo"
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              activeSection === 'zorilogo' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            {TOURNAMENT_DATA.section1.title}
          </a>
          <a
            href="#hugatsaa"
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              activeSection === 'hugatsaa' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            Хугацаа
          </a>
          <a
            href="#burtgel"
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              activeSection === 'burtgel' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            Бүртгэл
          </a>
          <a
            href="#juram"
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              activeSection === 'juram' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            Журам
          </a>
          <a
            href="#shagnal"
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              activeSection === 'shagnal' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            {TOURNAMENT_DATA.section5.title}
          </a>
        </nav>

        {/* Zone 3: Primary Action & Print Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onPrint}
            title="Хэвлэх хувилбар"
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
        </div>
      </div>
    </header>
  );
};
