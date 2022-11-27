import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './globals.css'
import AppRouter from './AppRouter'
import { Container } from './components'

import { AuthProvider } from '@/context'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Container>
          <AppRouter />
        </Container>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
