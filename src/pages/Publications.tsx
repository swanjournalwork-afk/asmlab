import { useState } from 'react';
import { ExternalLink, FileText, Download, RefreshCw, AlertCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PublicationItemProps {
  publication: any;
  index: number;
  key?: string | number;
}

const PublicationItem = ({ publication, index }: PublicationItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="group flex flex-col md:flex-row gap-4 md:gap-6 py-6 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 px-4 -mx-4 rounded-xl transition-all"
  >
    <div className="flex-shrink-0 pt-1">
       <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${publication.type === 'journal' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' : 'bg-amber-50 text-amber-600 border border-amber-100'}`}>
         <FileText size={18} />
       </div>
    </div>
    <div className="flex-grow space-y-2">
      <div className="flex flex-wrap items-center gap-3">
         <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded font-mono ${publication.type === 'journal' ? 'bg-indigo-100 text-indigo-700' : 'bg-amber-100 text-amber-700'}`}>
           {publication.type === 'journal' ? 'Journal Article' : 'Conference / Workshop'}
         </span>
         <span className="text-xs font-mono font-bold text-slate-400">{publication.journal || publication.conference}</span>
      </div>
      <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
        {publication.title}
      </h3>
      <p className="text-slate-500 text-xs font-light leading-relaxed">
        {Array.isArray(publication.authors) ? (
          publication.authors.map((author: string, i: number) => (
            <span key={author} className={author.includes('Wang') ? 'text-slate-900 font-bold' : ''}>
              {author}{i < publication.authors.length - 1 ? ', ' : ''}
            </span>
          ))
        ) : (
          <span className="text-slate-500">{publication.authors}</span>
        )}
      </p>
      
      <div className="flex flex-wrap items-center gap-4 pt-1">
         {publication.doi && (
           <a 
             href={`https://doi.org/${publication.doi}`}
             target="_blank"
             rel="noopener noreferrer"
             className="text-xs font-mono font-bold text-primary flex items-center gap-1 hover:underline"
           >
             DOI <ExternalLink size={10} />
           </a>
         )}
         <a 
           href="https://scholar.google.com/citations?user=BxTGuO8AAAAJ&hl=en"
           target="_blank"
           rel="noopener noreferrer"
           className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1 hover:text-slate-600 transition-colors"
         >
           Scholar <ExternalLink size={10} />
         </a>
         {publication.citations !== undefined && (
           <span className="text-xs text-slate-400 font-mono">
             • Cited by {publication.citations}
           </span>
         )}
      </div>
    </div>
    <div className="flex-shrink-0 text-xl font-bold text-slate-200 group-hover:text-primary/20 transition-colors md:pt-1 font-mono">
       {publication.year}
    </div>
  </motion.div>
);export default function Publications() {
  const [sortBy, setSortBy] = useState<'year' | 'citations' | 'title'>('citations');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Authenticated/Real publications data for Dr. Sheng Wang with representative citation counts
  const [publications, setPublications] = useState<any[]>([
    // --- 2026 Newly Added ---
    {
      year: 2026,
      title: "Phenology-Aligned multi-task temporal fusion framework for satellite-based triple-seasonal rice yield estimation in Southeast Asia",
      authors: ["Lin, Z.", "Guan, K.", "Wang, S.", "Zhou, Q.", "You, L.", "Chen, X.", "Luo, X.", "Zhao, K."],
      journal: "International Journal of Applied Earth Observation and Geoinformation 149",
      type: "journal",
      citations: 0
    },
    {
      year: 2026,
      title: "Assessing in-season crop nitrogen status based on UAV multispectral imaging and AI-driven model optimization",
      authors: ["Zhou, Y.", "Ata-Ul-Karim, S. T.", "Yin, J.", "Tóth, L.", "Wang, S.", "Ma, Y.", "Wu, C.", "others"],
      journal: "Computers and Electronics in Agriculture 246, 111638",
      type: "journal",
      citations: 0
    },
    {
      year: 2026,
      title: "A framework to detect tillage practices from space: A demonstration in the US Midwest",
      authors: ["Wu, X.", "Zhou, Q.", "Guan, K.", "Wang, S.", "Hipple, J.", "Peng, B.", "Chen, Z.", "Qin, R."],
      journal: "Remote Sensing of Environment 337, 115323",
      type: "journal",
      citations: 0
    },
    {
      year: 2026,
      title: "Impact of vertical and seasonal variation in leaf traits on simulating soybean canopy photosynthesis via 1D and 3D modeling",
      authors: ["Wang, X.", "Guan, K.", "Wang, S.", "Bailey, B. N.", "Ainsworth, E. A.", "Jiang, Z.", "Li, K."],
      journal: "Agricultural and Forest Meteorology 377, 110941",
      type: "journal",
      citations: 1
    },
    {
      year: 2026,
      title: "Global daily 9 km remotely sensed soil moisture (2015–2025) with microwave radiative transfer-guided learning",
      authors: ["Feng, S.", "Li, A.", "Zhou, R.", "Butterbach-Bahl, K.", "Guan, K.", "Jin, Z.", "Looms, M. C.", "others"],
      journal: "Scientific Data",
      type: "journal",
      citations: 0
    },
    {
      year: 2026,
      title: "Knowledge‐Guided Machine Learning for Global Change Ecology Research",
      authors: ["Jin, Z.", "Liu, L.", "Yang, Q.", "Xia, X.", "Tao, S.", "Guo, Y.", "Ghosh, R.", "Wang, S.", "Qhu, Q.", "others"],
      journal: "Global Change Biology 32 (2), e70742",
      type: "journal",
      citations: 3
    },
    {
      year: 2026,
      title: "Unraveling the impact of environmental factors on wheat yield across the European Union via explainable machine learning",
      authors: ["Zhou, W.", "Zhou, W.", "Cammarano, D.", "Butterbach-Bahl, K.", "Olesen, J. E.", "Lin, Z.", "others"],
      journal: "Computers and Electronics in Agriculture 241, 111268",
      type: "journal",
      citations: 2
    },
    {
      year: 2026,
      title: "Multi-sensor assessment of phenology-based field-level cover cropping detection using satellite vegetation time series from Harmonized Landsat-8 and Sentinel-2, MODIS, and others",
      authors: ["Zhou, Q.", "Guan, K.", "Wang, S.", "Wu, X.", "Stroebel, S.", "Hipple, J."],
      journal: "International Journal of Applied Earth Observation and Geoinformation 146",
      type: "journal",
      citations: 1
    },
    {
      year: 2026,
      title: "Ammonia emissions and depositions over the contiguous United States derived from IASI and CrIS using the directional derivative approach",
      authors: ["Li, Z.", "Sun, K.", "Guan, K.", "Wang, S.", "Peng, B.", "Clarisse, L.", "Van Damme, M.", "others"],
      journal: "Atmospheric Chemistry and Physics 26 (1), 703-721",
      type: "journal",
      citations: 2
    },
    {
      year: 2026,
      title: "The Global Spectra-Trait Initiative: A database of paired leaf spectroscopy and functional traits associated with leaf photosynthetic capacity",
      authors: ["Lamour, J.", "Serbin, S. P.", "Rogers, A.", "Acebron, K. T.", "Ainsworth, E.", "Albert, L. P.", "others"],
      journal: "Earth System Science Data 18 (1), 245-265",
      type: "journal",
      citations: 2
    },
    {
      year: 2026,
      title: "Remote sensing of soil moisture in agroecosystems",
      authors: ["Qiu, J.", "Su, W.", "Xin, Q.", "Feng, S.", "Wang, X.", "Wang, S.", "Manevski, K."],
      journal: "Agricultural Applications of Earth Observation, 319-338",
      type: "journal",
      citations: 0
    },

    // --- 2025 Newly Added ---
    {
      year: 2025,
      title: "Cross-scale Multi-task Deep Learning for Tillage Practice Monitoring using Multi-Source Remote Sensing Observations",
      authors: ["Lin, Z.", "Guan, K.", "Wang, S.", "Zhou, Q.", "Wu, X."],
      journal: "AGU25",
      type: "conference",
      citations: 0
    },
    {
      year: 2025,
      title: "Peatland Plant Functional Groups Exhibit Distinct Seasonal Dynamics in Sun-Induced Fluorescence and Reflectance During Low Precipitation Periods",
      authors: ["Antala, M.", "Wang, S.", "Strozecki, M.", "Juszczak, R.", "Rastogi, A."],
      journal: "AGU25",
      type: "conference",
      citations: 0
    },
    {
      year: 2025,
      title: "Monitoring Phenotypic Variation Across Diverse Cover Crop Species and Assessing Their Impacts on Subsequent Corn Production via Airborne-Satellite Cross-Scale Sensing",
      authors: ["Jiang, Z.", "Guan, K.", "Wang, S.", "Wong, K.", "Hein, K.", "Bagnall, G. C.", "Topp, C. N."],
      journal: "AGU25",
      type: "conference",
      citations: 0
    },
    {
      year: 2025,
      title: "Improving Simulation of Soybean Canopy Photosynthesis by Incorporating Realistic 3D Canopy Structure",
      authors: ["X. Wang", "K. Guan", "S. Wang", "A. J. Zhai", "S. Wang", "B. Bailey", "E. A. Ainsworth", "others"],
      journal: "AGU25",
      type: "conference",
      citations: 0
    },
    {
      year: 2025,
      title: "Clumping index estimation with 30°-tilted cameras in row crops: Evaluation of methods and segment size effects",
      authors: ["Li, K.", "Jiang, C.", "Guan, K.", "Ma, Z.", "Wang, S.", "Chen, J. M.", "Chen, M."],
      journal: "Agricultural and Forest Meteorology 375, 110846",
      type: "journal",
      citations: 0
    },
    {
      year: 2025,
      title: "Transfer learning for improved crop yield predictions in a cross-scale pathway: a case study for Brazilian national soybean",
      authors: ["Zhang, J.", "Guan, K.", "Chen, Z.", "Huang, Y.", "Zhao, K.", "Peng, B.", "Wang, S.", "Wu, X.", "others"],
      journal: "International Journal of Applied Earth Observation and Geoinformation 145",
      type: "journal",
      citations: 3
    },
    {
      year: 2025,
      title: "Addressing Crop Dormancy for Phenology-based Field-level Detection of Winter Wheat Planting Dates in the United States",
      authors: ["Zhou, Q.", "Guan, K.", "Wang, S.", "Hipple, J.", "Chen, Z."],
      journal: "IEEE Transactions on Geoscience and Remote Sensing",
      type: "journal",
      citations: 0
    },
    {
      year: 2025,
      title: "Integrating Remotely Sensed Thermal Observations for Calibration of Process-Based Land-Surface Models: Accuracy, Revisit Windows, and Implications in a Dryland Ecosystem",
      authors: ["Riba, A.", "Garcia, M.", "Tarquís, A. M.", "Domingo, F.", "Antala, M.", "Feng, S.", "Liu, J.", "others"],
      journal: "Remote Sensing 17 (21), 3630",
      type: "journal",
      citations: 1
    },
    {
      year: 2025,
      title: "Detecting the onset of rice field inundation in the Lower Mississippi River Basin via Harmonized Landsat Sentinel-2 (HLS) satellite time series",
      authors: ["Deng, Y.", "Peng, B.", "Guan, K.", "Runkle, B. R. K.", "Moreno-García, B.", "Wu, X.", "Wang, S.", "others"],
      journal: "ISPRS Journal of Photogrammetry and Remote Sensing 228, 28-43",
      type: "journal",
      citations: 2
    },

    // --- Existing Highly Cited ---
    {
      year: 2022,
      title: "Using soil library hyperspectral reflectance and machine learning to predict soil organic carbon: Assessing potential of airborne and spaceborne optical soil sensing",
      authors: ["Wang, S.", "Guan, K.", "Zhang, C.", "Lee, D. K.", "Margenot, A. J.", "Ge, Y.", "Peng, J.", "Zhou, W.", "others"],
      journal: "Remote Sensing of Environment 271, 112914",
      type: "journal",
      citations: 246
    },
    {
      year: 2023,
      title: "Recent cover crop adoption is associated with small maize and soybean yield losses in the United States",
      authors: ["Deines, J. M.", "Guan, K.", "Lopez, B.", "Zhou, Q.", "White, C. S.", "Wang, S.", "Lobell, D. B."],
      journal: "Global change biology 29 (3), 794-807",
      type: "journal",
      citations: 212
    },
    {
      year: 2021,
      title: "Unmanned Aerial Vehicles in Hydrology and Water Management: Applications, Challenges, and Perspectives",
      authors: ["Acharya, B. S.", "Bhandari, M.", "Bandini, F.", "Pizarro, A.", "Perks, M.", "Joshi, D. R.", "others"],
      journal: "Water Resources Research 57 (11), e2021WR029925",
      type: "journal",
      citations: 202
    },
    {
      year: 2024,
      title: "Knowledge-guided machine learning can improve carbon cycle quantification in agroecosystems",
      authors: ["Liu, L.", "Zhou, W.", "Guan, K.", "Peng, B.", "Xu, S.", "Tang, J.", "Qhu, Q.", "Till, J.", "Xia, X.", "Jiang, C.", "others"],
      journal: "Nature communications 15 (1), 357",
      type: "journal",
      citations: 201
    },
    {
      year: 2018,
      title: "Bathymetry observations of inland water bodies using a tethered single-beam sonar controlled by an unmanned aerial vehicle",
      authors: ["Bandini, F.", "Olesen, D.", "Jakobsen, J.", "Kittel, C. M. M.", "Wang, S.", "Garcia, M.", "others"],
      journal: "Hydrology and Earth System Sciences 22 (8), 4165-4181",
      type: "journal",
      citations: 140
    },
    {
      year: 2021,
      title: "Unique contributions of chlorophyll and nitrogen to predict crop photosynthetic capacity from leaf spectroscopy",
      authors: ["Wang, S.", "Guan, K.", "Wang, Z.", "Ainsworth, E. A.", "Zheng, T.", "Townsend, P. A.", "Li, K.", "others"],
      journal: "Journal of experimental botany 72 (2), 341-354",
      type: "journal",
      citations: 133
    },
    {
      year: 2016,
      title: "Comparison of temporal trends from multiple soil moisture data sets and precipitation: The implication of irrigation on regional soil moisture trend",
      authors: ["Qiu, J.", "Gao, Q.", "Wang, S.", "Su, Z."],
      journal: "International Journal of Applied Earth Observation and Geoinformation 48, 17-27",
      type: "journal",
      citations: 118
    },
    {
      year: 2020,
      title: "Radiance-based NIRv as a proxy for GPP of corn and soybean",
      authors: ["Wu, G.", "Guan, K.", "Jiang, C.", "Peng, B.", "Kimm, H.", "Chen, M.", "Yang, X.", "Wang, S.", "others"],
      journal: "Environmental Research Letters 15 (3), 034009",
      type: "journal",
      citations: 116
    },
    {
      year: 2022,
      title: "Recent rapid increase of cover crop adoption across the US Midwest detected by fusing multi‐source satellite data",
      authors: ["Zhou, Q.", "Guan, K.", "Wang, S.", "Jiang, C.", "Huang, Y.", "Peng, B.", "Chen, Z.", "Wang, S.", "others"],
      journal: "Geophysical Research Letters 49 (22), e2022GL100249",
      type: "journal",
      citations: 113
    },
    {
      year: 2021,
      title: "Airborne hyperspectral imaging of nitrogen deficiency on crop traits and yield of maize by machine learning and radiative transfer modeling",
      authors: ["Wang, S.", "Guan, K.", "Wang, Z.", "Ainsworth, E. A.", "Zheng, T.", "Townsend, P. A.", "Liu, N.", "others"],
      journal: "International Journal of Applied Earth Observation and Geoinformation 105",
      type: "journal",
      citations: 103
    },
    {
      year: 2018,
      title: "Incorporating diffuse radiation into a light use efficiency and evapotranspiration model: An 11-year study in a high latitude deciduous forest",
      authors: ["Wang, S.", "Ibrom, A.", "Bauer-Gottwein, P.", "Garcia, M."],
      journal: "Agricultural and Forest Meteorology 248, 479-493",
      type: "journal",
      citations: 92
    },
    {
      year: 2023,
      title: "Cross-scale sensing of field-level crop residue cover: Integrating field photos, airborne hyperspectral imaging, and satellite data",
      authors: ["Wang, S.", "Guan, K.", "Zhang, C.", "Zhou, Q.", "Wang, S.", "Wu, X.", "Jiang, C.", "Peng, B.", "others"],
      journal: "Remote Sensing of Environment 285, 113366",
      type: "journal",
      citations: 83
    },
    {
      year: 2019,
      title: "High spatial resolution monitoring land surface energy, water and CO2 fluxes from an Unmanned Aerial System",
      authors: ["Wang, S.", "Garcia, M.", "Bauer-Gottwein, P.", "Jakobsen, J.", "Zarco-Tejada, P. J.", "others"],
      journal: "Remote Sensing of Environment 229, 14-31",
      type: "journal",
      citations: 82
    },
    {
      year: 2023,
      title: "Airborne hyperspectral imaging of cover crops through radiative transfer process-guided machine learning",
      authors: ["Wang, S.", "Guan, K.", "Zhang, C.", "Jiang, C.", "Zhou, Q.", "Li, K.", "Qin, Z.", "Ainsworth, E. A.", "others"],
      journal: "Remote Sensing of Environment 285, 113386",
      type: "journal",
      citations: 79
    },
    {
      year: 2021,
      title: "A daily, 250 m and real-time gross primary productivity product (2000–present) covering the contiguous United States",
      authors: ["Jiang, C.", "Guan, K.", "Wu, G.", "Peng, B.", "Wang, S."],
      journal: "Earth System Science Data 13 (2), 281-298",
      type: "journal",
      citations: 73
    },
    {
      year: 2023,
      title: "A scalable framework for quantifying field-level agricultural carbon outcomes",
      authors: ["Guan, K.", "Jin, Z.", "Peng, B.", "Tang, J.", "DeLucia, E. H.", "West, P.", "Jiang, C.", "Wang, S.", "others"],
      journal: "Earth-Science Reviews, 104462",
      type: "journal",
      citations: 72
    },
    {
      year: 2015,
      title: "Trends in land surface evapotranspiration across China with remotely sensed NDVI and climatological data for 1981–2010",
      authors: ["Mo, X.", "Liu, S.", "Lin, Z.", "Wang, S.", "Hu, S."],
      journal: "Hydrological Sciences Journal 60 (12), 2163-2177",
      type: "journal",
      citations: 71
    },
    {
      year: 2020,
      title: "Satellite footprint data from OCO-2 and TROPOMI reveal significant spatio-temporal and inter-vegetation type variabilities of solar-induced chlorophyll fluorescence yield in the US Midwest",
      authors: ["Wang, C.", "Guan, K.", "Peng, B.", "Chen, M.", "Jiang, C.", "Zeng, Y.", "Wu, G.", "Wang, S.", "Wu, J.", "others"],
      journal: "Remote Sensing of Environment 241, 111728",
      type: "journal",
      citations: 61
    },
    {
      year: 2024,
      title: "Earlier spring greening in Northern Hemisphere terrestrial biomes enhanced net ecosystem productivity in summer",
      authors: ["Ren, Y.", "Qiu, J.", "Zeng, Z.", "Liu, X.", "Sitch, S.", "Pilegaard, K.", "Yang, T.", "Wang, S.", "others"],
      journal: "Communications Earth & Environment 5 (1), 122",
      type: "journal",
      citations: 53
    },
    {
      year: 2019,
      title: "Unmanned Aerial System multispectral mapping for low and variable solar irradiance conditions: Potential of tensor decomposition",
      authors: ["Wang, S.", "Baum, A.", "Zarco-Tejada, P. J.", "Dam-Hansen, C.", "Thorseth, A.", "others"],
      journal: "ISPRS Journal of Photogrammetry and Remote Sensing 155, 58-71",
      type: "journal",
      citations: 51
    }
  ]);

  // Sort computation
  const sortedPublications = [...publications].sort((a, b) => {
    if (sortBy === 'year') {
      return b.year - a.year; // Latest first
    } else if (sortBy === 'citations') {
      return (b.citations || 0) - (a.citations || 0); // Highest citations first
    } else {
      return a.title.localeCompare(b.title); // Alphabetical A-Z by title
    }
  });

  // Pagination calculation
  const totalPages = Math.ceil(sortedPublications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPublications = sortedPublications.slice(startIndex, startIndex + itemsPerPage);

  // Computed years represented on the current paginated view, to display chronological partitions beautifully
  const activeYears = sortBy === 'year'
    ? (Array.from(new Set(paginatedPublications.map(p => p.year as number))) as number[]).sort((a: number, b: number) => b - a)
    : [];

  return (
    <div className="pt-24 md:pt-32 pb-24 space-y-12 md:space-y-16 mt-10 md:mt-0">
      {/* Header */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-light">
              Our peer-reviewed publications in high-impact journals reflect the integration of remote sensing, data-driven approaches, and modeling to advance the understanding of Earth system science and smart agricultural systems.
            </p>
          </div>
        </div>
      </section>

      {/* Publications List Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
         {/* Filter Sidebar */}
         <div className="w-full lg:w-1/4 sticky top-32 space-y-6">
            <div className="p-4 md:p-6 bg-slate-50 border border-slate-100 rounded-2xl">
               <h4 className="text-[10px] font-bold tracking-widest uppercase font-mono mb-4 text-slate-500">Sort Publications</h4>
               <div className="flex flex-row lg:flex-col gap-2 flex-wrap">
                  {[
                    { id: 'citations', label: 'Cit. (Most Cited)' },
                    { id: 'year', label: 'Year (Latest First)' },
                    { id: 'title', label: 'Title (A-Z)' }
                  ].map((option) => {
                    const isActive = sortBy === option.id;
                    return (
                      <button 
                        key={option.id} 
                        onClick={() => {
                          setSortBy(option.id as any);
                          setCurrentPage(1);
                        }}
                        className={`flex items-center gap-2.5 px-4 py-3 text-[10px] font-mono font-bold uppercase tracking-widest text-left rounded-xl transition-all duration-300 flex-grow lg:flex-grow-0 ${
                          isActive 
                            ? 'bg-slate-900 text-white shadow-sm' 
                            : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 bg-transparent'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full transition-transform ${isActive ? 'bg-primary scale-125 animate-pulse' : 'bg-slate-300'}`} />
                        {option.label}
                      </button>
                    );
                  })}
               </div>
            </div>
         </div>

         {/* Publications Render Engine */}
         <div className="w-full lg:w-3/4 flex flex-col min-h-[600px] justify-between">
            <div>
               {sortBy === 'year' ? (
                 activeYears.map(year => (
                   <div key={year} className="mb-12">
                      <div className="flex items-center gap-4 mb-6">
                         <h3 className="text-xl font-bold text-slate-900 font-mono">{year}</h3>
                         <div className="flex-grow h-px bg-slate-100"></div>
                      </div>
                      <div className="flex flex-col">
                         {paginatedPublications
                           .filter(p => p.year === year)
                           .map((pub, index) => (
                             <PublicationItem key={pub.title} publication={pub} index={index} />
                           ))}
                      </div>
                   </div>
                 ))
               ) : sortBy === 'citations' ? (
                 <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                       <h3 className="text-xl font-bold text-slate-900 font-mono">Cited by (Count)</h3>
                       <div className="flex-grow h-px bg-slate-100"></div>
                    </div>
                    {paginatedPublications.map((pub, index) => (
                      <PublicationItem key={pub.title} publication={pub} index={index} />
                    ))}
                 </div>
               ) : (
                 <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                       <h3 className="text-xl font-bold text-slate-900 font-mono font-bold">Alphabetical (A - Z)</h3>
                       <div className="flex-grow h-px bg-slate-100"></div>
                    </div>
                    {paginatedPublications.map((pub, index) => (
                      <PublicationItem key={pub.title} publication={pub} index={index} />
                    ))}
                 </div>
               )}
            </div>

            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-100 mt-12">
                <button
                  onClick={() => {
                    setCurrentPage(prev => Math.max(prev - 1, 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === 1}
                  className="px-4 py-2.5 text-[10px] font-mono font-bold uppercase tracking-widest rounded-xl transition-all border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent text-slate-600 disabled:cursor-not-allowed"
                >
                  &larr; Previous
                </button>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                    <button
                      key={pageNum}
                      onClick={() => {
                        setCurrentPage(pageNum);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-9 h-9 rounded-xl text-xs font-mono font-bold transition-all ${
                        currentPage === pageNum
                          ? 'bg-slate-900 text-white shadow-sm scale-110'
                          : 'text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setCurrentPage(prev => Math.min(prev + 1, totalPages));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2.5 text-[10px] font-mono font-bold uppercase tracking-widest rounded-xl transition-all border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent text-slate-600 disabled:cursor-not-allowed"
                >
                  Next &rarr;
                </button>
              </div>
            )}
         </div>
      </section>
    </div>
  );
}
