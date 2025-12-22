import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const clients = [
  { id: 1, name: "Empresa Demo", email: "demo@empresa.com", status: "Ativo", services: 4 },
  { id: 2, name: "Tech Solutions", email: "contato@tech.com", status: "Ativo", services: 3 },
  { id: 3, name: "Loja Virtual", email: "admin@loja.com", status: "Ativo", services: 2 },
];

const AdminClients = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <Button variant="hero"><Plus className="w-4 h-4 mr-2" />Novo Cliente</Button>
      </div>
      <div className="glass-card p-5">
        <div className="flex gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Buscar cliente..." className="pl-10 bg-muted/50" />
          </div>
        </div>
        <div className="space-y-3">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <div className="font-medium">{client.name}</div>
                <div className="text-sm text-muted-foreground">{client.email}</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-green-400">{client.status}</span>
                <Button variant="outline" size="sm">Gerenciar</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminClients;
