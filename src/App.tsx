/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ExecutiveHeader } from './components/ExecutiveHeader';
import { HeroSection } from './components/HeroSection';
import { SportsShowcase } from './components/SportsShowcase';
import { ScheduleSection } from './components/ScheduleSection';
import { RegistrationSection } from './components/RegistrationSection';
import { RulesSection } from './components/RulesSection';
import { PrizeSection } from './components/PrizeSection';
import { OrganizerFooter } from './components/OrganizerFooter';
import { PrintDocumentView } from './components/PrintDocumentView';

export default function App() {
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['zorilogo', 'sports', 'hugatsaa', 'burtgel', 'juram', 'shagnal'];
      const scrollY = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-900 relative">
      {/* Subtle ambient lighting - clean corporate executive atmosphere, no 3D models */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* Top Header conforming to Top Bar Contract */}
      <div className="relative z-10">
        <ExecutiveHeader
          onPrint={() => setShowPrintModal(true)}
          activeSection={activeSection}
        />
      </div>

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section & Section 1: Зорилого */}
        <HeroSection
          onExplore={() => {
            const el = document.getElementById('sports');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* EQUAL 3 SPORTS SHOWCASE: Сагсан бөмбөг, Дартс, Ширээний теннис */}
        <SportsShowcase />

        {/* Section 2: Тэмцээн зохион байгуулах хугацаа & Техникийн зөвөлгөөн */}
        <ScheduleSection />

        {/* Section 3: Тэмцээний бүртгэл, техникийн зөвөлгөөн */}
        <RegistrationSection />

        {/* Section 4: Журам, тавигдах шаардлага */}
        <RulesSection />

        {/* Section 5: Шагналын сан & Шилжин явах цом */}
        <PrizeSection />
      </main>

      {/* Official Organizer & Contact Footer */}
      <div className="relative z-10">
        <OrganizerFooter />
      </div>

      {/* Print Document Modal */}
      {showPrintModal && (
        <PrintDocumentView onClose={() => setShowPrintModal(false)} />
      )}
    </div>
  );
}
