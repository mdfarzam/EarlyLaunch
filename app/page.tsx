import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AudienceSection } from './components/AudienceSection';
import { WaitlistSection } from './components/WaitlistSection';
import { ToolsSection } from './components/ToolsSection';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full bg-[#fafbfb]">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AudienceSection />
          <WaitlistSection />
          <ToolsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
