import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe
} from 'lucide-react';

export default function Research() {
  const [isProductExpanded, setIsProductExpanded] = useState<boolean>(true);

  interface Project {
    title: string;
    description: string;
    duration: string;
    status: string;
    tags: string[];
    partners?: string;
    product?: {
      title: string;
      type: string;
      status: string;
      description: string;
      url: string;
      features: string[];
    };
  }

  const projects: Project[] = [
    {
      title: "Process-guided machine learning with multi-source satellite data to quantify global soil moisture and N2O emissions",
      description: "This project aims to develop process-guided machine learning approaches by integrating multi-source remote sensing and radiative transfer model knowledge to quantify soil moisture dynamics and agricultural N₂O emissions. The research focuses on improving physically consistent soil moisture estimation while investigating how soil water conditions regulate the spatial and temporal variability of N₂O emissions. The research provides methodological support for remote sensing-based assessment of agricultural water dynamics and greenhouse gas emissions.",
      duration: "2024 — 2027",
      status: "Ongoing",
      tags: ["PhD-Project", "Process-Guided-ML", "Soil-Moisture", "Emissions"],
      product: {
        title: "Global Soil Moisture Map",
        type: "Interactive Earth Engine App",
        status: "Active",
        description: "This interactive application provides global-scale soil moisture estimation by integrating multi-source remote sensing observations and radiative transfer model knowledge. Developed as part of our process-guided machine learning research, the tool improves physically consistent soil moisture estimations to facilitate regional and global-scale agricultural water assessment.",
        url: "https://rsmaps-496410.projects.earthengine.app/view/soilmoisturemap",
        features: ["Process-Guided Machine Learning", "Radiative Transfer Model Integration", "Multi-Source Satellite Fusion", "Global-Scale Soil Moisture Indicators"]
      }
    },
    {
      title: "Cross-scale sensing of crop nitrogen and disease conditions from integrated airborne–satellite Earth observation",
      description: "This project develops a cross-scale remote sensing framework to quantify crop nitrogen content and detect crop diseases across major Danish cropping systems, including winter wheat, maize, potato, and cover crops. The research integrates ground measurements, UAV multispectral imagery, PlanetScope, Sentinel-2 and Landsat 8/9 satellite time series, weather data, and soil information to build robust explainable machine learning models for canopy N quantification and disease detection.",
      duration: "2025 — 2028",
      status: "Ongoing",
      tags: ["PhD-Project", "Earth-Observation", "Crop-Nitrogen", "Disease-Detection"]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-32 pb-24 flex flex-col gap-12 md:gap-16 mt-10 md:mt-0"
    >
      {/* Page Header */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Our activities span core scientific inquiries, collaborative funded initiatives, and interactive data products designed for decision support.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-12">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="minimal-card flex flex-col group border border-slate-100 p-6 md:p-8 rounded-2xl bg-white hover:border-slate-200 transition-all duration-300 shadow-sm hover:shadow-md w-full"
              >
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-50">
                    <div className="flex flex-wrap gap-2.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-primary font-mono bg-slate-50 px-2.5 py-1 rounded-md">
                          /{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light max-w-5xl">
                    {project.description}
                  </p>
                  
                  {project.partners && (
                    <div className="grid grid-cols-1 gap-6 py-5 border-y border-slate-50">
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono block">Partners</span>
                        <div className="text-sm font-bold text-slate-700 font-mono">{project.partners}</div>
                      </div>
                    </div>
                  )}

                  {project.product && (
                    <div className="mt-8 flex flex-col">
                      <div className="flex items-center">
                        <button
                          onClick={() => setIsProductExpanded(!isProductExpanded)}
                          className="flex items-center gap-2.5 px-6 py-3.5 text-[10px] font-mono font-bold uppercase tracking-widest text-white bg-slate-900 hover:bg-primary rounded-xl transition-all duration-300 shadow-sm"
                        >
                          <Globe size={13} className={`transition-transform duration-500 ${isProductExpanded ? 'rotate-180 text-primary-light animate-pulse' : 'text-slate-400'}`} />
                          {isProductExpanded ? "Hide Interactive Product" : "View Interactive Product"}
                        </button>
                      </div>

                      <AnimatePresence initial={false}>
                        {isProductExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden border border-slate-100 rounded-2xl bg-slate-50/50"
                          >
                            <div className="p-6 md:p-8 lg:p-10 border-b border-slate-100">
                              <div className="space-y-4 max-w-5xl">
                                <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 bg-white flex items-center justify-center rounded-xl text-primary border border-slate-200 shadow-sm flex-shrink-0">
                                    <Globe size={20} strokeWidth={1.5} />
                                  </div>
                                  <div>
                                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">{project.product.title}</h4>
                                    <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 mt-0.5">
                                      {project.product.type}
                                    </div>
                                  </div>
                                </div>
                                
                                <p className="text-slate-600 leading-relaxed font-light text-sm">
                                  {project.product.description}
                                </p>

                                <div className="flex flex-wrap gap-x-3 gap-y-1.5 pt-2">
                                  {project.product.features.map(feature => (
                                    <span key={feature} className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono bg-white border border-slate-100 px-2.5 py-1 rounded">
                                      /{feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Embedded GIS Interactive Workstation (Earth Engine Iframe) */}
                            <div className="p-4 bg-slate-100/30">
                              <div className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-inner relative">
                                {/* Interactive Info Ribbon */}
                                <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                                  <span className="flex items-center gap-1.5 font-bold text-slate-700">
                                    <Globe size={12} className="text-primary animate-pulse" />
                                    Interactive Earth Engine GIS View
                                  </span>
                                  <span className="italic hidden sm:inline">Use mouse or touch controls to pan and zoom the global map</span>
                                </div>
                                
                                {/* Live Frame */}
                                <div className="h-[650px] w-full bg-slate-100 relative">
                                  <iframe 
                                    src={project.product.url}
                                    className="w-full h-full border-0"
                                    title="Global Soil Moisture Interactive Map"
                                    allow="geolocation; clipboard-write; encrypted-media"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
