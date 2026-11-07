import React from 'react';
import { X, Printer } from 'lucide-react';
import { TOURNAMENT_DATA } from '../data/tournamentData';

interface PrintDocumentViewProps {
  onClose: () => void;
}

export const PrintDocumentView: React.FC<PrintDocumentViewProps> = ({ onClose }) => {
  const triggerPrint = () => {
    window.print();
  };

  const sec2 = TOURNAMENT_DATA.section2;
  const sec3 = TOURNAMENT_DATA.section3;
  const sec4 = TOURNAMENT_DATA.section4;
  const sec5 = TOURNAMENT_DATA.section5;
  const org = TOURNAMENT_DATA.organizer;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 overflow-y-auto flex justify-center p-3 sm:p-6 backdrop-blur-sm">
      <div className="bg-white text-slate-900 w-full max-w-4xl min-h-[90vh] rounded-xl shadow-2xl p-6 sm:p-12 relative my-auto">
        {/* Floating action bar for non-print view */}
        <div className="no-print sticky top-2 z-10 flex items-center justify-end gap-3 mb-6 bg-white/95 p-2 rounded-lg border border-slate-200 shadow-sm">
          <button
            onClick={triggerPrint}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Хэвлэх (Print)</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Хаах"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Document Body */}
        <div className="space-y-8 font-sans text-sm sm:text-base leading-relaxed text-slate-900">
          {/* Header Approval */}
          <div className="flex justify-end text-right font-serif">
            <div className="max-w-xs border-b border-slate-400 pb-2">
              <p className="font-bold text-xs uppercase tracking-wider">
                {TOURNAMENT_DATA.approval}
              </p>
            </div>
          </div>

          {/* Title */}
          <div className="text-center space-y-2 py-4 border-b border-slate-200">
            <h1 className="text-lg sm:text-xl font-bold uppercase tracking-wide">
              {TOURNAMENT_DATA.tournamentTitle}
            </h1>
            <p className="text-xs uppercase font-medium text-slate-600">
              {TOURNAMENT_DATA.titleKicker}
            </p>
          </div>

          {/* 1. Зорилого */}
          <div className="space-y-2">
            <h2 className="font-bold text-base">
              {TOURNAMENT_DATA.section1.num}. {TOURNAMENT_DATA.section1.title}
            </h2>
            <p className="text-slate-700 text-justify">
              {TOURNAMENT_DATA.section1.content}
            </p>
          </div>

          {/* 2. Хугацаа */}
          <div className="space-y-2">
            <h2 className="font-bold text-base">
              {sec2.num}. {sec2.title}
            </h2>
            <p className="text-slate-700">
              {sec2.items[0].num} {sec2.items[0].text}
            </p>
            <p className="text-slate-700">
              {sec2.items[1].num} {sec2.items[1].text}
            </p>
          </div>

          {/* 3. Бүртгэл & Техникийн зөвөлгөөн */}
          <div className="space-y-2.5">
            <h2 className="font-bold text-base">
              {sec3.num}. {sec3.title}
            </h2>
            <p className="text-slate-700">
              {sec3.items[0].num} {sec3.items[0].text}
            </p>
            <div className="pl-6 space-y-1 text-slate-700">
              {sec3.items[0].subItems?.map((sub) => (
                <p key={sub.num}>
                  {sub.num} {sub.text}
                </p>
              ))}
            </div>
            <p className="text-slate-700 font-medium">
              {sec3.items[1].num} {sec3.items[1].text}
            </p>
            <p className="text-slate-700 pl-6 text-xs font-mono">
              {sec3.bank.purpose}
            </p>
            <p className="text-slate-700">
              {sec3.items[2].num} {sec3.items[2].text}
            </p>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded my-2 text-xs font-mono font-bold">
              {sec3.technicalMeeting}
            </div>
          </div>

          {/* 4. Журам */}
          <div className="space-y-3">
            <h2 className="font-bold text-base">
              {sec4.num}. {sec4.title}
            </h2>
            <p className="text-slate-700">
              {sec4.general.num} {sec4.general.text}
            </p>

            {/* Basketball */}
            <div className="space-y-1.5">
              <h3 className="font-bold text-sm">
                {sec4.basketball.num} {sec4.basketball.title}
              </h3>
              <div className="pl-4 space-y-1 text-slate-700 text-xs sm:text-sm">
                {sec4.basketball.rules.map((r, i) => (
                  <p key={`${r.num}-${i}`}>
                    {r.num} {r.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Darts */}
            <div className="space-y-1.5 pt-2">
              <h3 className="font-bold text-sm">
                {sec4.darts.num} {sec4.darts.title}
              </h3>
              <div className="pl-4 space-y-1 text-slate-700 text-xs sm:text-sm">
                {sec4.darts.rules.map((r) => (
                  <p key={r.num}>
                    {r.num} {r.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Ethics & Disputes */}
            <div className="space-y-1 pt-2 text-slate-700 text-xs sm:text-sm">
              <p>
                {sec4.ethicsAndDisputes[0].num} {sec4.ethicsAndDisputes[0].text}
              </p>
              <p>
                {sec4.ethicsAndDisputes[1].num} {sec4.ethicsAndDisputes[1].text}
              </p>
            </div>
          </div>

          {/* 5. Шагналын сан */}
          <div className="space-y-3">
            <h2 className="font-bold text-base">
              {sec5.num}. {sec5.title}
            </h2>

            {/* 5.1 Basketball */}
            <div className="space-y-1 text-xs sm:text-sm">
              <p className="font-bold">{sec5.basketball.num} {sec5.basketball.title}</p>
              <div className="pl-4 space-y-0.5">
                {sec5.basketball.prizes.map((p) => (
                  <div key={p.place} className="flex justify-between max-w-md">
                    <span className="font-medium">{p.place}</span>
                    <span>{p.award}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5.3 MVP */}
            <div className="text-xs sm:text-sm pt-1">
              <p className="font-bold">{sec5.mvp.num} {sec5.mvp.title}</p>
              <div className="pl-4 flex justify-between max-w-md">
                <span>{sec5.mvp.details}</span>
                <span>{sec5.mvp.award}</span>
              </div>
            </div>

            {/* 5.4 Darts */}
            <div className="space-y-1 text-xs sm:text-sm pt-1">
              <p className="font-bold">{sec5.darts.num} {sec5.darts.title}</p>
              <div className="pl-4 space-y-0.5">
                {sec5.darts.prizes.map((p) => (
                  <div key={p.place} className="flex justify-between max-w-md">
                    <span className="font-medium">{p.place}</span>
                    <span>{p.award}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5.6 Traveling Cup */}
            <p className="text-xs sm:text-sm font-semibold pt-1 text-slate-900">
              {sec5.travelingCup.num} {sec5.travelingCup.text}
            </p>
          </div>

          {/* Organizer Sign-off */}
          <div className="pt-8 border-t border-slate-300 flex flex-col sm:flex-row justify-between gap-4 text-xs font-mono">
            <div>
              <p className="font-bold text-sm font-sans">{org.label}: {org.company}</p>
              <p className="mt-1">{org.phoneLabel}: {org.phones.join(', ')}</p>
            </div>
            <div className="sm:text-right">
              <p className="text-slate-600">2026 он</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
