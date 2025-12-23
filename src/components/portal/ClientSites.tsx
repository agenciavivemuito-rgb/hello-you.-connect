import { ExternalLink, TrendingUp, Clock, CheckCircle } from 'lucide-react'

const projects = [
  {
    name: 'Site Institucional',
    url: 'https://empresa-demo.com.br',
    status: 'Publicado',
    conversion: '4.2%',
    performance: 94,
    lastUpdate: '15/01/2025',
  },
  {
    name: 'Landing Page Vendas',
    url: 'https://empresa-demo.com.br/vendas',
    status: 'Publicado',
    conversion: '8.5%',
    performance: 98,
    lastUpdate: '20/01/2025',
  },
  {
    name: 'LP Captação Leads',
    url: 'https://empresa-demo.com.br/ebook',
    status: 'Em desenvolvimento',
    conversion: '-',
    performance: null,
    lastUpdate: '22/01/2025',
  },
]

const ClientSites = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold mb-2">Sites e Landing Pages</h1>
        <p className="text-muted-foreground">
          Acompanhe o status e performance dos seus projetos web.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="glass-card p-5">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              {/* Project Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold">{project.name}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Publicado'
                        ? 'bg-green-500/10 text-green-400'
                        : 'bg-yellow-500/10 text-yellow-400'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  {project.url}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Metrics */}
              <div className="flex items-center gap-6">
                {project.performance && (
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">
                      Performance
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          style={{ width: `${project.performance}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">
                        {project.performance}
                      </span>
                    </div>
                  </div>
                )}
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">
                    Lançamento
                  </div>
                  <div className="text-sm">{project.lastUpdate}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">
                    Última atualização
                  </div>
                  <div className="text-sm">{project.lastUpdate}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Notes */}
      <div className="glass-card p-5">
        <h3 className="font-semibold mb-4">Observações Técnicas</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
            <div>
              <div className="font-medium text-sm mb-1">Site Institucional</div>
              <p className="text-sm text-muted-foreground">
                Certificado SSL configurado e renovado automaticamente para
                todos os projetos.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
            <div>
              <div className="font-medium text-sm mb-1">
                Landing Page Vendas
              </div>
              <p className="text-sm text-muted-foreground">
                Todas as páginas estão otimizadas para mecanismos de busca com
                meta tags e schema markup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientSites
