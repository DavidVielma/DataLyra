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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Workflow,
      title: t.features.items.integration.title,
      description: t.features.items.integration.desc,
      detail: t.features.items.integration.detail
    },
    {
      icon: Presentation,
      title: t.features.items.storytelling.title,
      description: t.features.items.storytelling.desc,
      detail: t.features.items.storytelling.detail
    },
    {
      icon: BrainCircuit,
      title: t.features.items.predictive.title,
      description: t.features.items.predictive.desc,
      detail: t.features.items.predictive.detail
    },
    {
      icon: Layers,
      title: t.features.items.pipelines.title,
      description: t.features.items.pipelines.desc,
      detail: t.features.items.pipelines.detail
    },
    {
      icon: ShieldCheck,
      title: t.features.items.governance.title,
      description: t.features.items.governance.desc,
      detail: t.features.items.governance.detail
    },
    {
      icon: Zap,
      title: t.features.items.realtime.title,
      description: t.features.items.realtime.desc,
      detail: t.features.items.realtime.detail
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
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-8 rounded-2xl border border-border bg-background hover:bg-card hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer text-left h-full"
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
                  <div className="mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for details →
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-2xl">
                    <feature.icon className="h-6 w-6 text-primary" />
                    {feature.title}
                  </DialogTitle>
                  <DialogDescription className="pt-4 text-base leading-relaxed">
                    {feature.detail}
                  </DialogDescription>
                </DialogHeader>
                <div className="pt-4">
                    <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full">
                        Contact us about this
                    </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
