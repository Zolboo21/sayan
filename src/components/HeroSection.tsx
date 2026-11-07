import React from 'react';
import { Calendar, MapPin, Award, Building2, ChevronDown } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

interface HeroSectionProps {
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  return (
    <section id="home" className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden border-b border-slate-800">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1629] via-[#0a0f1d] to-[#080c17] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Executive approval document card */}
        <div className="mb-8 p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-slate-800 shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-400/90 font-medium font-mono">
                Албан ёсны баталгаажуулалт
              </p>
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                {TOURNAMENT_DATA.approval}
              </h2>
            </div>
          </div>
          <div className="text-xs text-slate-400 font-mono sm:text-right border-t sm:border-t-0 border-slate-800 pt-2 sm:pt-0">
            <span>{TOURNAMENT_DATA.organizer.label}: </span>
            <span className="text-slate-200 font-semibold">{TOURNAMENT_DATA.organizer.company}</span>
          </div>
        </div>

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Official title, dedication, and Section 1 Objective */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase">
                {TOURNAMENT_DATA.titleKicker}
              </p>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold font-display tracking-tight text-white leading-tight">
                {TOURNAMENT_DATA.tournamentTitle}
              </h1>
            </div>

            {/* Section 1: Зорилого */}
            <div id="zorilogo" className="p-5 sm:p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <span>{TOURNAMENT_DATA.section1.num}.</span>
                <span>{TOURNAMENT_DATA.section1.title}</span>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {TOURNAMENT_DATA.section1.content}
              </p>
            </div>

            {/* Quick summary signals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-start gap-3">
                <Calendar className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-xs">Хугацаа</span>
                  <span className="text-slate-200 font-medium">2026.11.28, 29 (Нээлт 13:00)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900/40 border border-slate-800 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-xs">Байршил</span>
                  <span className="text-slate-200 font-medium">НААДАМ 2 КЛУБЫН СПОРТ заал</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#hugatsaa"
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-md flex items-center gap-2"
              >
                <span>Удирдамжтай танилцах</span>
                <ChevronDown className="w-4 h-4" />
              </a>

              <a
                href="#burtgel"
                className="px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white rounded-lg transition-colors border border-slate-700/80"
              >
                Тэмцээний бүртгэл
              </a>
            </div>
          </div>

          {/* Right Column: High-fidelity arena visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group bg-slate-950">
              <div className="aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/src/assets/images/corporate_sports_arena_1794050955834.jpg"
                  alt="НААДАМ 2 КЛУБЫН СПОРТ заал - ХУРД CUP-2026"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Scrim with exact venue name from source */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Тэмцээн зохион байгуулагдах спорт заал</span>
                </div>
                <p className="text-white text-sm font-bold">
                  КАНАД СУРГУУЛИЙН харьяа НААДАМ 2 КЛУБЫН СПОРТ заал
                </p>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  ХҮННҮ 2222 КАНАД СУРГУУЛИЙН АРД
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
