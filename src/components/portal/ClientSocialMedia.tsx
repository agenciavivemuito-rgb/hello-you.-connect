import React, { useState } from "react";
import { Calendar, CheckCircle, Clock, MessageSquare, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type ArtStatus = "Em criação" | "Aguardando aprovação" | "Aprovada" | "Ajustes solicitados";

interface Art {
  id: number;
  title: string;
  type: string;
  scheduledDate: string;
  status: ArtStatus;
  preview: string;
}

const initialArts: Art[] = [
  {
    id: 1,
    title: "Post Institucional",
    type: "Feed Instagram",
    scheduledDate: "25/01/2025",
    status: "Aguardando aprovação",
    preview: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Stories Promocional",
    type: "Stories",
    scheduledDate: "26/01/2025",
    status: "Aguardando aprovação",
    preview: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Carrossel Dicas",
    type: "Feed Instagram",
    scheduledDate: "28/01/2025",
    status: "Em criação",
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Post Depoimento",
    type: "Feed Instagram",
    scheduledDate: "22/01/2025",
    status: "Aprovada",
    preview: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=400&fit=crop",
  },
];

const statusConfig: Record<ArtStatus, { color: string; icon: React.ElementType }> = {
  "Em criação": { color: "text-blue-400 bg-blue-500/10", icon: Clock },
  "Aguardando aprovação": { color: "text-yellow-400 bg-yellow-500/10", icon: AlertCircle },
  "Aprovada": { color: "text-green-400 bg-green-500/10", icon: CheckCircle },
  "Ajustes solicitados": { color: "text-orange-400 bg-orange-500/10", icon: MessageSquare },
};

const ClientSocialMedia = () => {
  const { toast } = useToast();
  const [arts, setArts] = useState<Art[]>(initialArts);
  const [selectedArt, setSelectedArt] = useState<Art | null>(null);
  const [comment, setComment] = useState("");

  const handleApprove = (artId: number) => {
    setArts(arts.map((art) =>
      art.id === artId ? { ...art, status: "Aprovada" as ArtStatus } : art
    ));
    toast({
      title: "Arte aprovada!",
      description: "A equipe será notificada para seguir com a publicação.",
    });
    setSelectedArt(null);
  };

  const handleRequestChanges = (artId: number) => {
    if (!comment.trim()) {
      toast({
        title: "Comentário obrigatório",
        description: "Por favor, descreva os ajustes necessários.",
        variant: "destructive",
      });
      return;
    }
    setArts(arts.map((art) =>
      art.id === artId ? { ...art, status: "Ajustes solicitados" as ArtStatus } : art
    ));
    toast({
      title: "Ajustes solicitados",
      description: "A equipe receberá seu feedback e fará as alterações.",
    });
    setComment("");
    setSelectedArt(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold mb-2">Social Media</h1>
        <p className="text-muted-foreground">
          Visualize e aprove os conteúdos criados para suas redes sociais.
        </p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-4">
        {[
          { label: "Em criação", count: arts.filter(a => a.status === "Em criação").length },
          { label: "Aguardando aprovação", count: arts.filter(a => a.status === "Aguardando aprovação").length },
          { label: "Aprovadas", count: arts.filter(a => a.status === "Aprovada").length },
          { label: "Com ajustes", count: arts.filter(a => a.status === "Ajustes solicitados").length },
        ].map((stat, index) => (
          <div key={index} className="glass-card p-4 text-center">
            <div className="text-2xl font-bold gradient-text">{stat.count}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Calendar View */}
      <div className="glass-card p-5">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Calendário de Publicações</h3>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {arts.map((art) => {
            const StatusIcon = statusConfig[art.status].icon;
            return (
              <div
                key={art.id}
                className="glass-card-hover p-4 cursor-pointer"
                onClick={() => setSelectedArt(art)}
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted">
                  <img
                    src={art.preview}
                    alt={art.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-medium text-sm mb-1">{art.title}</h4>
                <div className="text-xs text-muted-foreground mb-2">{art.type}</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{art.scheduledDate}</span>
                  <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${statusConfig[art.status].color}`}>
                    <StatusIcon className="w-3 h-3" />
                    {art.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Art Detail Modal */}
      {selectedArt && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{selectedArt.title}</h3>
                  <p className="text-sm text-muted-foreground">{selectedArt.type} • {selectedArt.scheduledDate}</p>
                </div>
                <button
                  onClick={() => setSelectedArt(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>

              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-muted">
                <img
                  src={selectedArt.preview}
                  alt={selectedArt.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className={`inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full mb-4 ${statusConfig[selectedArt.status].color}`}>
                {React.createElement(statusConfig[selectedArt.status].icon, { className: "w-4 h-4" })}
                {selectedArt.status}
              </div>

              {selectedArt.status === "Aguardando aprovação" && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Comentários (opcional para aprovação)
                    </label>
                    <Textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Descreva os ajustes necessários..."
                      className="bg-muted/50 border-border/50"
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="hero"
                      className="flex-1"
                      onClick={() => handleApprove(selectedArt.id)}
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Aprovar
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleRequestChanges(selectedArt.id)}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Solicitar Ajustes
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientSocialMedia;
