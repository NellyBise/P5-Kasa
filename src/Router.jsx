import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import About from './pages/About/About'
import Housing from './pages/Housing/Housing'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', index: true, element: <Home /> },
      { path: '/:id', element: <Housing /> },
      { path: '/About', element: <About /> },
    ],
  },
])

export default Router