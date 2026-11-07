import React, { useState } from 'react';
import { Calendar, MapPin, Award, ChevronDown, ZoomIn, X, Trophy } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

interface HeroSectionProps {
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  const [showCourtModal, setShowCourtModal] = useState<boolean>(false);

  return (
    <section id="home" className="relative pt-6 pb-16 lg:pt-10 lg:pb-20 overflow-hidden border-b border-slate-800">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1629] via-[#0a0f1d] to-[#080c17] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Executive Document Bar with both Corporate Logos */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-5">
          {/* Sayan Shintse Approval */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            <img
              src={TOURNAMENT_DATA.assets.sayanShintseLogo}
              alt="Саян Шинцэ ХХК"
              className="h-11 sm:h-14 w-auto object-contain rounded-lg border border-amber-500/30 p-1 bg-black/60 shadow-md shrink-0"
              onError={(e) => {
                (e.target as HTMLImageElement).src = TOURNAMENT_DATA.assets.fallbackSayan;
              }}
            />
            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-400 font-bold font-mono">
                Албан ёсны баталгаажуулалт
              </p>
              <h2 className="text-xs sm:text-base font-bold text-white tracking-tight">
                {TOURNAMENT_DATA.approval}
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-400 font-mono mt-0.5">
                {TOURNAMENT_DATA.organizer.label}: <span className="text-slate-200 font-semibold">{TOURNAMENT_DATA.organizer.company}</span>
              </p>
            </div>
          </div>

          {/* Dedicated Company Logo (Khurd Group) */}
          <div className="flex items-center justify-between sm:justify-end gap-3 sm:border-l sm:border-slate-800 sm:pl-6 border-t sm:border-t-0 border-slate-800/80 pt-3 sm:pt-0">
            <div className="text-left sm:text-right">
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono block">Тэмцээний нэрэмжит</span>
              <span className="text-xs font-bold text-white">{TOURNAMENT_DATA.dedicatedCompany}</span>
            </div>
            <img
              src={TOURNAMENT_DATA.assets.khurdLogo}
              alt="ХУРД ГРУПП лого"
              className="h-9 sm:h-12 w-auto object-contain bg-white rounded-lg p-1.5 shadow-md shrink-0"
              onError={(e) => {
                (e.target as HTMLImageElement).src = TOURNAMENT_DATA.assets.fallbackKhurd;
              }}
            />
          </div>
        </div>

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Official title, Equal 3 Sports Signals & Section 1 Objective */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase">
                {TOURNAMENT_DATA.titleKicker}
              </p>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold font-display tracking-tight text-white leading-tight">
                {TOURNAMENT_DATA.tournamentTitle}
              </h1>

              {/* EQUAL 3 SPORTS PILLARS BADGE STRIP */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-medium">
                <span className="text-slate-400 font-mono">Спортын 3 төрөл:</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-500/15 border border-orange-500/30 text-orange-300 font-semibold">
                  <span>🏀</span>
                  <span>Сагсан бөмбөг</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-semibold">
                  <span>🎯</span>
                  <span>Дартс</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-300 font-semibold">
                  <span>🏓</span>
                  <span>Ширээний теннис</span>
                </span>
              </div>
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

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#sports"
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-md flex items-center gap-2"
              >
                <span>Спортын 3 төрөл харах</span>
                <ChevronDown className="w-4 h-4" />
              </a>

              <a
                href="#burtgel"
                className="px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white rounded-lg transition-colors border border-slate-700/80"
              >
                Тэмцээний бүртгэл
              </a>

              <a
                href="#hugatsaa"
                className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-lg transition-colors border border-slate-800"
              >
                Хугацаа, хуваарь
              </a>
            </div>
          </div>

          {/* Right Column: Actual Court Picture Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group bg-slate-950">
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={TOURNAMENT_DATA.assets.actualCourtPhoto}
                  alt="НААДАМ 2 КЛУБЫН СПОРТ заал - Бодит зураг"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = TOURNAMENT_DATA.assets.fallbackCourt;
                  }}
                />

                {/* Inspect Zoom Button */}
                <button
                  onClick={() => setShowCourtModal(true)}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all flex items-center gap-1.5 text-xs"
                  title="Бодит зургийг томруулж үзэх"
                >
                  <ZoomIn className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline font-mono">Бодит зураг</span>
                </button>
              </div>

              {/* Scrim with exact venue name from source */}
              <div className="p-4 sm:p-5 bg-slate-950/95 border-t border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>Тэмцээн зохион байгуулагдах спорт заал (Бодит зураг)</span>
                </div>
                <p className="text-white text-sm sm:text-base font-bold">
                  КАНАД СУРГУУЛИЙН харьяа НААДАМ 2 КЛУБЫН СПОРТ заал
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  ХҮННҮ 2222 КАНАД СУРГУУЛИЙН АРД
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Actual Court Picture */}
      {showCourtModal && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="relative max-w-5xl w-full bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            <div className="p-4 flex items-center justify-between border-b border-slate-800">
              <div className="space-y-0.5">
                <h3 className="text-white font-bold text-sm sm:text-base">
                  КАНАД СУРГУУЛИЙН харьяа НААДАМ 2 КЛУБЫН СПОРТ заал
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Тэмцээн явагдах спорт заалны бодит гэрэл зураг (ХҮННҮ 2222)
                </p>
              </div>
              <button
                onClick={() => setShowCourtModal(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                aria-label="Хаах"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={TOURNAMENT_DATA.assets.actualCourtPhoto}
                alt="НААДАМ 2 КЛУБЫН СПОРТ заал бодит зураг"
                className="max-h-[75vh] w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = TOURNAMENT_DATA.assets.fallbackCourt;
                }}
              />
            </div>
            <div className="p-3 bg-slate-900/80 border-t border-slate-800 text-xs text-slate-400 text-center font-mono">
              2026 оны 11 дүгээр сарын 28, 29-ний өдрүүдэд “ХУРД CUP-2026” зохион байгуулагдана.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
