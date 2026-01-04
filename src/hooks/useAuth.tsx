import { updateUserActive } from '../services/updateUser'
import { loginService } from '../services/loginService'
import { useAuthStore } from '../config/store'
import { pb } from '../config/pocketbase'
import { useEffect } from 'react'

export const useAuth = () => {
  const { auth, setAuth } = useAuthStore()

  useEffect(() => {
    const storedAuth = localStorage.getItem('pocketbase_auth')
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth)?.record)
    }
  }, [setAuth])

  const logout = async () => {
    if (auth) await updateUserActive({ id: auth.id, active: false })
    pb.authStore.clear()
    setAuth(null)
  }

  const login = async ({
    email,
    password
  }: {
    email: string
    password: string
  }) => {
    const user = await loginService({ email, password })
    await updateUserActive({ id: user.id, active: true })
    setAuth({ ...user, active: true })
  }

  return { auth, logout, login }
}
