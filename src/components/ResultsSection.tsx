import { TrendingUp, Users, Zap, BarChart3, CheckCircle } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Performance',
    description:
      'Campanhas otimizadas para maximizar seu ROI e resultados mensuráveis.',
    stat: '+300%',
    statLabel: 'ROI médio',
  },
  {
    icon: Users,
    title: 'Crescimento',
    description:
      'Aquisição de clientes qualificados através de estratégias data-driven.',
    stat: '10x',
    statLabel: 'mais leads',
  },
  {
    icon: Zap,
    title: 'Automação',
    description:
      'Processos automatizados que economizam tempo e aumentam eficiência.',
    stat: '80%',
    statLabel: 'menos tempo',
  },
  {
    icon: BarChart3,
    title: 'Escalabilidade',
    description:
      'Estrutura preparada para escalar seu negócio de forma sustentável.',
    stat: '∞',
    statLabel: 'potencial',
  },
]

const ResultsSection = () => {
  return (
    <section id="resultados" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Resultados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            O que você pode <span className="gradient-text">esperar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entregamos resultados tangíveis que impactam diretamente o
            crescimento do seu negócio.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-card-hover p-6 text-center group">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Stat */}
              <div className="text-4xl font-bold gradient-text mb-1">
                {benefit.stat}
              </div>
              <div className="text-xs text-muted-foreground mb-3">
                {benefit.statLabel}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        {/* <div className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Por que escolher a <span className="gradient-text">Hello, you.</span>?
              </h3>
              <p className="text-muted-foreground mb-6">
                Combinamos expertise em marketing digital com tecnologia de ponta para criar soluções que realmente funcionam.
              </p>

              <div className="space-y-3">
                {[
                  "Equipe especializada em performance",
                  "Relatórios transparentes em tempo real",
                  "Estratégias personalizadas para seu negócio",
                  "Suporte dedicado e proativo",
                  "Foco em resultados mensuráveis",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text">98%</div>
                  <div className="text-muted-foreground mt-2">Taxa de satisfação</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default ResultsSection
