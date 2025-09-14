// import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AudienceSection } from './components/AudienceSection';
import { WaitlistSection } from './components/WaitlistSection';
import { ToolsSection } from './components/ToolsSection';
import { Footer } from './components/Footer';
import AnnoucementBar from './components/AnnoucementBar';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full bg-neutral-50">
        <div className="flex flex-col h-screen ">
          <AnnoucementBar/>
          {/* <Header /> */}
          <Navbar/>
          <HeroSection />
        </div>
        <main className="flex-grow">
          <AudienceSection />
          <WaitlistSection />
          <ToolsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
