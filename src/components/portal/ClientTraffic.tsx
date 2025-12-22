import { BarChart3, TrendingUp, DollarSign, Users, Eye } from "lucide-react";

const campaigns = [
  {
    name: "Campanha Vendas Q1",
    platform: "Meta Ads",
    status: "Ativa",
    investment: "R$ 5.200",
    cpc: "R$ 1,45",
    cpa: "R$ 28,50",
    leads: 182,
    conversions: 45,
  },
  {
    name: "Remarketing Geral",
    platform: "Meta Ads",
    status: "Ativa",
    investment: "R$ 2.800",
    cpc: "R$ 0,95",
    cpa: "R$ 15,20",
    leads: 184,
    conversions: 62,
  },
  {
    name: "Search Institucional",
    platform: "Google Ads",
    status: "Ativa",
    investment: "R$ 4.500",
    cpc: "R$ 2,80",
    cpa: "R$ 35,00",
    leads: 128,
    conversions: 38,
  },
  {
    name: "Display Awareness",
    platform: "Google Ads",
    status: "Pausada",
    investment: "R$ 1.200",
    cpc: "R$ 0,45",
    cpa: "R$ 18,00",
    leads: 67,
    conversions: 12,
  },
];

const ClientTraffic = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold mb-2">Tráfego Pago</h1>
        <p className="text-muted-foreground">
          Acompanhe o desempenho das suas campanhas em Meta Ads e Google Ads.
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Investimento Total", value: "R$ 13.700", icon: DollarSign },
          { label: "Leads Gerados", value: "561", icon: Users },
          { label: "Conversões", value: "157", icon: TrendingUp },
          { label: "CPA Médio", value: "R$ 24,18", icon: BarChart3 },
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

      {/* Campaigns Table */}
      <div className="glass-card overflow-hidden">
        <div className="p-5 border-b border-border">
          <h3 className="font-semibold">Campanhas Ativas</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/30">
              <tr>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Campanha</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Plataforma</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Status</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Investimento</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">CPC</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">CPA</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Leads</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Conversões</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign, index) => (
                <tr key={index} className="border-b border-border/50 hover:bg-muted/20">
                  <td className="px-5 py-4 text-sm font-medium">{campaign.name}</td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">{campaign.platform}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        campaign.status === "Ativa"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm">{campaign.investment}</td>
                  <td className="px-5 py-4 text-sm">{campaign.cpc}</td>
                  <td className="px-5 py-4 text-sm">{campaign.cpa}</td>
                  <td className="px-5 py-4 text-sm">{campaign.leads}</td>
                  <td className="px-5 py-4 text-sm">{campaign.conversions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Strategic Notes */}
      <div className="glass-card p-5">
        <h3 className="font-semibold mb-4">Observações Estratégicas</h3>
        <div className="space-y-3">
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-sm font-medium mb-1">Campanha Vendas Q1</div>
            <p className="text-sm text-muted-foreground">
              Performance excelente. Recomendamos aumentar o orçamento em 20% para escalar os resultados.
            </p>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-sm font-medium mb-1">Display Awareness</div>
            <p className="text-sm text-muted-foreground">
              Campanha pausada para otimização de criativos. Novos anúncios serão ativados na próxima semana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTraffic;
