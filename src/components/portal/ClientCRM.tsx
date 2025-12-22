import { Users, GitBranch, Zap, Link2 } from "lucide-react";

const funnels = [
  { name: "Funil de Vendas Principal", leads: 342, conversion: "12%", status: "Ativo" },
  { name: "Funil de Captação", leads: 567, conversion: "8%", status: "Ativo" },
  { name: "Funil de Reengajamento", leads: 128, conversion: "15%", status: "Ativo" },
];

const automations = [
  { name: "Email de Boas-vindas", triggers: 1250, status: "Ativo" },
  { name: "Sequência de Nutrição", triggers: 890, status: "Ativo" },
  { name: "Lembrete de Carrinho", triggers: 234, status: "Ativo" },
  { name: "Follow-up Pós-Venda", triggers: 156, status: "Ativo" },
];

const integrations = [
  { name: "WhatsApp Business", status: "Conectado" },
  { name: "Google Sheets", status: "Conectado" },
  { name: "Email Marketing", status: "Conectado" },
  { name: "CRM Interno", status: "Conectado" },
];

const ClientCRM = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold mb-2">CRM e Automações</h1>
        <p className="text-muted-foreground">
          Acompanhe seus funis de vendas, automações e integrações ativas.
        </p>
      </div>

      {/* Summary */}
      <div className="grid sm:grid-cols-4 gap-4">
        {[
          { label: "Leads no CRM", value: "1.037", icon: Users },
          { label: "Funis Ativos", value: "3", icon: GitBranch },
          { label: "Automações", value: "4", icon: Zap },
          { label: "Integrações", value: "4", icon: Link2 },
        ].map((stat, index) => (
          <div key={index} className="glass-card p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Funnels */}
      <div className="glass-card p-5">
        <h3 className="font-semibold mb-4">Funis Configurados</h3>
        <div className="space-y-3">
          {funnels.map((funnel, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{funnel.name}</div>
                  <div className="text-xs text-muted-foreground">{funnel.leads} leads ativos</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium gradient-text">{funnel.conversion}</div>
                <div className="text-xs text-muted-foreground">Conversão</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Automations & Integrations Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Automations */}
        <div className="glass-card p-5">
          <h3 className="font-semibold mb-4">Automações Ativas</h3>
          <div className="space-y-3">
            {automations.map((auto, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm">{auto.name}</span>
                </div>
                <div className="text-xs text-muted-foreground">{auto.triggers} triggers</div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="glass-card p-5">
          <h3 className="font-semibold mb-4">Integrações</h3>
          <div className="space-y-3">
            {integrations.map((integration, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <Link2 className="w-4 h-4 text-primary" />
                  <span className="text-sm">{integration.name}</span>
                </div>
                <span className="text-xs text-green-400">{integration.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lead Status */}
      <div className="glass-card p-5">
        <h3 className="font-semibold mb-4">Status dos Leads</h3>
        <div className="grid sm:grid-cols-5 gap-4">
          {[
            { stage: "Novo", count: 234, color: "bg-blue-500" },
            { stage: "Qualificado", count: 156, color: "bg-cyan-500" },
            { stage: "Em Negociação", count: 89, color: "bg-yellow-500" },
            { stage: "Proposta", count: 45, color: "bg-orange-500" },
            { stage: "Fechado", count: 513, color: "bg-green-500" },
          ].map((stage, index) => (
            <div key={index} className="text-center">
              <div className={`h-2 rounded-full ${stage.color} mb-2`} />
              <div className="text-xl font-bold">{stage.count}</div>
              <div className="text-xs text-muted-foreground">{stage.stage}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCRM;
