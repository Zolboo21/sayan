import React, { useState } from 'react';
import { Phone, Building, Check, Copy } from 'lucide-react';
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
    <footer id="holboo-barih" className="bg-[#060911] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between">
          {/* Organizer Info */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block">
                  {org.label}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {org.company}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg">
              {TOURNAMENT_DATA.dedicatedCompany}-ИЙН НЭРЭМЖИТ САГСАН БӨМБӨГИЙН ШИЛЖИН ЯВАХ ЦОМЫН ТӨЛӨӨХ “ХУРД CUP-2026” ТЭМЦЭЭНИЙ УДИРДАМЖ
            </p>

            <div className="text-xs text-amber-400/90 font-medium pt-1">
              {TOURNAMENT_DATA.approval}
            </div>
          </div>

          {/* Contact Numbers */}
          <div className="lg:col-span-6 space-y-4 lg:text-right">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-2">
                {org.phoneLabel}
              </span>
              <div className="flex flex-wrap lg:justify-end gap-3">
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
            </div>

            <div className="text-xs text-slate-500 font-mono pt-3">
              Имэйл: <a href={`mailto:${TOURNAMENT_DATA.section3.email}`} className="text-slate-300 hover:text-amber-400 underline">{TOURNAMENT_DATA.section3.email}</a>
            </div>
          </div>
        </div>

        {/* Bottom subtle copyright / document notice */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
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
