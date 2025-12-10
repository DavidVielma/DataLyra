import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Database, LineChart } from "lucide-react";
import { ParticleBackground } from "@/components/ui/particle-background";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase mb-6 border border-primary/20">
              {t.hero.badge}
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-[1.1] mb-8">
              {t.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 h-12 text-base border-border hover:bg-accent hover:text-accent-foreground"
                onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.ctaSecondary}
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
            { icon: Database, label: t.hero.metrics.integration.label, value: t.hero.metrics.integration.value },
            { icon: BarChart2, label: t.hero.metrics.speed.label, value: t.hero.metrics.speed.value },
            { icon: LineChart, label: t.hero.metrics.visualization.label, value: t.hero.metrics.visualization.value },
          ].map((item, i) => (
            <div key={i} className="bg-card/80 backdrop-blur-sm border border-border p-6 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                <p className="text-lg font-bold text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
