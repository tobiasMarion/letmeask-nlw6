import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { NewRoom } from './pages/newRoom'

import  './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
  )
}

export default App
