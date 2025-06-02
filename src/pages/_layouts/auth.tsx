import { ShoppingBag } from 'lucide-react'
import { Outlet } from 'react-router-dom'
export function AuthLayout() {
  return (
    <div  className='min-h-screen grid-cols-2 grid'>
      <div className='flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground'>
        <div className='flex items-center gap-3 text-lg  text-foreground'>
          <ShoppingBag className='h-5 w-5' />
          <span className='font-semibold'>Commerce</span>
        </div>
        <footer className='text-sm'>
          Painel do parceiro &copy; commerce - {new Date().getFullYear()} - Todos os direitos reservados.
        </footer>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <Outlet />
      </div>
    </div>
  )
}
