import { PlaceholderChat } from '../components/PlaceholderChat'
import { ProtectedRoutes } from '../components/ProtectedRoutes'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../pages/Layout'
import { Chat } from '../sections/Chat'
import { Login } from '../pages/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoutes>
        <Layout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: '/',
        element: <PlaceholderChat />
      },
      {
        path: '/chat/:id',
        element: <Chat />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])
