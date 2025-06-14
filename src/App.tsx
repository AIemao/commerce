import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './components/theme/theme-provider'
import { queryClient } from './lib/react-query'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey='commerce-theme' defaultTheme='dark'>
        <Helmet titleTemplate="%s | commerce" />
         <Toaster richColors />
         <QueryClientProvider client={queryClient}>
           <RouterProvider router={router} future={{ v7_startTransition: true }} />
         </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
