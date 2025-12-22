import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'Tráfego Pago',
    'Social Media',
    'CRM e Automações',
    'Sites e Landing Pages',
    'Softwares e Sistemas',
  ]

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/hellou.ag',
      label: 'Instagram',
    },
    // { icon: Linkedin, href: "https://linkedin.com/company/helloyou", label: "LinkedIn" },
    // { icon: Facebook, href: "https://facebook.com/helloyou", label: "Facebook" },
    // { icon: Youtube, href: "https://youtube.com/helloyou", label: "YouTube" },
  ]

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="../../public/icon.png" alt="Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">
                Hello, <span className="gradient-text">you.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              Agência de marketing digital e tecnologia focada em performance e
              resultados reais. Transformamos estratégia em crescimento.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre nós
                </a>
              </li>
              <li>
                <a
                  href="#processo"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Como trabalhamos
                </a>
              </li>
              <li>
                <a
                  href="#resultados"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Resultados
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Área do Cliente
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Hello, you. Todos os direitos reservados.
          </p>
          {/* <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Termos
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
