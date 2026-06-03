import { motion } from 'motion/react';
import { ArrowRight, Satellite, Database, Sprout, CloudRain, Wind, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

export default function Home() {
  const researchFocus = [
    {
      title: 'Remote Sensing',
      description: 'Leveraging satellite and UAV imagery to monitor agricultural landscapes and environmental change.',
      icon: <Satellite className="text-primary" size={24} />,
    },
    {
      title: 'Modelling',
      description: 'Developing mechanistic and data-driven models for nitrogen cycling and N2O emissions.',
      icon: <Database className="text-primary" size={24} />,
    },
    {
      title: 'Soil Moisture',
      description: 'Precision mapping and analysis of soil water dynamics across spatial and temporal scales.',
      icon: <CloudRain className="text-primary" size={24} />,
    },
    {
      title: 'Agriculture',
      description: 'Bridging technology and agronomy for smarter, more sustainable food production systems.',
      icon: <Sprout className="text-primary" size={24} />,
    },
    {
      title: 'N2O Emissions',
      description: 'Investigating greenhouse gas fluxes and mitigation strategies in intensive cropping systems.',
      icon: <Wind className="text-primary" size={24} />,
    },
    {
      title: 'Nitrogen Cycling',
      description: 'Understanding the complex interplay of nitrogen inputs, transformations, and losses.',
      icon: <Activity className="text-primary" size={24} />,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-24 px-6 md:px-12 overflow-hidden bg-white mt-10 md:mt-0">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 lg:col-span-10 space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 tracking-tight leading-[1.1]">
              Advancing remote sensing and environmental modelling for <span className="text-primary">food security and environmental sustainability</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              Our team develops data-driven approaches to investigate crop, soil, and ecosystem dynamics using remote sensing, machine learning, and predictive environmental models.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <MotionLink
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                to="/research"
                className="px-8 py-4 bg-slate-900 text-white font-medium hover:bg-primary transition-colors flex items-center gap-2"
              >
                Explore Research & Products <ArrowRight size={18} />
              </MotionLink>
              <MotionLink
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                to="/team"
                className="px-8 py-4 bg-white text-slate-700 font-medium border border-slate-200 hover:bg-slate-50 transition-all"
              >
                Meet the Team
              </MotionLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lab Mission Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="section-label text-center">Our Commitment</h2>
          <p className="text-xl md:text-3xl font-light text-slate-900 leading-tight">
            We bridge environmental science, remote sensing, and predictive modeling to provide a scientific foundation for sustainable and resilient smart agriculture.
          </p>
          <div className="pt-6">
            <Link to="/research" className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-primary pb-1 hover:text-primary transition-colors">
              Detailed Methodology
            </Link>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-white border-t border-slate-100 text-slate-900 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <span className="section-label text-primary">Open Positions</span>
          <h2 className="text-3xl md:text-4xl font-light leading-tight">Interested in joining our research group?</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We are <span className="font-semibold text-slate-900">actively seeking highly motivated PhD candidates and postdoctoral researchers</span> with backgrounds in remote sensing, process modeling, machine learning, and agricultural science, alongside welcoming international collaborations and visiting scholars.
          </p>
          <div className="pt-4">
             <Link to="/contact" className="inline-block px-10 py-4 bg-slate-900 text-white font-bold hover:bg-primary transition-all">
               Contact Lab
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
