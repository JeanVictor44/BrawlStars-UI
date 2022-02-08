import { GlobalStyle } from './styles/global'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import { UserDataProvider } from './contexts/userData'
import { AuthProvider } from './contexts/auth'

export function App (){

  return (
    <AuthProvider>
      <UserDataProvider>
        <GlobalStyle />
        <Router>
          <Routes />
        </Router>
      </UserDataProvider>
    </AuthProvider>
  )
}

