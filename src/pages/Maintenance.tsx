import {
  AlertTriangle,
  ArrowLeft,
  Clock,
  Wrench,
  MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'

const Maintenance = () => {
  const handleContact = () => {
    window.open('https://wa.me/5521993099016', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 flex flex-col items-center justify-center p-4">
      {/* Botão de voltar - Centralizado */}
      <div className="mb-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao site
        </Link>
      </div>

      <Card className="max-w-md w-full mx-auto border-0 shadow-xl">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            {/* Ícone animado */}
            <div className="relative mx-auto w-24 h-24">
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
              <div className="absolute inset-4 bg-primary/20 rounded-full animate-ping" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <Wrench className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
            </div>

            {/* Título e mensagem */}
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight">
                Estamos em Manutenção
              </h1>
              <p className="text-muted-foreground">
                Nosso sistema está passando por atualizações para oferecer uma
                experiência ainda melhor. Voltaremos em breve!
              </p>
            </div>

            {/* Detalhes */}
            <div className="space-y-4 bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-left">
                  <div className="font-medium text-sm">Tempo Estimado</div>
                  <div className="text-sm text-muted-foreground">1 semana</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-medium text-sm">Status</div>
                  <div className="text-sm text-muted-foreground">
                    Atualizações em andamento
                  </div>
                </div>
              </div>
            </div>

            {/* Botão de contato */}
            <div className="space-y-3 pt-4">
              <Button
                onClick={handleContact}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                size="lg"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Entrar em Contato
              </Button>

              <p className="text-xs text-muted-foreground">
                Em caso de urgência, entre em contato pelo WhatsApp
              </p>
            </div>

            {/* Contador (opcional) */}
            <div className="pt-4 border-t">
              <div className="text-xs text-muted-foreground">
                Última atualização:{' '}
                {new Date().toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Maintenance
