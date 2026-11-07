/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ExecutiveHeader } from './components/ExecutiveHeader';
import { HeroSection } from './components/HeroSection';
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
      const sections = ['zorilogo', 'hugatsaa', 'burtgel', 'juram', 'shagnal'];
      const scrollY = window.scrollY + 200;

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
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-900">
      {/* Top Header conforming to Top Bar Contract */}
      <ExecutiveHeader
        onPrint={() => setShowPrintModal(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section & Section 1: Зорилого */}
        <HeroSection onExplore={() => {
          const el = document.getElementById('hugatsaa');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

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
      <OrganizerFooter />

      {/* Print Document Modal */}
      {showPrintModal && (
        <PrintDocumentView onClose={() => setShowPrintModal(false)} />
      )}
    </div>
  );
}
