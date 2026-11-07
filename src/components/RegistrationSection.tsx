import React, { useState } from 'react';
import { Mail, Landmark, Copy, Check, FileCheck, AlertCircle, Calculator } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';
import { calculateTotalFee, formatMNT } from '../utils/tournamentRules';

export const RegistrationSection: React.FC = () => {
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [additionalTeams, setAdditionalTeams] = useState<number>(0);

  const bank = TOURNAMENT_DATA.section3.bank;
  const email = TOURNAMENT_DATA.section3.email;
  const totalFee = calculateTotalFee(additionalTeams);

  const copyToClipboard = (text: string, setCopiedState: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  };

  return (
    <section id="burtgel" className="py-14 sm:py-20 bg-[#0a0f1d] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Title */}
        <div className="border-b border-slate-800 pb-5">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 font-mono">
            {TOURNAMENT_DATA.section3.num}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
            {TOURNAMENT_DATA.section3.title}
          </h2>
        </div>

        {/* 2-Column Split: Registration Requirements & Bank Account / Fee Calculation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (col-span-7): 3.1 & Required Documents (3.1.1, 3.1.2, 3.1.3) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 3.1 Main info and Email Submission */}
            <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-400/10">
                  {TOURNAMENT_DATA.section3.items[0].num}
                </span>
                <button
                  onClick={() => copyToClipboard(email, setCopiedEmail)}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded transition-colors border border-slate-700/60"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copiedEmail ? 'Имэйл хуулсан' : 'Имэйл хуулах'}</span>
                </button>
              </div>

              <p className="text-white text-base leading-relaxed font-medium">
                {TOURNAMENT_DATA.section3.items[0].text}
              </p>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent('ХУРД CUP-2026 Тэмцээний мэдүүлэг')}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-mono text-sm underline underline-offset-4">{email}</span>
                </a>
              </div>
            </div>

            {/* Checklist of Sub-items 3.1.1, 3.1.2, 3.1.3 */}
            <div className="space-y-3">
              {TOURNAMENT_DATA.section3.items[0].subItems?.map((sub) => (
                <div
                  key={sub.num}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      {sub.num}
                    </span>
                    <p className="text-slate-200 text-sm leading-relaxed">
                      {sub.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 3.3 Team participation quota */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3.5">
              <span className="text-xs font-mono text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-400/10 shrink-0 mt-0.5">
                {TOURNAMENT_DATA.section3.items[2].num}
              </span>
              <p className="text-slate-200 text-sm leading-relaxed font-medium">
                {TOURNAMENT_DATA.section3.items[2].text}
              </p>
            </div>
          </div>

          {/* Right Column (col-span-5): 3.2 Bank Fee & Account & Interactive Calculator */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-amber-400 font-semibold">
                      {TOURNAMENT_DATA.section3.items[1].num}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      Байгууллагын бооцооны хураамж
                    </h3>
                  </div>
                </div>
              </div>

              {/* Exact text of 3.2 */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {TOURNAMENT_DATA.section3.items[1].text}
              </p>

              {/* Bank Account Details Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3 font-mono">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Банкны нэр:</span>
                  <span className="text-white font-semibold">{bank.name}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Данс эзэмшигч:</span>
                  <span className="text-white font-semibold">{bank.holder}</span>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Дансны дугаар:</span>
                    <span className="text-amber-400 font-bold text-base sm:text-lg tracking-wider">
                      {bank.account}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bank.account, setCopiedAccount)}
                    className="p-2 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 border border-amber-400/30 transition-colors flex items-center gap-1.5 text-xs font-sans font-medium"
                    aria-label="Дансны дугаар хуулах"
                  >
                    {copiedAccount ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span className="hidden sm:inline">{copiedAccount ? 'Хуулсан' : 'Хуулах'}</span>
                  </button>
                </div>

                <div className="p-2.5 rounded bg-amber-500/10 border border-amber-500/20 flex items-start gap-2 text-xs font-sans text-amber-200">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{bank.purpose}</span>
                </div>
              </div>

              {/* Interactive Fee Breakdown strictly per 3.2 and 3.3 */}
              <div className="pt-2 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calculator className="w-3.5 h-3.5 text-amber-400" />
                    <span>Бооцооны хураамж тооцоолуур</span>
                  </span>
                  <span className="font-mono text-slate-300">3.2 & 3.3</span>
                </div>

                <div className="flex items-center justify-between gap-3 text-xs bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                  <div>
                    <span className="text-slate-300 block font-medium">Нэмэлт багийн тоо:</span>
                    <span className="text-slate-500 text-[11px]">(Нэмэлт баг тутамд 500,000 төгрөг)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setAdditionalTeams(Math.max(0, additionalTeams - 1))}
                      className="w-7 h-7 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold flex items-center justify-center border border-slate-700"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-mono font-bold text-white text-sm">
                      {additionalTeams}
                    </span>
                    <button
                      onClick={() => setAdditionalTeams(additionalTeams + 1)}
                      className="w-7 h-7 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold flex items-center justify-center border border-slate-700"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/30 font-mono">
                  <span className="text-xs text-amber-200 font-sans font-medium">Нийт шилжүүлэх бооцоо:</span>
                  <span className="text-base sm:text-lg font-bold text-amber-400">
                    {formatMNT(totalFee)} ₮
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
