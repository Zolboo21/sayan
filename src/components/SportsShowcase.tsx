import React, { useState } from 'react';
import { Trophy, Target, Activity, Users, Clock, Award, ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

export const SportsShowcase: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState<'all' | 'basketball' | 'darts' | 'tennis'>('all');

  const sec4 = TOURNAMENT_DATA.section4;
  const sec5 = TOURNAMENT_DATA.section5;

  return (
    <section id="sports" className="py-14 sm:py-20 bg-[#060a14] border-b border-slate-800 relative overflow-hidden">
      {/* Background subtle court lines styling */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 font-mono">
              ТЭМЦЭЭНИЙ СПОРТЫН 3 ТӨРӨЛ
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              Сагсан бөмбөг · Дартс · Ширээний теннис
            </h2>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            <span>Тэмцээний нийлбэр дүн: </span>
            <span className="text-amber-400 font-semibold">Бага онооны систем</span>
          </div>
        </div>

        {/* 3 Equal Sport Columns (Balanced 3-Pillar Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* SPORT 1: Сагсан бөмбөг */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-slate-700 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-5">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 text-2xl">
                    🏀
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-orange-400">4.2 & 5.1</span>
                    <h3 className="text-xl font-bold font-display text-white">Сагсан бөмбөг</h3>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-orange-500/10 text-orange-300 border border-orange-500/20">
                  Эрэгтэй, Эмэгтэй
                </span>
              </div>

              {/* Quick specs */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <Users className="w-4 h-4 text-orange-400" />
                    <span>Багийн бүрэлдэхүүн (4.2.1)</span>
                  </div>
                  <p className="text-slate-200 pl-6 text-xs leading-relaxed font-semibold">
                    {sec4.basketball.rules[0].text}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <Clock className="w-4 h-4 text-orange-400" />
                    <span>Тоглолтын хугацаа (4.2.4 & 4.2.5)</span>
                  </div>
                  <p className="text-slate-200 pl-6 text-xs leading-relaxed">
                    Зоо: эрэгтэй-7 мин, эмэгтэй-6 мин (бохир цаг)
                  </p>
                  <p className="text-slate-200 pl-6 text-xs leading-relaxed font-medium text-amber-300">
                    Финал: эрэгтэй-8 мин, эмэгтэй-7 мин (цэвэр цаг)
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <ShieldCheck className="w-4 h-4 text-orange-400" />
                    <span>Лигийн тамирчин (4.2.6 & 4.2.7)</span>
                  </div>
                  <p className="text-slate-200 pl-6 text-xs leading-relaxed">
                    Дээд лиг оролцуулахгүй. M-хөгжлийн лиг багт 2 байж талбайд 1,1-р ээлжилж гарна.
                  </p>
                </div>
              </div>
            </div>

            {/* Awards breakdown */}
            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Шагнал (5.1 & 5.3):</span>
                </span>
                <span className="font-mono text-slate-400">1, 2, 3-р байр + MVP</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Алтан, Мөнгөн, Хүрэл медаль, өргөмжлөл, мөнгөн шагнал. Үнэ цэнтэй эрэгтэй, эмэгтэй 1,1 тоглогчид цом, өргөмжлөл, мөнгөн шагнал.
              </p>
            </div>
          </div>

          {/* SPORT 2: Дартс */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-slate-700 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-5">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl">
                    🎯
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-emerald-400">4.3 & 5.4</span>
                    <h3 className="text-xl font-bold font-display text-white">Дартс</h3>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Эрэгтэй, Эмэгтэй
                </span>
              </div>

              {/* Quick specs */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <span>Тамирчдын тоо (4.3.1)</span>
                  </div>
                  <p className="text-slate-200 pl-6 text-xs leading-relaxed font-semibold">
                    {sec4.darts.rules[0].text}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span>Тэмцээний систем (4.3.2)</span>
                  </div>
                  <p className="text-slate-200 pl-6 text-xs leading-relaxed">
                    {sec4.darts.rules[1].text}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Бүртгэл, мэдүүлэг (3.1)</span>
                  </div>
                  <p className="text-slate-200 pl-6 text-xs leading-relaxed">
                    Байгууллагын тэмцээнд оролцох мэдүүлэгийг (сагс, дартс) Megatuwshuu@yahoo.com хаяг болон техникийн зөвөлгөөн дээр хүлээж авна.
                  </p>
                </div>
              </div>
            </div>

            {/* Awards breakdown */}
            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Award className="w-3.5 h-3.5" />
                  <span>Шагнал (5.4):</span>
                </span>
                <span className="font-mono text-slate-400">1, 2, 3-р байр</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Тэргүүн, Дэд, Гуравдугаар байр тус бүрт Алтан, Мөнгөн, Хүрэл медаль, өргөмжлөл, мөнгөн шагнал олгоно.
              </p>
            </div>
          </div>

          {/* SPORT 3: Ширээний теннис */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-slate-700 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-5">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-2xl">
                    🏓
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-blue-400">4.3.3</span>
                    <h3 className="text-xl font-bold font-display text-white">Ширээний теннис</h3>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  Компани удирдлагууд
                </span>
              </div>

              {/* Quick specs */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>Оролцогчдын бүрэлдэхүүн (4.3.3)</span>
                  </div>
                  <p className="text-white pl-6 text-sm leading-relaxed font-bold">
                    {sec4.darts.rules[2].text}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <Activity className="w-4 h-4 text-blue-400" />
                    <span>Зохион байгуулалт & Зорилого</span>
                  </div>
                  <p className="text-slate-200 pl-6 text-xs leading-relaxed">
                    Байгууллагын эв нэгдэл хамтын ажиллагааг бэхжүүлэх зорилгын хүрээнд компанийн удирдлагуудын дунд явагдана.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>Тэмцээний нийлбэр дүн (5.6)</span>
                  </div>
                  <p className="text-slate-200 pl-6 text-xs leading-relaxed">
                    Нийлбэр дүнг бага онооны системээр шалгаруулан “ШИЛЖИН ЯВАХ ЦОМ” олгоход хамаарна.
                  </p>
                </div>
              </div>
            </div>

            {/* Awards breakdown */}
            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Шилжин явах цом (5.6):</span>
                </span>
                <span className="font-mono text-slate-400">Удирдлагуудын оноо</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ширээний теннис нь байгууллагын удирдлагуудын оролцоог хангаж, нийлбэр дүнгээр шилжин явах цомын төлөө өрсөлдөнө.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
