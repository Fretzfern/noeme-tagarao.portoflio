import { Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-white bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Need reliable administrative support? Send me a message. I'm available full-time
            and flexible across US (EST/PST), UK (GMT), and AU (AEST) time zones.
          </p>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:bsitnoeme.20@gmail.com"
              className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              bsitnoeme.20@gmail.com
            </a>
            <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
            <a
              href="https://www.linkedin.com/in/noeme-tagarao-225b38424"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
