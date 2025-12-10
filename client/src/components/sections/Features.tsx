import { motion } from "framer-motion";
import { 
  Workflow, 
  Presentation, 
  BrainCircuit, 
  Layers, 
  ShieldCheck, 
  Zap 
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Workflow,
      title: t.features.items.integration.title,
      description: t.features.items.integration.desc
    },
    {
      icon: Presentation,
      title: t.features.items.storytelling.title,
      description: t.features.items.storytelling.desc
    },
    {
      icon: BrainCircuit,
      title: t.features.items.predictive.title,
      description: t.features.items.predictive.desc
    },
    {
      icon: Layers,
      title: t.features.items.pipelines.title,
      description: t.features.items.pipelines.desc
    },
    {
      icon: ShieldCheck,
      title: t.features.items.governance.title,
      description: t.features.items.governance.desc
    },
    {
      icon: Zap,
      title: t.features.items.realtime.title,
      description: t.features.items.realtime.desc
    }
  ];

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.features.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.features.subtitle}
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
              className="group p-8 rounded-2xl border border-border bg-background hover:bg-card hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-xl bg-card border border-border group-hover:border-primary/30 group-hover:bg-primary/10 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors mb-6">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
