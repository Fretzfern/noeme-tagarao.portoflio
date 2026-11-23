import {
  FileText, FileSpreadsheet, Presentation, FolderOpen, Database, Users, Globe,
  Mail, Calendar, Video, Palette, Bot, ListChecks, MessageSquare, Phone, Film,
  Share2, CheckCircle, Cloud, ClipboardList, LayoutGrid, SpellCheck
} from "lucide-react";

// Items marked "not on resume" are suggestions. Delete any line Noeme has not actually used.

const Skills = () => {
  const adminSkills = [
    { name: "Administrative Support", icon: FileText },
    { name: "Document Organization", icon: FolderOpen },
    { name: "Record Management", icon: Database },
    { name: "Sales Report Encoding", icon: Database },
    { name: "Cash & Bank Deposits", icon: Database },
    { name: "Customer Service", icon: Users },
    { name: "Inventory Monitoring", icon: ClipboardList },
    { name: "Attention to Detail", icon: CheckCircle }
  ];

  const officeTools = [
    { name: "Microsoft Word", icon: FileText },
    { name: "Microsoft Excel", icon: FileSpreadsheet },
    { name: "Microsoft PowerPoint", icon: Presentation },
    { name: "Google Docs & Sheets", icon: Globe },
    { name: "Google Slides & Drive", icon: Cloud },
    { name: "Google Forms", icon: ClipboardList },   // not on resume
    { name: "Gmail & Outlook", icon: Mail },          // Outlook not on resume
    { name: "Dropbox & PDF Tools", icon: FolderOpen } // not on resume
  ];

  const communicationTools = [
    { name: "Microsoft Teams", icon: MessageSquare },
    { name: "Zoom", icon: Video },
    { name: "Google Meet", icon: Video },
    { name: "Slack", icon: MessageSquare },
    { name: "Viber", icon: Phone },
    { name: "Calendly", icon: Calendar },
    { name: "Google Calendar", icon: Calendar },
    { name: "Loom", icon: Video }                     // not on resume
  ];

  const projectDesignAiTools = [
    { name: "Asana", icon: ListChecks },
    { name: "Trello", icon: LayoutGrid },             // not on resume
    { name: "Notion", icon: LayoutGrid },             // not on resume
    { name: "Socialbee", icon: Share2 },
    { name: "Canva", icon: Palette },
    { name: "CapCut & Opus Clip", icon: Film },
    { name: "ChatGPT, Claude & Copilot", icon: Bot },
    { name: "Grammarly", icon: SpellCheck }           // not on resume
  ];

  const groups = [
    { title: "Administrative Skills", items: adminSkills },
    { title: "Office & Productivity", items: officeTools },
    { title: "Communication & Meetings", items: communicationTools },
    { title: "Projects, Design & AI", items: projectDesignAiTools }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-white bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {groups.map((group) => (
            <div key={group.title} className="glass-card p-8 neon-glow">
              <h3 className="text-2xl font-bold text-neon-cyan mb-6 text-center">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {group.items.map((skill) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
