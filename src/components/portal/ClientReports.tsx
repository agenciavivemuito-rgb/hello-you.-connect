import { FileText, Download, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  {
    title: "Relatório Mensal - Janeiro 2025",
    date: "20/01/2025",
    type: "Mensal",
    status: "Disponível",
  },
  {
    title: "Relatório Mensal - Dezembro 2024",
    date: "15/12/2024",
    type: "Mensal",
    status: "Disponível",
  },
  {
    title: "Relatório Mensal - Novembro 2024",
    date: "18/11/2024",
    type: "Mensal",
    status: "Disponível",
  },
];

const decisions = [
  {
    date: "18/01/2025",
    title: "Aumento de orçamento em Meta Ads",
    description: "Aprovado aumento de 20% no orçamento da campanha principal.",
  },
  {
    date: "10/01/2025",
    title: "Nova estratégia de conteúdo",
    description: "Implementação de carrosséis semanais no Instagram.",
  },
  {
    date: "05/01/2025",
    title: "Integração com WhatsApp",
    description: "Ativação da integração para atendimento automatizado.",
  },
];

const ClientReports = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold mb-2">Relatórios e Comunicação</h1>
        <p className="text-muted-foreground">
          Acesse relatórios mensais e histórico de decisões estratégicas.
        </p>
      </div>

      {/* Reports List */}
      <div className="glass-card p-5">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Relatórios Mensais</h3>
        </div>
        <div className="space-y-3">
          {reports.map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{report.title}</div>
                  <div className="text-xs text-muted-foreground">{report.date}</div>
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

      {/* Decisions History */}
      <div className="glass-card p-5">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Histórico de Decisões</h3>
        </div>
        <div className="space-y-4">
          {decisions.map((decision, index) => (
            <div key={index} className="relative pl-6 pb-4 border-l border-border last:pb-0">
              <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-primary -translate-x-1.5" />
              <div className="text-xs text-muted-foreground mb-1">{decision.date}</div>
              <div className="font-medium mb-1">{decision.title}</div>
              <p className="text-sm text-muted-foreground">{decision.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="glass-card p-5">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Mensagens</h3>
        </div>
        <div className="p-8 text-center bg-muted/30 rounded-lg">
          <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground mb-4">
            Sistema de mensagens em desenvolvimento.
          </p>
          <Button variant="outline">
            Contatar via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClientReports;
