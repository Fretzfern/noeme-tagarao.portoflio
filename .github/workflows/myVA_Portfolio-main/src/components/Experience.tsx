import { Briefcase } from "lucide-react";

const jobs = [
  {
    title: "Secretary/Admin Assistant",
    company: "JGMK Gasoline Station/TOTAL",
    period: "Oct 2022 - May 2026",
    points: [
      "Managed administrative tasks, including filing, document organization, and photocopying, to ensure efficient office operations.",
      "Monitored and maintained office supplies, ensuring timely replenishment and uninterrupted workflow.",
      "Prepared and encoded daily sales reports with accuracy and attention to detail.",
      "Processed daily cash and cheque deposits by depositing funds into designated company bank accounts."
    ]
  },
  {
    title: "Customer Associate",
    company: "LBC Express",
    period: "July 2019 - Feb 2020",
    points: [
      "Processed and encoded customer transactions, including domestic and international cargo shipments, document deliveries, bill payments, and money remittance services while ensuring accuracy and excellent customer service.",
      "Managed cash transactions, processed bill payments, performed daily cash reconciliation, and prepared accurate end-of-day sales reports.",
      "Responded to customer inquiries, resolved service concerns, and provided accurate information on shipping rates, delivery timelines, and packaging requirements to ensure a positive customer experience."
    ]
  },
  {
    title: "Sales Assistant/Marketing Staff",
    company: "Puregold Priceclub Inc.",
    period: "Jun 2017 - Apr 2019",
    points: [
      "Assisted customers by answering inquiries, promoting products, and delivering good customer service.",
      "Monitored inventory levels and reported fast-moving and out-of-stock items to support stock availability and sales operations.",
      "Coordinated promotional activities by monitoring the online portal, preparing promotional guidelines, and distributing materials to ensure timely campaign execution."
    ]
  },
  {
    title: "Online ESL Teacher",
    company: "51 Talk",
    period: "Jan 2021 - July 2026",
    points: [
      "Conducted live virtual English lessons for Chinese students."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-white bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {jobs.map((job) => (
            <div key={job.title + job.company} className="glass-card p-6 md:p-8 neon-glow">
              <div className="flex items-start gap-4 mb-4">
                <Briefcase className="h-6 w-6 text-neon-cyan mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <p className="text-neon-cyan font-medium">{job.company}</p>
                  <p className="text-gray-400 text-sm">{job.period}</p>
                </div>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
