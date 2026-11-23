import { Award, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "Certificate of Academic Distinction",
    detail: "IT Area Coordinator",
    year: "2016"
  },
  {
    title: "Certificate of Recognition",
    detail: "Best in Song Lyrics in Flash Animation, Animation Instructor",
    year: "2016"
  },
  {
    title: "Certificate of Merit",
    detail: "Dean's Lister",
    year: "2015"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-white bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full"></div>
        </div>

        <div className="glass-card p-6 md:p-8 neon-glow mb-8">
          <div className="flex items-start gap-4">
            <GraduationCap className="h-6 w-6 text-neon-cyan mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white">Bachelor of Science in Information Technology</h3>
              <p className="text-neon-cyan font-medium">Binalbagan Catholic College</p>
              <p className="text-gray-400 text-sm">Binalbagan, Negros Occidental, Philippines | 2012-2016</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.title} className="glass-card p-6 neon-glow">
              <Award className="h-6 w-6 text-neon-cyan mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{cert.detail}</p>
              <p className="text-neon-cyan text-sm font-medium">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
