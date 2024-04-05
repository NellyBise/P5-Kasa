import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import About from './pages/About/About'
import Housing from './pages/Housing/Housing'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/About',
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: '/:id',
    element: <Housing />,
    errorElement: <Error />,
  },
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
