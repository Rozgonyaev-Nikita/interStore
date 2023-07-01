import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index.ts'
import { ThemeProvider, createTheme } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      main: '#f00'
    },
    secondary: {
      main: '#0f0'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
