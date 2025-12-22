import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageCircle, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-20 md:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Contato</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Vamos conversar sobre seu <span className="gradient-text">projeto</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Preencha o formulário e nossa equipe entrará em contato para entender suas necessidades e apresentar a melhor solução.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">Resposta rápida</div>
                </div>
              </a>

              <a
                href="mailto:contato@helloyou.com.br"
                className="flex items-center gap-4 p-4 glass-card hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">contato@helloyou.com.br</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="glass-card p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Telefone</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="bg-muted/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Empresa</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome da empresa"
                    className="bg-muted/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Mensagem *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={4}
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
