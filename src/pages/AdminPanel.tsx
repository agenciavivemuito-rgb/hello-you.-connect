import { Routes, Route, Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  Target,
  MessageSquare,
  Settings,
  FileText,
  Menu,
  X,
  LogOut,
  Bell,
  Shield,
  Layers,
  UserPlus,
} from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import AdminDashboard from '@/components/admin/AdminDashboard'
import AdminClients from '@/components/admin/AdminClients'
import AdminTraffic from '@/components/admin/AdminTraffic'
import AdminSocialMedia from '@/components/admin/AdminSocialMedia'
import AdminSettings from '@/components/admin/AdminSettings'
import icon from '../../public/icon.png'

const AdminPanel = () => {
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const navItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
    { path: '/admin/clientes', icon: UserPlus, label: 'Clientes' },
    { path: '/admin/trafego', icon: Target, label: 'Tráfego Pago' },
    { path: '/admin/social', icon: MessageSquare, label: 'Social Media' },
    { path: '/admin/sites', icon: Layers, label: 'Sites e LPs' },
    { path: '/admin/influenciadores', icon: Users, label: 'Influenciadores' },
    { path: '/admin/configuracoes', icon: Settings, label: 'Configurações' },
  ]

  const isActive = (path: string, exact?: boolean) => {
    if (exact) return location.pathname === path
    return location.pathname.startsWith(path)
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
          <Link to="/" className="flex items-center gap-2">
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

        {/* Admin Badge */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3 px-3 py-2 bg-primary/10 rounded-lg">
            <Shield className="w-5 h-5 text-primary" />
            <div>
              <div className="font-medium text-sm">Admin Master</div>
              <div className="text-xs text-muted-foreground">Acesso total</div>
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

        {/* Logout */}
        <div className="absolute bottom-4 left-4 right-4">
          <Link to="/login">
            <Button variant="outline" className="w-full justify-start gap-3">
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

          <div className="hidden lg:block">
            <span className="text-sm text-muted-foreground">
              Painel Administrativo
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative text-muted-foreground hover:text-foreground">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/clientes" element={<AdminClients />} />
            <Route path="/trafego" element={<AdminTraffic />} />
            <Route path="/social" element={<AdminSocialMedia />} />
            <Route path="/configuracoes" element={<AdminSettings />} />
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

export default AdminPanel
