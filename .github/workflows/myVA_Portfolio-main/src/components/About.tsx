const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-white bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full"></div>
        </div>

        <div className="glass-card p-8 md:p-12 neon-glow">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            With 4 years of experience providing administrative support, I excel in document
            organization, record management, and encoding daily sales reports with a high level
            of accuracy. Skilled in Microsoft Excel, Microsoft Word, and Google Workspace, I have
            supported daily office operations by maintaining filing systems, coordinating permit
            processing, and managing bank deposits. I bring strong organizational abilities,
            professionalism, and a commitment to delivering reliable support that improves
            operational efficiency. A dependable, quick learner with strong organizational skills
            committed to delivering quality results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
