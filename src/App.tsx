import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import ClientPortal from './pages/ClientPortal'
import AdminPanel from './pages/AdminPanel'
import Login from './pages/Login'
import Maintenance from './pages/Maintenance' // Importe o novo componente

const queryClient = new QueryClient()

const App = () => {
  // Defina esta variável para ativar/desativar a manutenção
  const isMaintenanceMode = true // Mude para false quando quiser desativar a manutenção

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />

            {/* Rotas em manutenção */}
            {isMaintenanceMode ? (
              <>
                <Route path="/portal/*" element={<Maintenance />} />
                <Route path="/admin/*" element={<Maintenance />} />
              </>
            ) : (
              <>
                <Route path="/portal/*" element={<ClientPortal />} />
                <Route path="/admin/*" element={<AdminPanel />} />
              </>
            )}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
