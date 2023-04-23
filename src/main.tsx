import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import React from 'react'

import { AppProvider } from 'contexts'
import { store } from 'store/store'
import App from './App.tsx'
import './index.css'

const client = new QueryClient()
const clientId = import.meta.env.VITE_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={clientId}>
          <Provider store={store}>
            <AppProvider>
              <App />
            </AppProvider>
          </Provider>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
