import { motion } from "framer-motion";
import dashboardImg from "@assets/generated_images/modern_analytics_dashboard_on_a_laptop_screen.png";

export function Showcase() {
  return (
    <section id="showcase" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-sky-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Clarity in Every Pixel
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                We believe that data tools should be as beautiful as they are functional. Our dashboards are designed with cognitive ergonomics in mind—reducing cognitive load while maximizing insight retention.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-full mt-1">
                    <div className="h-2 w-2 rounded-full bg-sky-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Intuitive Interfaces</h4>
                    <p className="text-slate-400">Designed for business users, not just data scientists.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-full mt-1">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Action-Oriented Layouts</h4>
                    <p className="text-slate-400">Key metrics are highlighted to prompt immediate action.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-full mt-1">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Mobile Responsive</h4>
                    <p className="text-slate-400">Access your critical data from anywhere, on any device.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl opacity-30 blur-lg" />
              <img 
                src={dashboardImg} 
                alt="DataLyra Dashboard" 
                className="relative rounded-xl border border-slate-700 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
