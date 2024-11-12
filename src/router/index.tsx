import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import Create from '../pages/CreateAccount'
import Profile from '../pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
])

export default router
