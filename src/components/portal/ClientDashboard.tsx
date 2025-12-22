import { TrendingUp, Users, DollarSign, Target, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  {
    title: "Status do Projeto",
    value: "Em Escala",
    change: "Ativo",
    changeType: "positive",
    icon: Target,
  },
  {
    title: "Leads Gerados",
    value: "1.247",
    change: "+23%",
    changeType: "positive",
    icon: Users,
  },
  {
    title: "Investimento",
    value: "R$ 15.800",
    change: "Este mês",
    changeType: "neutral",
    icon: DollarSign,
  },
  {
    title: "ROI Estimado",
    value: "340%",
    change: "+12%",
    changeType: "positive",
    icon: TrendingUp,
  },
];

const services = [
  { name: "Tráfego Pago", status: "Ativo", statusColor: "text-green-400" },
  { name: "Social Media", status: "Ativo", statusColor: "text-green-400" },
  { name: "CRM e Automações", status: "Ativo", statusColor: "text-green-400" },
  { name: "Sites e LPs", status: "Manutenção", statusColor: "text-yellow-400" },
];

const ClientDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Bem-vindo(a) à sua central de <span className="gradient-text">performance</span>
        </h1>
        <p className="text-muted-foreground">
          Acompanhe todos os seus projetos e métricas em tempo real.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="glass-card p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              {stat.changeType === "positive" && (
                <span className="flex items-center text-xs text-green-400">
                  <ArrowUpRight className="w-3 h-3" />
                  {stat.change}
                </span>
              )}
              {stat.changeType === "negative" && (
                <span className="flex items-center text-xs text-red-400">
                  <ArrowDownRight className="w-3 h-3" />
                  {stat.change}
                </span>
              )}
              {stat.changeType === "neutral" && (
                <span className="text-xs text-muted-foreground">{stat.change}</span>
              )}
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.title}</div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Services */}
        <div className="glass-card p-5">
          <h3 className="font-semibold mb-4">Serviços Contratados</h3>
          <div className="space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
              >
                <span className="text-sm">{service.name}</span>
                <span className={`text-xs font-medium ${service.statusColor}`}>
                  {service.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Info */}
        <div className="glass-card p-5">
          <h3 className="font-semibold mb-4">Informações do Projeto</h3>
          <div className="space-y-4">
            <div>
              <div className="text-xs text-muted-foreground mb-1">Responsável</div>
              <div className="text-sm">Equipe Hello, you.</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Próxima Entrega</div>
              <div className="text-sm">Relatório Mensal - 30/01</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Contrato</div>
              <div className="text-sm">12 meses (Renovação em Mar/25)</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Crescimento Mensal</div>
              <div className="text-sm gradient-text font-semibold">+18.5%</div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-card p-5">
          <h3 className="font-semibold mb-4">Atividade Recente</h3>
          <div className="space-y-3">
            {[
              { text: "Nova campanha ativada", time: "Há 2h" },
              { text: "Arte aprovada para Instagram", time: "Há 5h" },
              { text: "Relatório semanal disponível", time: "Ontem" },
              { text: "Atualização de métricas", time: "Há 2 dias" },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                <div className="flex-1">
                  <div className="text-sm">{activity.text}</div>
                  <div className="text-xs text-muted-foreground">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
