import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { JSX } from 'react'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export const ProtectedRoutes = ({ children }: Props) => {
  const { auth } = useAuth()

  if (!auth) {
    return <Navigate to='/login' />
  }

  return <>{children}</>
}
