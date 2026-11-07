import React, { useState } from 'react';
import { ShieldAlert, Scale, Target, Trophy, CheckCircle2, AlertTriangle } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

type FilterType = 'all' | 'basketball' | 'darts' | 'ethics';

export const RulesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [testCount, setTestCount] = useState<number>(7);
  const [isTopLeague, setIsTopLeague] = useState<boolean>(false);
  const [devLeagueCount, setDevLeagueCount] = useState<number>(1);
  const [hasSocialInsurance, setHasSocialInsurance] = useState<boolean>(true);

  const sec4 = TOURNAMENT_DATA.section4;

  const isRosterValid = testCount >= 7 && testCount <= 8;
  const isEligible = !isTopLeague && devLeagueCount <= 2 && hasSocialInsurance;

  return (
    <section id="juram" className="py-14 sm:py-20 bg-[#080c17] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-5">
          <div>
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 font-mono">
              {sec4.num}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
              {sec4.title}
            </h2>
          </div>

          {/* Interactive filter control */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Бүгд
            </button>
            <button
              onClick={() => setActiveFilter('basketball')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'basketball'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Сагсан бөмбөг
            </button>
            <button
              onClick={() => setActiveFilter('darts')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'darts'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Дартс & Теннис
            </button>
            <button
              onClick={() => setActiveFilter('ethics')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'ethics'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Сахилга бат & Маргаан
            </button>
          </div>
        </div>

        {/* 4.1 General Requirement Banner */}
        <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-4">
          <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded shrink-0">
            {sec4.general.num}
          </span>
          <p className="text-white text-sm sm:text-base font-semibold leading-relaxed">
            {sec4.general.text}
          </p>
        </div>

        {/* Main Rules Content */}
        <div className="space-y-10">
          {/* 4.2 Basketball Rules */}
          {(activeFilter === 'all' || activeFilter === 'basketball') && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Trophy className="w-4 h-4" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  {sec4.basketball.num} {sec4.basketball.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sec4.basketball.rules.map((rule, idx) => (
                  <div
                    key={`${rule.num}-${idx}`}
                    className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 flex flex-col justify-between gap-3 hover:border-slate-700 transition-colors"
                  >
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold text-amber-400 block">
                        {rule.num}
                      </span>
                      <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                        {rule.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4.3 Darts & Table Tennis */}
          {(activeFilter === 'all' || activeFilter === 'darts') && (
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  {sec4.darts.num} {sec4.darts.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sec4.darts.rules.map((rule) => (
                  <div
                    key={rule.num}
                    className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 flex flex-col justify-between gap-3 hover:border-slate-700 transition-colors"
                  >
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold text-amber-400 block">
                        {rule.num}
                      </span>
                      <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                        {rule.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4.4 Ethics, Disciplinary Actions & Disputes */}
          {(activeFilter === 'all' || activeFilter === 'ethics') && (
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  Ёс зүй, сахилга бат & Маргаан шийдвэрлэх
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 4.4 Disciplinary rule */}
                <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      {sec4.ethicsAndDisputes[0].num}
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase font-mono">
                      Сахилга бат
                    </span>
                  </div>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                    {sec4.ethicsAndDisputes[0].text}
                  </p>
                </div>

                {/* 4.4 Dispute Resolution */}
                <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      {sec4.ethicsAndDisputes[1].num}
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase font-mono">
                      Маргаан шийдвэрлэлт
                    </span>
                  </div>
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                    {sec4.ethicsAndDisputes[1].text}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Eligibility & Rules Checker Card */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-400" />
              <h4 className="text-sm sm:text-base font-bold text-white">
                Тавигдах шаардлагын түргэн шалгалт (4.2.1 – 4.2.8)
              </h4>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Багийн бүрэлдэхүүн шалгах
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {/* Roster Size */}
            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-mono">4.2.1 Бүрэлдэхүүн:</span>
                <span className={`font-mono font-bold ${isRosterValid ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {testCount} хүн
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTestCount(Math.max(5, testCount - 1))}
                  className="w-6 h-6 rounded bg-slate-800 text-white font-bold"
                >
                  -
                </button>
                <div className="flex-1 text-center font-mono text-slate-300">
                  {testCount >= 7 && testCount <= 8 ? '7-8 хүнтэй (Зөв)' : 'Шаардлага хангаагүй'}
                </div>
                <button
                  onClick={() => setTestCount(Math.min(12, testCount + 1))}
                  className="w-6 h-6 rounded bg-slate-800 text-white font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Top League check */}
            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-slate-400 font-mono block">4.2.6 Дээд лигийн тамирчин:</span>
              <button
                onClick={() => setIsTopLeague(!isTopLeague)}
                className={`w-full py-1.5 px-2 rounded font-medium text-center transition-colors ${
                  isTopLeague
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}
              >
                {isTopLeague ? 'Оролцуулахгүй (Зөрчилтэй)' : 'Байхгүй (Зөв)'}
              </button>
            </div>

            {/* M-League check */}
            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-mono">4.2.7 M-хөгжлийн лиг:</span>
                <span className={`font-mono font-bold ${devLeagueCount <= 2 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {devLeagueCount}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDevLeagueCount(Math.max(0, devLeagueCount - 1))}
                  className="w-6 h-6 rounded bg-slate-800 text-white font-bold"
                >
                  -
                </button>
                <div className="flex-1 text-center font-mono text-slate-300">
                  {devLeagueCount <= 2 ? 'Макс 2 (Талбайд 1)' : 'Хэтэрсэн (>2)'}
                </div>
                <button
                  onClick={() => setDevLeagueCount(devLeagueCount + 1)}
                  className="w-6 h-6 rounded bg-slate-800 text-white font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Social insurance check */}
            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-slate-400 font-mono block">4.2.8 Нийгмийн даатгал:</span>
              <button
                onClick={() => setHasSocialInsurance(!hasSocialInsurance)}
                className={`w-full py-1.5 px-2 rounded font-medium text-center transition-colors ${
                  hasSocialInsurance
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                }`}
              >
                {hasSocialInsurance ? '3 сар төлөгдсөн' : 'Төлөгдөөгүй (Хасна)'}
              </button>
            </div>
          </div>

          <div className={`p-3 rounded-lg border flex items-center gap-2 text-xs font-medium ${
            isRosterValid && isEligible
              ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
              : 'bg-rose-950/30 border-rose-500/30 text-rose-300'
          }`}>
            {isRosterValid && isEligible ? (
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            ) : (
              <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
            )}
            <span>
              {isRosterValid && isEligible
                ? 'Тавигдах шаардлага 100% хангагдсан байна.'
                : 'Анхааруулга: Журамд заасан тавигдах шаардлагыг зөрчсөн үзүүлэлт байна.'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
