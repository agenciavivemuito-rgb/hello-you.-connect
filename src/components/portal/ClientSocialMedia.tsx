import React, { useState } from 'react'
import {
  Calendar,
  CheckCircle,
  Clock,
  MessageSquare,
  AlertCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'

type ArtStatus =
  | 'Em criação'
  | 'Aguardando aprovação'
  | 'Aprovada'
  | 'Ajustes solicitados'

interface Media {
  id: number
  type: 'image' | 'video'
  url: string
  thumbnail?: string
}

interface Art {
  id: number
  title: string
  type: string
  scheduledDate: string
  status: ArtStatus
  media: Media[]
  description?: string
}

const initialArts: Art[] = [
  {
    id: 1,
    title: 'Campanha de Verão',
    type: 'Carrossel Instagram',
    scheduledDate: '25/01/2025',
    status: 'Aguardando aprovação',
    description: 'Conjunto de posts para a campanha de verão 2025',
    media: [
      {
        id: 1,
        type: 'image',
        url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=800&fit=crop',
      },
      {
        id: 2,
        type: 'image',
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop',
      },
      {
        id: 3,
        type: 'image',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop',
      },
    ],
  },
  {
    id: 2,
    title: 'Stories Promocional',
    type: 'Stories',
    scheduledDate: '26/01/2025',
    status: 'Aguardando aprovação',
    media: [
      {
        id: 1,
        type: 'video',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        thumbnail:
          'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=800&h=800&fit=crop',
      },
    ],
  },
  {
    id: 3,
    title: 'Post Único',
    type: 'Feed Instagram',
    scheduledDate: '28/01/2025',
    status: 'Em criação',
    media: [
      {
        id: 1,
        type: 'image',
        url: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w-800&h=800&fit=crop',
      },
    ],
  },
]

const statusConfig: Record<
  ArtStatus,
  { color: string; icon: React.ElementType }
> = {
  'Em criação': { color: 'text-blue-400 bg-blue-500/10', icon: Clock },
  'Aguardando aprovação': {
    color: 'text-yellow-400 bg-yellow-500/10',
    icon: AlertCircle,
  },
  Aprovada: { color: 'text-green-400 bg-green-500/10', icon: CheckCircle },
  'Ajustes solicitados': {
    color: 'text-orange-400 bg-orange-500/10',
    icon: MessageSquare,
  },
}

const ClientSocialMedia = () => {
  const { toast } = useToast()
  const [arts, setArts] = useState<Art[]>(initialArts)
  const [selectedArt, setSelectedArt] = useState<Art | null>(null)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [showApproveDialog, setShowApproveDialog] = useState(false)
  const [showRejectDialog, setShowRejectDialog] = useState(false)
  const [rejectionComment, setRejectionComment] = useState('')

  const handleApprove = (artId: number) => {
    setArts(
      arts.map((art) =>
        art.id === artId ? { ...art, status: 'Aprovada' as ArtStatus } : art
      )
    )
    toast({
      title: 'Arte aprovada!',
      description: 'A equipe será notificada para seguir com a publicação.',
    })
    setSelectedArt(null)
    setShowApproveDialog(false)
  }

  const handleRequestChanges = (artId: number) => {
    if (!rejectionComment.trim()) {
      toast({
        title: 'Comentário obrigatório',
        description: 'Por favor, descreva os ajustes necessários.',
        variant: 'destructive',
      })
      return
    }
    setArts(
      arts.map((art) =>
        art.id === artId
          ? { ...art, status: 'Ajustes solicitados' as ArtStatus }
          : art
      )
    )
    toast({
      title: 'Ajustes solicitados',
      description: 'A equipe receberá seu feedback e fará as alterações.',
    })
    setRejectionComment('')
    setSelectedArt(null)
    setShowRejectDialog(false)
  }

  const handleNextMedia = () => {
    if (selectedArt) {
      setCurrentMediaIndex((prev) =>
        prev === selectedArt.media.length - 1 ? 0 : prev + 1
      )
    }
  }

  const handlePrevMedia = () => {
    if (selectedArt) {
      setCurrentMediaIndex((prev) =>
        prev === 0 ? selectedArt.media.length - 1 : prev - 1
      )
    }
  }

  const openApproveDialog = () => {
    setShowApproveDialog(true)
  }

  const openRejectDialog = () => {
    setShowRejectDialog(true)
  }

  const resetModal = () => {
    setSelectedArt(null)
    setCurrentMediaIndex(0)
    setRejectionComment('')
  }

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
          {
            label: 'Em criação',
            count: arts.filter((a) => a.status === 'Em criação').length,
          },
          {
            label: 'Aguardando aprovação',
            count: arts.filter((a) => a.status === 'Aguardando aprovação')
              .length,
          },
          {
            label: 'Aprovadas',
            count: arts.filter((a) => a.status === 'Aprovada').length,
          },
          {
            label: 'Com ajustes',
            count: arts.filter((a) => a.status === 'Ajustes solicitados')
              .length,
          },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {arts.map((art) => {
            const StatusIcon = statusConfig[art.status].icon
            const mainMedia = art.media[0]

            return (
              <div
                key={art.id}
                className="glass-card-hover p-4 cursor-pointer"
                onClick={() => {
                  setSelectedArt(art)
                  setCurrentMediaIndex(0)
                }}
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-muted relative">
                  {mainMedia.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  <img
                    src={mainMedia.thumbnail || mainMedia.url}
                    alt={art.title}
                    className="w-full h-full object-cover"
                  />
                  {art.media.length > 1 && (
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                      +{art.media.length - 1}
                    </div>
                  )}
                </div>
                <h4 className="font-medium text-sm mb-1">{art.title}</h4>
                <div className="text-xs text-muted-foreground mb-2">
                  {art.type}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {art.scheduledDate}
                  </span>
                  <span
                    className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                      statusConfig[art.status].color
                    }`}
                  >
                    <StatusIcon className="w-3 h-3" />
                    {art.status}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Art Detail Modal */}
      {selectedArt && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{selectedArt.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedArt.type} • {selectedArt.scheduledDate}
                    {selectedArt.description && ` • ${selectedArt.description}`}
                  </p>
                </div>
                <button
                  onClick={resetModal}
                  className="text-muted-foreground hover:text-foreground p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Media Carousel */}
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-muted">
                {selectedArt.media[currentMediaIndex].type === 'video' ? (
                  <video
                    src={selectedArt.media[currentMediaIndex].url}
                    className="w-full h-full object-cover"
                    controls
                    poster={selectedArt.media[currentMediaIndex].thumbnail}
                  />
                ) : (
                  <img
                    src={selectedArt.media[currentMediaIndex].url}
                    alt={`${selectedArt.title} - Mídia ${
                      currentMediaIndex + 1
                    }`}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Carousel Navigation */}
                {selectedArt.media.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevMedia}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextMedia}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Media Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedArt.media.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentMediaIndex(index)}
                          className={`w-2 h-2 rounded-full ${
                            index === currentMediaIndex
                              ? 'bg-white'
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-center justify-between mb-6">
                <div
                  className={`inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-full ${
                    statusConfig[selectedArt.status].color
                  }`}
                >
                  {React.createElement(statusConfig[selectedArt.status].icon, {
                    className: 'w-4 h-4',
                  })}
                  {selectedArt.status}
                </div>

                {selectedArt.media.length > 1 && (
                  <div className="text-sm text-muted-foreground">
                    {currentMediaIndex + 1} de {selectedArt.media.length}
                  </div>
                )}
              </div>

              {/* Action Buttons (only for pending approval) */}
              {selectedArt.status === 'Aguardando aprovação' && (
                <div className="flex gap-3">
                  <Button
                    variant="hero"
                    className="flex-1"
                    onClick={openApproveDialog}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Aprovar
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={openRejectDialog}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Rejeitar
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Approve Confirmation Dialog */}
      <Dialog open={showApproveDialog} onOpenChange={setShowApproveDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirmar aprovação</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja aprovar esta arte? Após a aprovação, a
              equipe seguirá com a publicação conforme agendado.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 sm:justify-start">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowApproveDialog(false)}
            >
              Cancelar
            </Button>
            <Button
              type="button"
              variant="hero"
              onClick={() => selectedArt && handleApprove(selectedArt.id)}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Confirmar Aprovação
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reject Confirmation Dialog */}
      <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Solicitar ajustes</DialogTitle>
            <DialogDescription>
              Por favor, descreva os ajustes necessários para que a equipe possa
              revisar a arte.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="comment">Comentário *</Label>
              <Textarea
                id="comment"
                value={rejectionComment}
                onChange={(e) => setRejectionComment(e.target.value)}
                placeholder="Descreva os ajustes necessários..."
                className="min-h-[120px]"
                required
              />
              <p className="text-xs text-muted-foreground">
                Este campo é obrigatório para solicitar ajustes.
              </p>
            </div>
          </div>
          <DialogFooter className="flex gap-2 sm:justify-start">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setShowRejectDialog(false)
                setRejectionComment('')
              }}
            >
              Cancelar
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-red-200 bg-red-50 text-red-700 hover:bg-red-100 hover:text-red-800"
              onClick={() =>
                selectedArt && handleRequestChanges(selectedArt.id)
              }
              disabled={!rejectionComment.trim()}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Enviar Ajustes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ClientSocialMedia
