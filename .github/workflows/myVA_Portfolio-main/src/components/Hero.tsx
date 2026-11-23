import { Button } from "@/components/ui/button";
import { Linkedin, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10"></div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent">
            Noeme Tagarao
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Virtual Assistant
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Administrative support you can rely on: organized records, accurate daily reports,
            and smooth office operations. Based in the Philippines and available full-time
            across US, UK, and Australian time zones.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="/Noeme_Tagarao_Resume.pdf"
            download
            className="w-48"
          >
            <Button
              size="lg"
              className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-8 py-3 shadow-lg shadow-cyan-400/25 transition-all duration-300 w-full"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </a>

          <Button
            size="lg"
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 transition-all duration-300 w-48"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Hire Me
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:bsitnoeme.20@gmail.com"
            aria-label="Email Noeme"
            className="p-3 glass-card hover:bg-white/10 transition-all duration-300 neon-glow"
          >
            <Mail className="h-6 w-6 text-neon-cyan" />
          </a>

          <a
            href="https://www.linkedin.com/in/noeme-tagarao-225b38424"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Noeme on LinkedIn"
            className="p-3 glass-card hover:bg-white/10 transition-all duration-300 neon-glow"
          >
            <Linkedin className="h-6 w-6 text-neon-cyan" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
