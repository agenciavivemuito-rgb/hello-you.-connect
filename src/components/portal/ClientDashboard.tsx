import {
  TrendingUp,
  Users,
  DollarSign,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Calendar,
  FileText,
  Check,
  CheckCircle,
  Clock1,
  AlertTriangle,
} from 'lucide-react'

const stats = [
  {
    title: 'Status do Projeto',
    value: 'Em Escala',
    change: 'Ativo',
    changeType: 'positive',
    icon: Target,
  },
  {
    title: 'Leads Gerados',
    value: '1.247',
    change: '+23%',
    changeType: 'positive',
    icon: Users,
  },
  {
    title: 'Investimento',
    value: 'R$ 15.800',
    change: 'Este mês',
    changeType: 'neutral',
    icon: DollarSign,
  },
  {
    title: 'ROI Estimado',
    value: '340%',
    change: '+12%',
    changeType: 'positive',
    icon: TrendingUp,
  },
]

const services = [
  { name: 'Tráfego Pago', status: 'Ativo', statusColor: 'text-green-400' },
  { name: 'Social Media', status: 'Ativo', statusColor: 'text-green-400' },
  { name: 'Sites e LPs', status: 'Manutenção', statusColor: 'text-yellow-400' },
]

const pendingActivities = [
  {
    text: 'Aprovar artes para campanha de Janeiro',
    time: 'Pendente há 2 dias',
  },
  { text: 'Revisar relatório de performance', time: 'Pendente há 1 dia' },
  { text: 'Enviar briefing para próxima campanha', time: 'Pendente há 3 dias' },
  { text: 'Validar novos anúncios', time: 'Pendente há 5 dias' },
]

const recentActivities = [
  { text: 'Nova campanha ativada', time: 'Há 2h' },
  { text: 'Arte aprovada para Instagram', time: 'Há 5h' },
  { text: 'Relatório semanal disponível', time: 'Ontem' },
  { text: 'Atualização de métricas', time: 'Há 2 dias' },
]

const ClientDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Bem-vindo(a) à sua central de{' '}
          <span className="gradient-text">performance</span>
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
              {stat.changeType === 'positive' && (
                <span className="flex items-center text-xs text-green-400">
                  <ArrowUpRight className="w-3 h-3" />
                  {stat.change}
                </span>
              )}
              {stat.changeType === 'negative' && (
                <span className="flex items-center text-xs text-red-400">
                  <ArrowDownRight className="w-3 h-3" />
                  {stat.change}
                </span>
              )}
              {stat.changeType === 'neutral' && (
                <span className="text-xs text-muted-foreground">
                  {stat.change}
                </span>
              )}
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.title}</div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Informações Contratuais (Bloco Unificado) */}
        <div className="glass-card p-5">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Informações Contratuais
          </h3>
          <div className="space-y-5">
            {/* Módulos Contratados */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">
                Módulos Contratados
              </h4>
              <div className="space-y-2">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                  >
                    <span className="text-sm">{service.name}</span>
                    <span
                      className={`text-xs font-medium ${service.statusColor}`}
                    >
                      {service.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Informações Contratuais */}
            <div className="space-y-4 pt-4 border-t">
              <div>
                <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                  <DollarSign className="w-3 h-3" />
                  Valor Total
                </div>
                <div className="text-sm font-medium">R$ 47.400,00</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Data de Início
                </div>
                <div className="text-sm">01/03/2024</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  Data de Término
                </div>
                <div className="text-sm">01/03/2025</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">
                  Responsável
                </div>
                <div className="text-sm">Equipe Hello, you.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Atividades Recente */}
        <div className="glass-card p-5">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Atividades Recentes
          </h3>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-sm">{activity.text}</div>
                  <div className="text-xs text-muted-foreground">
                    {activity.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tarefas Pendentes (Novo Bloco) */}
        <div className="glass-card p-5">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-500" />
            Tarefas Pendentes
          </h3>
          <div className="space-y-3">
            {pendingActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-muted/30 dark:bg-amber-900/20 rounded-lg dark:border-amber-800/50"
              >
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-sm">{activity.text}</div>
                  <div className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                    {activity.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientDashboard
