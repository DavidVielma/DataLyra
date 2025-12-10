import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Database, LineChart } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_blue_data_flow_background.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50/50">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img 
          src={heroBg} 
          alt="Data Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-sky-100 text-sky-700 text-xs font-bold tracking-wide uppercase mb-6 border border-sky-200">
              Data Intelligence Solutions
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
              Transforming Complex Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">Elegant Decisions</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              We help ambitious startups turn raw data streams into beautiful, actionable insights that drive growth and clarity.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-sky-500/20"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Transformation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 h-12 text-base border-slate-200 hover:bg-slate-50 text-slate-700"
                onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Metrics Cards (Decorative) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Database, label: "Data Integration", value: "Seamless" },
            { icon: BarChart2, label: "Processing Speed", value: "Real-time" },
            { icon: LineChart, label: "Visualization", value: "Interactive" },
          ].map((item, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm border border-slate-100 p-6 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">{item.label}</p>
                <p className="text-lg font-bold text-slate-900">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
