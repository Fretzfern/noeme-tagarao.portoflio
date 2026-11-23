import {
  FileText, FolderOpen, Database, Users, Globe, Mail, Calendar,
  Video, Palette, Bot, ListChecks, MessageSquare, Film, Share2, CheckCircle
} from "lucide-react";

const Skills = () => {
  const adminSkills = [
    { name: "Administrative Support", icon: FileText },
    { name: "Document Organization", icon: FolderOpen },
    { name: "Record Management", icon: Database },
    { name: "Sales Report Encoding", icon: Database },
    { name: "Microsoft Office", icon: FileText },
    { name: "Google Workspace", icon: Globe },
    { name: "Customer Service", icon: Users },
    { name: "Attention to Detail", icon: CheckCircle }
  ];

  const toolSkills = [
    { name: "Microsoft Teams", icon: MessageSquare },
    { name: "Zoom & Google Meet", icon: Video },
    { name: "Calendly & Calendar", icon: Calendar },
    { name: "Gmail & Email", icon: Mail },
    { name: "Canva & CapCut", icon: Palette },
    { name: "Asana & Socialbee", icon: ListChecks },
    { name: "ChatGPT, Claude & Copilot", icon: Bot },
    { name: "Zoho, Slack & Opus Clip", icon: Share2 }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-white bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 neon-glow">
            <h3 className="text-2xl font-bold text-neon-cyan mb-6 text-center">
              Administrative Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {adminSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <skill.icon className="h-5 w-5 text-neon-cyan mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 neon-glow">
            <h3 className="text-2xl font-bold text-neon-cyan mb-6 text-center">
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {toolSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <skill.icon className="h-5 w-5 text-neon-cyan mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
