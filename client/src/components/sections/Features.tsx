import { motion } from "framer-motion";
import { 
  Workflow, 
  Presentation, 
  BrainCircuit, 
  Layers, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Data Integration",
    description: "We unify your fragmented data sources into a single, coherent source of truth."
  },
  {
    icon: Presentation,
    title: "Visual Storytelling",
    description: "Transform dry spreadsheets into compelling, interactive dashboards that tell a story."
  },
  {
    icon: BrainCircuit,
    title: "Predictive Analytics",
    description: "Go beyond 'what happened' to 'what will happen' with our advanced modeling."
  },
  {
    icon: Layers,
    title: "Custom Pipelines",
    description: "Tailored ETL processes that respect your unique business logic and needs."
  },
  {
    icon: ShieldCheck,
    title: "Data Governance",
    description: "Ensure your data is accurate, secure, and compliant with industry standards."
  },
  {
    icon: Zap,
    title: "Real-time Insights",
    description: "Dashboards that update as your business moves, enabling instant decision making."
  }
];

export function Features() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Data Solutions
          </h2>
          <p className="text-lg text-slate-600">
            We don't just process data; we craft intelligence systems that empower your entire organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-sky-100 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-xl bg-white border border-slate-200 group-hover:border-sky-200 group-hover:bg-sky-50 flex items-center justify-center text-slate-600 group-hover:text-sky-500 transition-colors mb-6">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
