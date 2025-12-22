import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Marketing Digital & Tecnologia</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in delay-100">
            Soluções digitais que{" "}
            <span className="gradient-text">conectam marcas</span>{" "}
            a resultados reais
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in delay-200">
            Transformamos estratégia em performance. Tráfego pago, social media, automações, 
            sites e softwares personalizados para escalar seu negócio.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
            <a href="#contato">
              <Button variant="hero" size="xl">
                Solicitar Proposta
                <ArrowRight className="ml-2" />
              </Button>
            </a>
            <Link to="/login">
              <Button variant="heroOutline" size="xl">
                Área do Cliente
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in delay-400">
            {[
              { value: "150+", label: "Clientes atendidos" },
              { value: "R$2M+", label: "Em vendas geradas" },
              { value: "98%", label: "Taxa de retenção" },
              { value: "24/7", label: "Suporte dedicado" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      </div>
    </section>
  );
};

export default HeroSection;
