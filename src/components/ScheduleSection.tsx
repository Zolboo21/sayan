import React from 'react';
import { CalendarDays, Clock, MapPin, Users } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

export const ScheduleSection: React.FC = () => {
  return (
    <section id="hugatsaa" className="py-14 sm:py-20 bg-[#080c17] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 font-mono">
              {TOURNAMENT_DATA.section2.num}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              {TOURNAMENT_DATA.section2.title}
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            {TOURNAMENT_DATA.dedicatedCompany}
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 2.1 Tournament dates and venue */}
          <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <CalendarDays className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-amber-400 font-semibold px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/20">
                {TOURNAMENT_DATA.section2.items[0].num}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-semibold text-white">
                Тэмцээн зохион байгуулах өдрүүд ба байршил
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {TOURNAMENT_DATA.section2.items[0].text}
              </p>
            </div>
          </div>

          {/* 2.2 Opening Ceremony */}
          <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-amber-400 font-semibold px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/20">
                {TOURNAMENT_DATA.section2.items[1].num}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-semibold text-white">
                Нээлтийн цаг
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {TOURNAMENT_DATA.section2.items[1].text}
              </p>
            </div>
          </div>
        </div>

        {/* Technical Meeting Special Callout Card from Section 3 */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-amber-950/20 border border-amber-500/30 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-1 md:mt-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                    Албан ёсны хурал
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {TOURNAMENT_DATA.section3.technicalMeeting}
                </h3>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 border-slate-800 pt-3 md:pt-0">
              <span className="text-xs text-slate-400 font-mono">Огноо, цаг</span>
              <span className="text-sm font-bold text-amber-400 font-mono">11 сарын 11-ний 18:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
