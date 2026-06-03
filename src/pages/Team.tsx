import { motion } from 'motion/react';
import { Mail, Linkedin, GraduationCap, Globe, Github } from 'lucide-react';

interface MemberCardProps {
  member: any;
  index: number;
  key?: string | number;
}

const MemberCard = ({ member, index }: MemberCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="minimal-card flex flex-col"
  >
    <div className="aspect-[4/5] bg-slate-50 relative overflow-hidden mb-6">
       {member.image ? (
         <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
       ) : (
         <div className="w-full h-full flex items-center justify-center text-slate-200">
           <GraduationCap size={64} strokeWidth={1} />
         </div>
       )}
    </div>
    <div className="flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-1">
        <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-mono">{member.role}</span>
        <div className="flex gap-2">
          {member.email && (
            <a href={`mailto:${member.email}`} className="text-slate-300 hover:text-primary transition-colors">
              <Mail size={12} />
            </a>
          )}
          {member.links?.linkedin && (
            <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary transition-colors">
              <Linkedin size={12} />
            </a>
          )}
          {member.links?.orcid && (
            <a href={member.links.orcid} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary transition-colors">
              <Globe size={12} />
            </a>
          )}
          {member.links?.researchgate && (
            <a href={member.links.researchgate} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary transition-colors" title="ResearchGate">
              <GraduationCap size={12} />
            </a>
          )}
          {member.links?.scholar && (
            <a href={member.links.scholar} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary transition-colors" title="Google Scholar">
              <GraduationCap size={12} />
            </a>
          )}
          {member.links?.github && (
            <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary transition-colors">
              <Github size={12} />
            </a>
          )}
        </div>
      </div>
      <h3 className={`text-lg font-bold text-slate-900 ${member.affiliation ? 'mb-0.5' : 'mb-2'}`}>{member.name}</h3>
      {member.affiliation && (
        <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">{member.affiliation}</p>
      )}
      <p className="text-xs text-slate-500 mb-4 leading-relaxed line-clamp-4">{member.bio}</p>
      
      <div className="mt-auto pt-4 border-t border-slate-50">
         <div className="flex flex-wrap gap-2">
            {member.interests.map((interest: string) => (
              <span key={interest} className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">
                /{interest}
              </span>
            ))}
         </div>
      </div>
    </div>
  </motion.div>
);

export default function Team() {
  const team = {
    pi: {
      name: "Associate Prof. Sheng Wang",
      role: "Principal Investigator",
      image: "https://i.postimg.cc/rphmp0dq/Sw-ang.jpg",
      bio: "I am an Earth system scientist working on sustainable agriculture. My research focuses on understanding the impact of climate change and anthropogenic activities on agroecosystem carbon-nutrient-water dynamics. My research develops cross-scale sensing and modeling technology with hybrid machine learning to quantify agroecosystem variables across spatial and temporal scales. I am enthusiastic about providing data to solve real-world problems for food security and environmental sustainability.",
      interests: ["Sustainable Agriculture", "Remote Sensing", "Ecohydrology", "Ecosystem Modeling", "Machine Learning"],
      email: "swan@agro.au.dk"
    },
    members: [
      {
        name: "Dr. Xiaoyu Cen",
        role: "Postdoctoral Researcher",
        email: "xcen@agro.au.dk",
        image: "https://i.postimg.cc/Y9vYZS3F/Weixin-Image-20260515131745-23-145-Xiaoyu-Cen.jpg",
        bio: "Works on the nitrogen cycle, greenhouse gas fluxes, and plant phenology in terrestrial ecosystems, using data-driven and process-based ecosystem modeling at regional to global scales.",
        interests: ["Climate change", "Nitrogen cycle", "Greenhouse gas", "Phenology", "Modeling"],
        links: {
          orcid: "https://orcid.org/0000-0002-4467-9962",
          researchgate: "https://www.researchgate.net/profile/Xiaoyu-Cen"
        }
      },
      {
        name: "Christophe Frem",
        role: "PhD Researcher",
        email: "chris.frem@agro.au.dk",
        image: "https://i.postimg.cc/x1fb5bbK/chris.jpg",
        bio: "Focused on remote sensing and machine learning applications for smart agriculture and monitoring crop stress.",
        interests: ["Remote sensing", "Machine learning", "GIS", "Smart agriculture", "Crop stress"],
        links: {
          linkedin: "https://gr.linkedin.com/in/christophefrem",
          orcid: "https://orcid.org/0009-0001-3312-4873",
          researchgate: "https://www.researchgate.net/profile/Christophe-Frem-2"
        }
      },
      {
        name: "Sijia Feng",
        role: "PhD Researcher",
        email: "sijia.feng@agro.au.dk",
        image: "https://i.postimg.cc/CK3xML0V/myself-skye-feng.jpg",
        bio: "I work on remote sensing and process-guided modeling of soil moisture dynamics, with a focus on agricultural applications, radiative transfer modeling, and links to greenhouse gas emissions.",
        interests: ["Remote sensing", "Microwave", "Radiative transfer model", "Soil moisture", "Process-guided machine learning"],
        links: {
          linkedin: "https://www.linkedin.com/in/sijia-feng-813562318/",
          orcid: "https://orcid.org/0000-0002-6519-389X",
          github: "https://github.com/SkyeFengg"
        }
      },
      {
        name: "Dr. Michal Antala",
        role: "Postdoctoral Researcher",
        email: "mian@agro.au.dk",
        image: "https://i.postimg.cc/wBHwCDyv/Michal-Antala.webp",
        bio: "Focuses on remote sensing, hyperspectral imaging, and modeling vegetation traits and crop performance.",
        interests: ["Hyperspectral", "Remote Sensing", "Vegetation Traits", "Field Spectroscopy"],
        links: {
          researchgate: "https://www.researchgate.net/profile/Michal-Antala"
        }
      },
      {
        name: "Dr. Daijun Liu",
        role: "Academic Employee",
        image: "https://i.postimg.cc/Gt31Rj1L/Sl064d-V7.jpg",
        bio: "Specializes in assessing the impact of global climate and land-use change, species invasion, biodiversity, and functional traits on forest dynamics and tree mortality.",
        interests: ["Climate changes", "Land-use change", "Species invasion", "Biodiversity", "Functional traits", "Tree mortality"],
        links: {
          scholar: "https://scholar.google.com/citations?user=MqX3SlYAAAAJ&hl=en"
        }
      }
    ],
    visiting: [
      {
        name: "Elena Samper-Pérez",
        role: "Visiting Researcher",
        affiliation: "Technical University of Cartagena (UPCT)",
        email: "elena.samper@upct.es",
        image: "https://i.postimg.cc/50bDSZqC/Foto-elena-Elena-Samper-Perez.jpg",
        bio: "Remote sensing and soil science, specializing in drone-based multispectral imagery, machine learning for soil organic carbon prediction, and soil carbon assessment in Mediterranean agricultural systems.",
        interests: ["Remote sensing", "Soil organic carbon", "Carbon emissions", "Machine learning", "Mediterranean agriculture"],
        links: {
          linkedin: "https://www.linkedin.com/in/elena-samper-pérez-25668015b/"
        }
      }
    ]
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 space-y-16 md:space-y-24 mt-10 md:mt-0">
      {/* Header */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-6 text-center lg:text-left">
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl lg:mx-0 mx-auto leading-relaxed">
            Our team brings together expertise in remote sensing, computational approaches, and Earth system science to address complex challenges in agricultural and Earth system sustainability.
          </p>
        </div>
      </section>

      {/* PI Highlight */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-slate-50 rounded-3xl p-6 md:p-8 lg:p-16 border border-slate-100 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center text-center lg:text-left">
          <div className="w-64 lg:w-80 aspect-[4/5] bg-slate-100 relative overflow-hidden flex-shrink-0">
             <img src={team.pi.image} alt={team.pi.name} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <div>
              <span className="section-label mb-4">Principal Investigator</span>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800">{team.pi.name}</h3>
              <p className="text-lg text-slate-500 font-medium font-mono uppercase tracking-widest text-xs">Associate Professor</p>
            </div>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg max-w-2xl italic font-light">
              "I am an Earth system scientist working on sustainable agriculture. My research focuses on understanding the impact of climate change and anthropogenic activities on agroecosystem carbon-nutrient-water dynamics."
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4 text-[10px] font-bold uppercase tracking-widest font-mono">
               <a href={`mailto:${team.pi.email}`} className="flex items-center gap-2 text-primary hover:underline">
                 <Mail size={14} /> Contact
               </a>
               <a href="https://scholar.google.com/citations?user=BxTGuO8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                 <GraduationCap size={14} /> Google Scholar
               </a>
               <a href="https://orcid.org/0000-0003-3385-3109" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                 <Globe size={14} /> ORCID
               </a>
            </div>

            <div className="pt-8 border-t border-slate-100 mt-2">
              <span className="section-label mb-4">Areas of Expertise</span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-3">
                {team.pi.interests.map((interest: string) => (
                  <span key={interest} className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                    /{interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Team Members */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-12 md:gap-y-20">
          {[...team.members, ...team.visiting].map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </section>

      {/* Alumni / Former Students */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pt-16 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-800">Lab Alumni</h3>
            </div>
            <div className="flex flex-col gap-6 max-w-2xl w-full">
              <div className="border-l-2 border-slate-200 pl-4 space-y-1">
                 <div className="flex items-center gap-2">
                   <h4 className="font-bold text-slate-800">Abdallah Abdelmajeed</h4>
                   <a href="mailto:abdallah.abdelmajeed@up.poznan.pl" className="text-slate-400 hover:text-primary transition-colors">
                     <Mail size={12} />
                   </a>
                 </div>
                 <p className="text-xs text-slate-500 font-light leading-relaxed">
                   PhD student at Poznan University of Technology — Exchange student (1 Oct 2025 – 31 Mar 2026) at Aarhus University
                 </p>
              </div>
            </div>
         </div>
      </section>
    </div>
  );
}
