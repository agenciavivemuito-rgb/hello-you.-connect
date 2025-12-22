import { Target, MessageSquare, Settings, Code, Zap, Layers } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Tráfego Pago",
    description: "Campanhas estratégicas em Meta Ads e Google Ads com foco em ROI e performance mensuráveis.",
    features: ["Meta Ads", "Google Ads", "Remarketing", "Otimização contínua"],
  },
  {
    icon: MessageSquare,
    title: "Social Media",
    description: "Gestão completa de redes sociais com estratégia, criação de conteúdo e engajamento.",
    features: ["Estratégia", "Criação de conteúdo", "Calendário editorial", "Análise de métricas"],
  },
  {
    icon: Settings,
    title: "CRM e Automações",
    description: "Implementação e gestão de CRM com automações de marketing e vendas para escalar.",
    features: ["Pipelines de vendas", "Automações", "Integrações", "Lead scoring"],
  },
  {
    icon: Layers,
    title: "Sites e Landing Pages",
    description: "Desenvolvimento de sites e landing pages otimizados para conversão e performance.",
    features: ["Design responsivo", "SEO otimizado", "Alta conversão", "Performance"],
  },
  {
    icon: Code,
    title: "Softwares e Sistemas",
    description: "Desenvolvimento de soluções personalizadas que automatizam e escalam seu negócio.",
    features: ["Sistemas web", "Apps personalizados", "Integrações", "APIs"],
  },
  {
    icon: Zap,
    title: "Consultoria Digital",
    description: "Diagnóstico e planejamento estratégico para acelerar seu crescimento digital.",
    features: ["Diagnóstico", "Planejamento", "Mentoria", "Acompanhamento"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Soluções completas para seu <span className="gradient-text">crescimento digital</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um ecossistema integrado de serviços digitais para transformar sua presença online em resultados reais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card-hover p-6 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, fIndex) => (
                  <span
                    key={fIndex}
                    className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
