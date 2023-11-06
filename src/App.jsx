import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesComponent from './useRoutes/RoutesComponent'

function App() {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  )
}

export default App
