import { FileText, Download, MessageSquare, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

const reports = [
  {
    title: 'Relatório Mensal - Janeiro 2025',
    date: '20/01/2025',
    status: 'Disponível',
  },
  {
    title: 'Relatório Mensal - Dezembro 2024',
    date: '15/12/2024',
    status: 'Disponível',
  },
  {
    title: 'Contrato de Serviços',
    date: '18/11/2024',
    status: 'Disponível',
  },
]

const ClientReports = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold mb-2">Relatórios e Contratos</h1>
        <p className="text-muted-foreground">
          Acesse relatórios mensais e histórico de contratos.
        </p>
      </div>

      {/* Reports List */}
      <div className="glass-card p-5">
        <div className="space-y-3">
          {reports.map((report, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{report.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {report.date}
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Baixar
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientReports
