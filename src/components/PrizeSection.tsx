import React from 'react';
import { Award, Trophy, Medal, Star } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

export const PrizeSection: React.FC = () => {
  const sec5 = TOURNAMENT_DATA.section5;

  return (
    <section id="shagnal" className="py-14 sm:py-20 bg-[#0a0f1d] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 font-mono">
              {sec5.num}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              {sec5.title}
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            {TOURNAMENT_DATA.dedicatedCompany}
          </p>
        </div>

        {/* Marquee Card: 5.6 ШИЛЖИН ЯВАХ ЦОМ with high-fidelity trophy cup imagery */}
        <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border border-amber-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left image column */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] overflow-hidden bg-slate-950">
              <img
                src={TOURNAMENT_DATA.assets.trophyPhoto}
                alt="ШИЛЖИН ЯВАХ ЦОМ - ХУРД CUP-2026"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = TOURNAMENT_DATA.assets.fallbackTrophy;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-slate-900/90" />
            </div>

            {/* Right text column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded">
                  {sec5.travelingCup.num}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>Тэргүүн дээд шагнал</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white leading-snug">
                “ШИЛЖИН ЯВАХ ЦОМ”
              </h3>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                {sec5.travelingCup.text}
              </p>

              <div className="pt-2 text-xs text-amber-300/80 font-mono flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Бага онооны системээр шалгаруулна</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Sports Prize Categories: 5.1 Basketball & 5.4 Darts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 5.1 Basketball Prizes */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-amber-400 font-semibold">
                    {sec5.basketball.num}
                  </span>
                  <h3 className="text-lg font-bold font-display text-white">
                    {sec5.basketball.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {sec5.basketball.prizes.map((p, idx) => (
                <div
                  key={p.place}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                      idx === 0
                        ? 'bg-amber-400 text-slate-950 shadow-sm'
                        : idx === 1
                        ? 'bg-slate-300 text-slate-900'
                        : 'bg-amber-700 text-amber-100'
                    }`}>
                      <Medal className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-white">
                      {p.place}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-amber-400/90 font-medium text-right">
                    {p.award}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 5.4 Darts Prizes */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-amber-400 font-semibold">
                    {sec5.darts.num}
                  </span>
                  <h3 className="text-lg font-bold font-display text-white">
                    {sec5.darts.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {sec5.darts.prizes.map((p, idx) => (
                <div
                  key={p.place}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                      idx === 0
                        ? 'bg-amber-400 text-slate-950 shadow-sm'
                        : idx === 1
                        ? 'bg-slate-300 text-slate-900'
                        : 'bg-amber-700 text-amber-100'
                    }`}>
                      <Medal className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-white">
                      {p.place}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-amber-400/90 font-medium text-right">
                    {p.award}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5.3 MVP Section */}
        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 font-semibold">
                {sec5.mvp.num}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {sec5.mvp.title}
              </h3>
              <p className="text-xs text-slate-400">
                {sec5.mvp.details}
              </p>
            </div>
          </div>

          <div className="text-sm sm:text-base font-bold text-amber-400 sm:text-right border-t sm:border-t-0 border-slate-800 pt-2 sm:pt-0">
            {sec5.mvp.award}
          </div>
        </div>
      </div>
    </section>
  );
};
