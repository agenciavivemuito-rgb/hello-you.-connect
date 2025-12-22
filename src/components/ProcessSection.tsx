import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    description: "Analisamos seu negócio, mercado e concorrência para identificar oportunidades e desafios.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Estratégia",
    description: "Desenvolvemos um plano personalizado com metas claras, KPIs e cronograma de ações.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Execução",
    description: "Implementamos as estratégias com agilidade, monitorando cada etapa em tempo real.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Otimização",
    description: "Analisamos resultados continuamente, otimizamos e aprimoramos para maximizar o seu retorno.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-20 md:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Metodologia</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Como <span className="gradient-text">trabalhamos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um processo estruturado e transparente para garantir resultados consistentes.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="glass-card p-6 text-center relative z-10 group-hover:border-primary/30 transition-colors">
                {/* Number */}
                <span className="text-5xl font-bold gradient-text opacity-20 absolute top-4 right-4">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
