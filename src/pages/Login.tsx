import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff, ArrowLeft } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import icon from '../../public/icon.png'

const Login = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          const isAuthError = res.status === 400

          toast({
            title: isAuthError ? 'Erro de autenticação' : 'Erro desconhecido',
            description: isAuthError
              ? 'E-mail ou senha incorretos.'
              : 'Erro. Por favor, tente novamente.',
          })

          throw new Error(res.statusText)
        }

        return res.json()
      })
      .then(({ role, token }) => {
        localStorage.setItem('token', token)

        const isAdmin = role === 'admin' || role === 'owner'

        toast({
          title: isAdmin ? 'Bem-vindo, Admin!' : 'Bem-vindo(a)!',
          description: isAdmin
            ? 'Acesso ao painel administrativo.'
            : 'Acesso ao portal do cliente.',
        })

        navigate(isAdmin ? '/admin' : '/portal')
      })
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-hero-glow pointer-events-none" />

      <div className="w-full max-w-md mx-4 relative z-10">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao site
        </Link>

        {/* Login Card */}
        <div className="glass-card p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <img
              src={icon}
              alt="Logo"
              className="w-14 h-14 flex items-center justify-center mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold">
              Bem-vindo à <span className="gradient-text">Hello, you.</span>
            </h1>
            <p className="text-muted-foreground text-sm mt-2">
              Acesse sua central de performance
            </p>
          </div>

          {/* Login Type Toggle */}
          {/* <div className="flex gap-2 p-1 bg-muted rounded-lg mb-6">
            <button
              onClick={() => setLoginType('client')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                loginType === 'client'
                  ? 'bg-background text-foreground shadow'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Cliente
            </button>
            <button
              onClick={() => setLoginType('admin')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                loginType === 'admin'
                  ? 'bg-background text-foreground shadow'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Admin
            </button>
          </div> */}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
                className="mt-1.5 bg-muted/50 border-border/50 focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="password">Senha</Label>
              <div className="relative mt-1.5">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-muted-foreground">Lembrar-me</span>
              </label>
              <a href="#" className="text-primary hover:underline">
                Esqueci a senha
              </a>
            </div>

            <Button
              type="submit"
              variant="hero"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>

          {/* Demo Info */}
          {/* <div className="mt-6 p-4 bg-muted/50 rounded-lg text-xs text-muted-foreground">
            <p className="font-medium text-foreground mb-1">Demo:</p>
            <p>Cliente: qualquer email</p>
            <p>Admin: admin@helloyou.com.br</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Login
