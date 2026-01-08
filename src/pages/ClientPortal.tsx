import { Routes, Route, Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Target,
  MessageSquare,
  Settings,
  Layers,
  FileText,
  Menu,
  X,
  LogOut,
  Bell,
  User,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Clock,
  FileCheck,
  Users,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import ClientDashboard from '@/components/portal/ClientDashboard'
import ClientTraffic from '@/components/portal/ClientTraffic'
import ClientSocialMedia from '@/components/portal/ClientSocialMedia'
import ClientCRM from '@/components/portal/ClientCRM'
import ClientSites from '@/components/portal/ClientSites'
import ClientReports from '@/components/portal/ClientReports'
import icon from '../../public/icon.png'

const ClientPortal = () => {
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/client/check`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          window.location.href = '/'
        }

        return res.json()
      })
      .then(({ user }) => {
        setUser(user)
      })
      .catch(console.error)
  }, [])

  const navItems = [
    { path: '/portal', icon: LayoutDashboard, label: 'Dashboard', exact: true },
    { path: '/portal/trafego', icon: Target, label: 'Tráfego Pago' },
    { path: '/portal/social', icon: MessageSquare, label: 'Social Media' },
    // { path: '/portal/crm', icon: Settings, label: 'CRM e Automações' },
    { path: '/portal/sites', icon: Layers, label: 'Sites e LPs' },
    {
      path: '/portal/influenciadores',
      icon: Users,
      label: 'Influenciadores',
    },
    { path: '/portal/documentos', icon: FileText, label: 'Documentos' },
    { path: '/portal/configuracoes', icon: Settings, label: 'Configurações' },
  ]

  const notifications = [
    {
      id: 1,
      title: 'Nova arte aguardando aprovação',
      description: 'Campanha de Verão - 3 imagens',
      time: 'Há 2 horas',
      icon: AlertCircle,
      iconColor: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      id: 2,
      title: 'Relatório mensal disponível',
      description: 'Janeiro 2025 - Tráfego Pago',
      time: 'Hoje, 09:30',
      icon: FileCheck,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      id: 3,
      title: 'Campanha aprovada',
      description: 'Stories Promocional',
      time: 'Ontem, 16:45',
      icon: CheckCircle,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      id: 4,
      title: 'Atualização de site concluída',
      description: 'Página institucional',
      time: 'Ontem, 14:20',
      icon: CheckCircle,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      id: 5,
      title: 'Reunião agendada',
      description: 'Review trimestral - 30/01 às 15h',
      time: 'Há 2 dias',
      icon: Clock,
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
  ]

  const isActive = (path: string, exact?: boolean) => {
    if (exact) return location.pathname === path
    return location.pathname.startsWith(path)
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5521966123362', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-200 lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
          <Link to="/portal" className="flex items-center gap-2">
            <img src={icon} alt="Logo" className="w-8 h-8" />
            <span className="font-bold">
              Hello, <span className="gradient-text">you.</span>
            </span>
          </Link>
          <button
            className="lg:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Info */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-medium text-sm">Empresa Demo</div>
              <div className="text-xs text-muted-foreground">
                cliente@empresa.com
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive(item.path, item.exact)
                  ? 'bg-sidebar-accent text-sidebar-primary'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* WhatsApp e Sair */}
        <div className="grid gap-2 absolute bottom-4 left-4 right-4 space-y-2">
          <Button
            onClick={handleWhatsAppClick}
            className="w-full justify-start gap-3 bg-green-600 hover:bg-green-700 text-white"
            variant="secondary"
          >
            <MessageCircle className="w-4 h-4" />
            Entrar em Contato
          </Button>
          <Link to="/login">
            <Button
              onClick={() => localStorage.removeItem('token')}
              variant="outline"
              className="w-full justify-start gap-3"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Top Bar */}
        <header className="h-16 bg-background/80 backdrop-blur-xl border-b border-border sticky top-0 z-40 flex items-center justify-between px-4">
          <button
            className="lg:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-4 ml-auto">
            {/* Notifications Button */}
            <div className="relative">
              <button
                className="relative text-muted-foreground hover:text-foreground"
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
              </button>

              {/* Notifications Modal */}
              {isNotificationsOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsNotificationsOpen(false)}
                  />

                  {/* Modal */}
                  <div className="fixed right-4 top-16 z-50 w-80 md:w-96 bg-background border border-border rounded-lg shadow-xl">
                    <div className="p-4 border-b border-border flex items-center justify-between">
                      <h3 className="font-semibold">Notificações</h3>
                      <span className="text-xs text-muted-foreground">
                        {notifications.length} novas
                      </span>
                    </div>

                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => {
                        const Icon = notification.icon
                        return (
                          <div
                            key={notification.id}
                            className="p-4 border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex gap-3">
                              <div
                                className={`w-10 h-10 rounded-lg ${notification.bgColor} flex items-center justify-center flex-shrink-0`}
                              >
                                <Icon
                                  className={`w-5 h-5 ${notification.iconColor}`}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm mb-1">
                                  {notification.title}
                                </h4>
                                <p className="text-xs text-muted-foreground mb-2">
                                  {notification.description}
                                </p>
                                <div className="text-xs text-muted-foreground">
                                  {notification.time}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <div className="p-3 border-t border-border">
                      <Button
                        variant="ghost"
                        className="w-full text-sm"
                        onClick={() => setIsNotificationsOpen(false)}
                      >
                        Fechar
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6">
          <Routes>
            <Route path="/" element={<ClientDashboard />} />
            <Route path="/trafego" element={<ClientTraffic />} />
            <Route path="/social" element={<ClientSocialMedia />} />
            {/* <Route path="/crm" element={<ClientCRM />} /> */}
            <Route path="/sites" element={<ClientSites />} />
            <Route path="/documentos" element={<ClientReports />} />
          </Routes>
        </main>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default ClientPortal
