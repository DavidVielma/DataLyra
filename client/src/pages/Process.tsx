import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { Server, Database, BrainCircuit, ArrowRight } from "lucide-react";

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Server,
      title: t.process.steps.step1.title,
      desc: t.process.steps.step1.desc,
      color: "border-sky-500 text-sky-500",
      bg: "bg-sky-500/10"
    },
    {
      icon: Database,
      title: t.process.steps.step2.title,
      desc: t.process.steps.step2.desc,
      color: "border-pink-500 text-pink-500", // Using pink as requested in image
      bg: "bg-pink-500/10"
    },
    {
      icon: BrainCircuit,
      title: t.process.steps.step3.title,
      desc: t.process.steps.step3.desc,
      color: "border-cyan-500 text-cyan-500",
      bg: "bg-cyan-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            {t.process.title}
          </h1>
          <p className="text-xl text-slate-400">
            {t.process.subtitle}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-48 h-48 rounded-full border-2 ${step.color} ${step.bg} flex flex-col items-center justify-center p-6 mb-8 relative transition-transform duration-500 group-hover:scale-105 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.3)]`}>
                  <step.icon className={`h-12 w-12 mb-4 ${step.color.split(' ')[1]}`} />
                  <p className="text-sm font-medium text-slate-300 leading-snug px-2">
                    {step.title}
                  </p>
                </div>
                
                {/* Arrow for mobile/desktop flow */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden mb-8 text-slate-600">
                    <ArrowRight className="h-8 w-8 rotate-90" />
                  </div>
                )}
                 {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-[30%] translate-x-12 -translate-y-12 text-slate-600">
                     {/* Visual arrow handled by layout spacing, but could be explicit SVG */}
                  </div>
                )}

                <div className="max-w-xs">
                    {/* Optional: Add more text here if needed, but the circle text covers the main point */}
                    <p className="text-slate-500 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
