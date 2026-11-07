import React, { useState } from 'react';
import { Phone, Building, Check, Copy, ShieldCheck, Mail } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

export const OrganizerFooter: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const org = TOURNAMENT_DATA.organizer;

  const handleCopy = (phone: string, idx: number) => {
    navigator.clipboard.writeText(phone);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <footer id="holboo-barih" className="bg-[#050811] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* OFFICIAL EXECUTIVE APPROVAL BANNER ON FOOTER AS SPECIFIED */}
        <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/20 border border-amber-500/40 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <img
              src={TOURNAMENT_DATA.assets.sayanShintseLogo}
              alt="Саян Шинцэ ХХК"
              className="h-14 sm:h-16 w-auto object-contain rounded-xl border border-amber-500/40 p-1 bg-black/70 shadow-md shrink-0"
              onError={(e) => {
                (e.target as HTMLImageElement).src = TOURNAMENT_DATA.assets.fallbackSayan;
              }}
            />
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Албан ёсны баталгаажуулалт</span>
              </div>
              <h2 className="text-base sm:text-lg lg:text-xl font-bold font-display text-white tracking-wide">
                {TOURNAMENT_DATA.approval}
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                {org.label}: <span className="text-slate-200 font-semibold">{org.company}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6 shrink-0">
            <div className="text-left md:text-right">
              <span className="text-[11px] text-slate-400 font-mono block">Тэмцээний нэрэмжит</span>
              <span className="text-xs font-bold text-white">{TOURNAMENT_DATA.dedicatedCompany}</span>
            </div>
            <img
              src={TOURNAMENT_DATA.assets.khurdLogo}
              alt="ХУРД ГРУПП"
              className="h-10 sm:h-12 w-auto object-contain bg-white rounded-lg p-1.5 shadow shrink-0"
              onError={(e) => {
                (e.target as HTMLImageElement).src = TOURNAMENT_DATA.assets.fallbackKhurd;
              }}
            />
          </div>
        </div>

        {/* Organizer & Direct Contacts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between">
          {/* Tournament Sub-details */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block">
              {org.label}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              {org.company}
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg">
              {TOURNAMENT_DATA.titleKicker} “ХУРД CUP-2026” ТЭМЦЭЭНИЙ УДИРДАМЖ
            </p>

            <div className="text-xs text-slate-400 font-mono pt-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Тэмцээний мэдүүлэг хүлээн авах имэйл: </span>
              <a
                href={`mailto:${TOURNAMENT_DATA.section3.email}`}
                className="text-amber-400 hover:text-amber-300 font-semibold underline"
              >
                {TOURNAMENT_DATA.section3.email}
              </a>
            </div>
          </div>

          {/* Contact Numbers with one-tap copy & click-to-call */}
          <div className="lg:col-span-6 space-y-3 lg:text-right">
            <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block">
              {org.phoneLabel}
            </span>
            <div className="flex flex-wrap lg:justify-end gap-2.5">
              {org.phones.map((phone, idx) => (
                <div
                  key={phone}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 text-sm sm:text-base font-bold text-white hover:text-amber-400 font-mono transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>{phone}</span>
                  </a>
                  <button
                    onClick={() => handleCopy(phone, idx)}
                    aria-label={`${phone} хуулах`}
                    title="Дугаар хуулах"
                    className="p-1 text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedIndex === idx ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 font-mono">
              Удирдамжтай холбоотой асуултаар дээрх утсаар холбогдоно уу.
            </p>
          </div>
        </div>

        {/* Bottom copyright / document notice */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
          <div>
            {TOURNAMENT_DATA.shortTitle} · {TOURNAMENT_DATA.organizerOfficial}
          </div>
          <div>
            2026 он
          </div>
        </div>
      </div>
    </footer>
  );
};
