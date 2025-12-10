import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.about.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">{t.about.mission.title}</h3>
              <p className="text-muted-foreground">{t.about.mission.desc}</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">{t.about.vision.title}</h3>
              <p className="text-muted-foreground">{t.about.vision.desc}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
