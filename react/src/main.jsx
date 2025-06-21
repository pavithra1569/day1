import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter as Router} from 'react-router-dom'
import { UserContext } from './Hook/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
    <UserContext>
      <App/>
    </UserContext>
   </Router>
  </StrictMode>,
)
