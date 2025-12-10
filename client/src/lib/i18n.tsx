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
      integration: { title: string; desc: string; detail: string; steps: { title: string; desc: string; duration: string }[] };
      storytelling: { title: string; desc: string; detail: string; steps: { title: string; desc: string; duration: string }[] };
      predictive: { title: string; desc: string; detail: string; steps: { title: string; desc: string; duration: string }[] };
      pipelines: { title: string; desc: string; detail: string; steps: { title: string; desc: string; duration: string }[] };
      governance: { title: string; desc: string; detail: string; steps: { title: string; desc: string; duration: string }[] };
      realtime: { title: string; desc: string; detail: string; steps: { title: string; desc: string; duration: string }[] };
    };
  };
  process: {
    title: string;
    subtitle: string;
    steps: {
      step1: { title: string; desc: string };
      step2: { title: string; desc: string };
      step3: { title: string; desc: string };
    };
  };
  about: {
    title: string;
    subtitle: string;
    mission: { title: string; desc: string };
    vision: { title: string; desc: string };
    team: { title: string; desc: string };
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
        integration: { 
          title: "Data Integration", 
          desc: "We unify your fragmented data sources into a single, coherent source of truth.",
          detail: "Our integration layer connects to over 150+ data sources including SQL databases, REST APIs, and legacy systems. We handle the complexity of schema mapping and normalization so you don't have to.",
          steps: [
            { title: "Connect", desc: "Secure API handshake and credential verification", duration: "1 week" },
            { title: "Normalize", desc: "Standardize data formats across sources", duration: "2 weeks" },
            { title: "Sync", desc: "Establish continuous data flow pipelines", duration: "1 week" }
          ]
        },
        storytelling: { 
          title: "Visual Storytelling", 
          desc: "Transform dry spreadsheets into compelling, interactive dashboards that tell a story.",
          detail: "We apply principles of cognitive psychology and information design to create dashboards that guide the user's attention to what matters most, reducing time-to-insight.",
          steps: [
            { title: "Analyze", desc: "Identify key business metrics and KPIs", duration: "1 week" },
            { title: "Design", desc: "UX/UI Prototyping and user testing", duration: "2 weeks" },
            { title: "Deploy", desc: "Launch interactive production dashboard", duration: "1 week" }
          ]
        },
        predictive: { 
          title: "Predictive Analytics", 
          desc: "Go beyond 'what happened' to 'what will happen' with our advanced modeling.",
          detail: "Leveraging state-of-the-art machine learning models, we help you forecast trends, churn, and revenue with high accuracy, allowing you to be proactive rather than reactive.",
          steps: [
            { title: "Train", desc: "Develop model on historical data", duration: "3 weeks" },
            { title: "Test", desc: "Validate accuracy against holdout sets", duration: "1 week" },
            { title: "Forecast", desc: "Generate future trend predictions", duration: "Ongoing" }
          ]
        },
        pipelines: { 
          title: "Custom Pipelines", 
          desc: "Tailored ETL processes that respect your unique business logic and needs.",
          detail: "We build robust, scalable ETL/ELT pipelines using modern orchestration tools. Our pipelines are monitored 24/7 and include automated data quality checks.",
          steps: [
            { title: "Extract", desc: "Raw data collection strategy", duration: "1 week" },
            { title: "Transform", desc: "Business logic processing and cleaning", duration: "2 weeks" },
            { title: "Load", desc: "Optimized warehouse storage", duration: "1 week" }
          ]
        },
        governance: { 
          title: "Data Governance", 
          desc: "Ensure your data is accurate, secure, and compliant with industry standards.",
          detail: "We implement role-based access control, audit logs, and data lineage tracking to ensure you meet GDPR, CCPA, and SOC2 compliance requirements.",
          steps: [
            { title: "Audit", desc: "Current access and security review", duration: "1 week" },
            { title: "Policy", desc: "Rule definition and implementation", duration: "2 weeks" },
            { title: "Monitor", desc: "Compliance tracking setup", duration: "1 week" }
          ]
        },
        realtime: { 
          title: "Real-time Insights", 
          desc: "Dashboards that update as your business moves, enabling instant decision making.",
          detail: "Using streaming technologies like Kafka and WebSockets, we deliver sub-second latency updates to your critical operational dashboards.",
          steps: [
            { title: "Stream", desc: "Event capture configuration", duration: "2 weeks" },
            { title: "Process", desc: "In-memory stream computation", duration: "2 weeks" },
            { title: "Push", desc: "Live client-side updates", duration: "1 week" }
          ]
        },
      },
    },
    process: {
      title: "Our Process",
      subtitle: "A streamlined approach to unlocking your data's potential.",
      steps: {
        step1: { title: "We integrate with your systems", desc: "Seamless connection to your existing infrastructure without disruption." },
        step2: { title: "We understand your challenges", desc: "Deep dive into your business logic and key performance indicators." },
        step3: { title: "We adapt technology and solve", desc: "Custom implementation of data solutions that drive results." },
      }
    },
    about: {
      title: "About DataLyra",
      subtitle: "We are a team of data engineers, designers, and strategists passionate about making data accessible.",
      mission: { title: "Our Mission", desc: "To democratize data intelligence for startups and growing enterprises." },
      vision: { title: "Our Vision", desc: "A world where every business decision is backed by clear, accurate, and beautiful data." },
      team: { title: "The Team", desc: "Founded by industry veterans from top tech companies." },
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
        integration: { 
          title: "Integración de Datos", 
          desc: "Unificamos tus fuentes de datos fragmentadas en una única fuente de verdad coherente.",
          detail: "Nuestra capa de integración se conecta a más de 150 fuentes de datos, incluyendo bases de datos SQL, APIs REST y sistemas heredados. Manejamos la complejidad del mapeo de esquemas y la normalización.",
          steps: [
            { title: "Conectar", desc: "Conexión segura y verificación de credenciales", duration: "1 semana" },
            { title: "Normalizar", desc: "Estandarizar formatos entre fuentes", duration: "2 semanas" },
            { title: "Sincronizar", desc: "Establecer flujo continuo de datos", duration: "1 semana" }
          ]
        },
        storytelling: { 
          title: "Narrativa Visual", 
          desc: "Transforma hojas de cálculo áridas en dashboards interactivos y atractivos que cuentan una historia.",
          detail: "Aplicamos principios de psicología cognitiva y diseño de información para crear dashboards que guían la atención del usuario a lo que más importa.",
          steps: [
            { title: "Analizar", desc: "Identificar métricas clave y KPIs", duration: "1 semana" },
            { title: "Diseñar", desc: "Prototipado UX/UI y pruebas de usuario", duration: "2 semanas" },
            { title: "Desplegar", desc: "Lanzamiento de dashboard interactivo", duration: "1 semana" }
          ]
        },
        predictive: { 
          title: "Analítica Predictiva", 
          desc: "Ve más allá de 'qué pasó' a 'qué pasará' con nuestro modelado avanzado.",
          detail: "Aprovechando modelos de aprendizaje automático de última generación, te ayudamos a pronosticar tendencias, rotación y ventas con alta precisión.",
          steps: [
            { title: "Entrenar", desc: "Desarrollo de modelo con datos históricos", duration: "3 semanas" },
            { title: "Probar", desc: "Validar precisión con sets de prueba", duration: "1 semana" },
            { title: "Pronosticar", desc: "Generar predicciones futuras", duration: "Continuo" }
          ]
        },
        pipelines: { 
          title: "Pipelines Personalizados", 
          desc: "Procesos ETL a medida que respetan tu lógica de negocio y necesidades únicas.",
          detail: "Construimos pipelines ETL/ELT robustos y escalables utilizando herramientas modernas de orquestación. Nuestros pipelines son monitoreados 24/7.",
          steps: [
            { title: "Extraer", desc: "Estrategia de recolección de datos brutos", duration: "1 semana" },
            { title: "Transformar", desc: "Procesamiento de lógica de negocio", duration: "2 semanas" },
            { title: "Cargar", desc: "Almacenamiento optimizado en warehouse", duration: "1 semana" }
          ]
        },
        governance: { 
          title: "Gobierno de Datos", 
          desc: "Asegura que tus datos sean precisos, seguros y cumplan con los estándares de la industria.",
          detail: "Implementamos control de acceso basado en roles, registros de auditoría y seguimiento del linaje de datos para garantizar el cumplimiento de GDPR y otros estándares.",
          steps: [
            { title: "Auditar", desc: "Revisión de seguridad y accesos actuales", duration: "1 semana" },
            { title: "Política", desc: "Definición e implementación de reglas", duration: "2 semanas" },
            { title: "Monitorear", desc: "Configuración de seguimiento de cumplimiento", duration: "1 semana" }
          ]
        },
        realtime: { 
          title: "Insights en Tiempo Real", 
          desc: "Dashboards que se actualizan a medida que tu negocio se mueve, permitiendo decisiones instantáneas.",
          detail: "Usando tecnologías de streaming como Kafka y WebSockets, entregamos actualizaciones de latencia inferior a un segundo a tus dashboards operativos críticos.",
          steps: [
            { title: "Stream", desc: "Configuración de captura de eventos", duration: "2 semanas" },
            { title: "Procesar", desc: "Computación de stream en memoria", duration: "2 semanas" },
            { title: "Push", desc: "Actualizaciones en vivo al cliente", duration: "1 semana" }
          ]
        },
      },
    },
    process: {
      title: "Nuestro Proceso",
      subtitle: "Un enfoque simplificado para desbloquear el potencial de tus datos.",
      steps: {
        step1: { title: "Nos integramos a tus sistemas", desc: "Conexión fluida a tu infraestructura existente sin interrupciones." },
        step2: { title: "Entendemos tus desafíos", desc: "Profundizamos en tu lógica de negocio e indicadores clave de rendimiento." },
        step3: { title: "Adaptamos tecnología y solucionamos", desc: "Implementación personalizada de soluciones de datos que impulsan resultados." },
      }
    },
    about: {
      title: "Sobre DataLyra",
      subtitle: "Somos un equipo de ingenieros de datos, diseñadores y estrategas apasionados por hacer los datos accesibles.",
      mission: { title: "Nuestra Misión", desc: "Democratizar la inteligencia de datos para startups y empresas en crecimiento." },
      vision: { title: "Nuestra Visión", desc: "Un mundo donde cada decisión empresarial esté respaldada por datos claros, precisos y hermosos." },
      team: { title: "El Equipo", desc: "Fundado por veteranos de la industria de las principales empresas tecnológicas." },
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
