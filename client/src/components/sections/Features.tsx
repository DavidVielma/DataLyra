import { motion } from "framer-motion";
import { 
  Workflow, 
  Presentation, 
  BrainCircuit, 
  Layers, 
  ShieldCheck, 
  Zap,
  Clock
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
      detail: t.features.items.integration.detail,
      steps: t.features.items.integration.steps
    },
    {
      icon: Presentation,
      title: t.features.items.storytelling.title,
      description: t.features.items.storytelling.desc,
      detail: t.features.items.storytelling.detail,
      steps: t.features.items.storytelling.steps
    },
    {
      icon: BrainCircuit,
      title: t.features.items.predictive.title,
      description: t.features.items.predictive.desc,
      detail: t.features.items.predictive.detail,
      steps: t.features.items.predictive.steps
    },
    {
      icon: Layers,
      title: t.features.items.pipelines.title,
      description: t.features.items.pipelines.desc,
      detail: t.features.items.pipelines.detail,
      steps: t.features.items.pipelines.steps
    },
    {
      icon: ShieldCheck,
      title: t.features.items.governance.title,
      description: t.features.items.governance.desc,
      detail: t.features.items.governance.detail,
      steps: t.features.items.governance.steps
    },
    {
      icon: Zap,
      title: t.features.items.realtime.title,
      description: t.features.items.realtime.desc,
      detail: t.features.items.realtime.detail,
      steps: t.features.items.realtime.steps
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
              <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-3xl">
                    <feature.icon className="h-8 w-8 text-primary" />
                    {feature.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="grid md:grid-cols-2 gap-8 py-6">
                    <div>
                        <h4 className="font-bold text-lg mb-2">Service Overview</h4>
                        <DialogDescription className="text-base leading-relaxed">
                            {feature.detail}
                        </DialogDescription>
                    </div>
                    
                    <div className="bg-muted/50 p-6 rounded-xl border border-border">
                        <h4 className="font-bold text-lg mb-4">Implementation Pipeline</h4>
                        <div className="space-y-4">
                            {feature.steps.map((step, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm border border-primary/30 shrink-0">
                                            {i + 1}
                                        </div>
                                        {i < feature.steps.length - 1 && (
                                            <div className="w-0.5 h-full bg-border my-1 min-h-[20px]" />
                                        )}
                                    </div>
                                    <div className="pb-4 w-full">
                                        <div className="flex justify-between items-start">
                                            <h5 className="font-bold text-foreground">{step.title}</h5>
                                            <div className="flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                                <Clock className="h-3 w-3" />
                                                {step.duration}
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-2 border-t border-border flex justify-end">
                    <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full md:w-auto">
                        Inquire about {feature.title}
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
