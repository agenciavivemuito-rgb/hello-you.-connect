import { Users, DollarSign, TrendingUp, BarChart3 } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Dashboard <span className="gradient-text">Admin</span></h1>
        <p className="text-muted-foreground">Visão geral de todos os clientes e projetos.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Clientes Ativos", value: "24", icon: Users },
          { label: "Receita Mensal", value: "R$ 85.400", icon: DollarSign },
          { label: "Leads Gerados", value: "3.847", icon: TrendingUp },
          { label: "ROI Médio", value: "285%", icon: BarChart3 },
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
    </div>
  );
};

export default AdminDashboard;
