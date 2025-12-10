import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";
import retailImg from "@assets/generated_images/dark_mode_retail_analytics_dashboard_with_heatmaps.png";
import fintechImg from "@assets/generated_images/clean_fintech_dashboard_with_stock_data.png";
import healthImg from "@assets/generated_images/blue_medical_analytics_dashboard.png";

export default function SuccessStories() {
  const { t } = useLanguage();

  const cases = [
    {
      img: retailImg,
      title: t.successStories.cases.retail.title,
      client: t.successStories.cases.retail.client,
      desc: t.successStories.cases.retail.desc,
      result: t.successStories.cases.retail.result,
      tags: ["Retail", "Inventory", "Real-time"]
    },
    {
      img: fintechImg,
      title: t.successStories.cases.fintech.title,
      client: t.successStories.cases.fintech.client,
      desc: t.successStories.cases.fintech.desc,
      result: t.successStories.cases.fintech.result,
      tags: ["Fintech", "Portfolio", "Analytics"]
    },
    {
      img: healthImg,
      title: t.successStories.cases.health.title,
      client: t.successStories.cases.health.client,
      desc: t.successStories.cases.health.desc,
      result: t.successStories.cases.health.result,
      tags: ["Healthcare", "Operations", "Predictive"]
    }
  ];

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
              {t.successStories.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.successStories.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-24">
            {cases.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
              >
                {/* Image Side */}
                <div className="lg:w-1/2 w-full group cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <img 
                      src={story.img} 
                      alt={story.title} 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 w-full">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {story.tags.map((tag) => (
                      <span key={tag} className="text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                    {story.client}
                  </h3>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {story.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {story.desc}
                  </p>
                  
                  <div className="bg-card border border-border p-6 rounded-xl mb-8">
                    <p className="text-sm text-muted-foreground uppercase font-bold mb-2">Key Result</p>
                    <p className="text-2xl font-bold text-primary flex items-center gap-2">
                      {story.result}
                      <ArrowUpRight className="h-6 w-6" />
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
