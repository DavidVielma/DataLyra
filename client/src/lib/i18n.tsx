import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

type Translations = {
  nav: {
    services: string;
    process: string;
    about: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: {
      integration: { label: string; value: string };
      speed: { label: string; value: string };
      visualization: { label: string; value: string };
    };
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      integration: { title: string; desc: string };
      storytelling: { title: string; desc: string };
      predictive: { title: string; desc: string };
      pipelines: { title: string; desc: string };
      governance: { title: string; desc: string };
      realtime: { title: string; desc: string };
    };
  };
  showcase: {
    title: string;
    description: string;
    features: {
      intuitive: { title: string; desc: string };
      action: { title: string; desc: string };
      mobile: { title: string; desc: string };
    };
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    info: {
      email: string;
      call: string;
      office: string;
    };
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      toastTitle: string;
      toastDesc: string;
    };
  };
  footer: {
    description: string;
    company: {
      title: string;
      about: string;
      careers: string;
      blog: string;
      press: string;
    };
    legal: {
      title: string;
      privacy: string;
      terms: string;
      cookie: string;
    };
    rights: string;
  };
};

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      services: "Services",
      process: "Process",
      about: "About",
      getStarted: "Get Started",
    },
    hero: {
      badge: "Data Intelligence Solutions",
      title: "Transforming Complex Data into ",
      titleHighlight: "Elegant Decisions",
      subtitle: "We help ambitious startups turn raw data streams into beautiful, actionable insights that drive growth and clarity.",
      ctaPrimary: "Start Your Transformation",
      ctaSecondary: "View Our Work",
      metrics: {
        integration: { label: "Data Integration", value: "Seamless" },
        speed: { label: "Processing Speed", value: "Real-time" },
        visualization: { label: "Visualization", value: "Interactive" },
      },
    },
    features: {
      title: "Comprehensive Data Solutions",
      subtitle: "We don't just process data; we craft intelligence systems that empower your entire organization.",
      items: {
        integration: { title: "Data Integration", desc: "We unify your fragmented data sources into a single, coherent source of truth." },
        storytelling: { title: "Visual Storytelling", desc: "Transform dry spreadsheets into compelling, interactive dashboards that tell a story." },
        predictive: { title: "Predictive Analytics", desc: "Go beyond 'what happened' to 'what will happen' with our advanced modeling." },
        pipelines: { title: "Custom Pipelines", desc: "Tailored ETL processes that respect your unique business logic and needs." },
        governance: { title: "Data Governance", desc: "Ensure your data is accurate, secure, and compliant with industry standards." },
        realtime: { title: "Real-time Insights", desc: "Dashboards that update as your business moves, enabling instant decision making." },
      },
    },
    showcase: {
      title: "Clarity in Every Pixel",
      description: "We believe that data tools should be as beautiful as they are functional. Our dashboards are designed with cognitive ergonomics in mind—reducing cognitive load while maximizing insight retention.",
      features: {
        intuitive: { title: "Intuitive Interfaces", desc: "Designed for business users, not just data scientists." },
        action: { title: "Action-Oriented Layouts", desc: "Key metrics are highlighted to prompt immediate action." },
        mobile: { title: "Mobile Responsive", desc: "Access your critical data from anywhere, on any device." },
      },
    },
    contact: {
      badge: "Get in Touch",
      title: "Let's discuss your data strategy",
      subtitle: "Ready to transform your business with better data insights? Our team is ready to help you build the perfect solution.",
      info: {
        email: "Email Us",
        call: "Call Us",
        office: "Office",
      },
      form: {
        name: "Name",
        email: "Email",
        company: "Company (Optional)",
        message: "Message",
        submit: "Send Message",
        toastTitle: "Message Sent",
        toastDesc: "We'll get back to you as soon as possible.",
      },
    },
    footer: {
      description: "Empowering businesses to make smarter decisions through data transformation and beautiful visualization.",
      company: {
        title: "Company",
        about: "About Us",
        careers: "Careers",
        blog: "Blog",
        press: "Press",
      },
      legal: {
        title: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookie: "Cookie Policy",
      },
      rights: "DataLyra Inc. All rights reserved.",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      process: "Proceso",
      about: "Nosotros",
      getStarted: "Comenzar",
    },
    hero: {
      badge: "Soluciones de Inteligencia de Datos",
      title: "Transformando Datos Complejos en ",
      titleHighlight: "Decisiones Elegantes",
      subtitle: "Ayudamos a startups ambiciosas a convertir flujos de datos brutos en insights hermosos y accionables que impulsan el crecimiento y la claridad.",
      ctaPrimary: "Comienza tu Transformación",
      ctaSecondary: "Ver Nuestro Trabajo",
      metrics: {
        integration: { label: "Integración de Datos", value: "Fluida" },
        speed: { label: "Velocidad de Proceso", value: "Tiempo Real" },
        visualization: { label: "Visualización", value: "Interactiva" },
      },
    },
    features: {
      title: "Soluciones de Datos Integrales",
      subtitle: "No solo procesamos datos; creamos sistemas de inteligencia que empoderan a toda tu organización.",
      items: {
        integration: { title: "Integración de Datos", desc: "Unificamos tus fuentes de datos fragmentadas en una única fuente de verdad coherente." },
        storytelling: { title: "Narrativa Visual", desc: "Transforma hojas de cálculo áridas en dashboards interactivos y atractivos que cuentan una historia." },
        predictive: { title: "Analítica Predictiva", desc: "Ve más allá de 'qué pasó' a 'qué pasará' con nuestro modelado avanzado." },
        pipelines: { title: "Pipelines Personalizados", desc: "Procesos ETL a medida que respetan tu lógica de negocio y necesidades únicas." },
        governance: { title: "Gobierno de Datos", desc: "Asegura que tus datos sean precisos, seguros y cumplan con los estándares de la industria." },
        realtime: { title: "Insights en Tiempo Real", desc: "Dashboards que se actualizan a medida que tu negocio se mueve, permitiendo decisiones instantáneas." },
      },
    },
    showcase: {
      title: "Claridad en Cada Píxel",
      description: "Creemos que las herramientas de datos deben ser tan hermosas como funcionales. Nuestros dashboards están diseñados pensando en la ergonomía cognitiva: reduciendo la carga mental mientras maximizan la retención de insights.",
      features: {
        intuitive: { title: "Interfaces Intuitivas", desc: "Diseñadas para usuarios de negocio, no solo científicos de datos." },
        action: { title: "Diseños Orientados a la Acción", desc: "Las métricas clave se destacan para provocar una acción inmediata." },
        mobile: { title: "Responsive Móvil", desc: "Accede a tus datos críticos desde cualquier lugar, en cualquier dispositivo." },
      },
    },
    contact: {
      badge: "Contáctanos",
      title: "Hablemos de tu estrategia de datos",
      subtitle: "¿Listo para transformar tu negocio con mejores insights? Nuestro equipo está listo para ayudarte a construir la solución perfecta.",
      info: {
        email: "Escríbenos",
        call: "Llámanos",
        office: "Oficina",
      },
      form: {
        name: "Nombre",
        email: "Correo Electrónico",
        company: "Empresa (Opcional)",
        message: "Mensaje",
        submit: "Enviar Mensaje",
        toastTitle: "Mensaje Enviado",
        toastDesc: "Nos pondremos en contacto contigo lo antes posible.",
      },
    },
    footer: {
      description: "Empoderando empresas para tomar decisiones más inteligentes a través de la transformación de datos y una visualización hermosa.",
      company: {
        title: "Empresa",
        about: "Nosotros",
        careers: "Carreras",
        blog: "Blog",
        press: "Prensa",
      },
      legal: {
        title: "Legal",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        cookie: "Política de Cookies",
      },
      rights: "DataLyra Inc. Todos los derechos reservados.",
    },
  },
};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
} | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
