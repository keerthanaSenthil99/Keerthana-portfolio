import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070A11] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content */}
      <main id="main-content">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Journey />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View/Download Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;

