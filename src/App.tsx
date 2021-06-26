import { BrowserRouter, Route } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext'
import { Home } from './pages/home'
import { NewRoom } from './pages/newRoom'

import './styles/global.scss'



function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
