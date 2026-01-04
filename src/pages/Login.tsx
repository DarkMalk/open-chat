import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { FormEvent } from 'react'

export const Login = () => {
  const { login, auth } = useAuth()

  if (auth) {
    return <Navigate to='/' />
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = new FormData(event.currentTarget)

    const email: string = form.get('email')?.toString() ?? ''
    const password: string = form.get('password')?.toString() ?? ''

    login({ email, password })
  }

  return (
    <main className='flex justify-center items-center p-4 w-dvw h-dvh bg-gray-200'>
      <div className='w-[450px] rounded-lg p-8 bg-white shadow-2xl'>
        <header className='flex flex-col gap-2 mb-6 justify-center items-center'>
          <h1 className='text-2xl font-bold'>Open Chat</h1>
          <p className='text-sm text-gray-500'>
            Ingresa tus credenciales para acceder
          </p>
        </header>
        <form
          className='flex flex-col gap-4'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col gap-2'>
            <label
              className='text-sm font-semibold'
              htmlFor='email'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              name='email'
              placeholder='nombre@ejemplo.com'
              className='text-sm w-full px-3 py-2 border border-gray-200 rounded-lg outline-0'
              required
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label
              className='text-sm font-semibold'
              htmlFor='password'
            >
              Contraseña
            </label>
            <input
              id='password'
              type='password'
              name='password'
              placeholder='contraseña'
              className='text-sm w-full px-3 py-2 border border-gray-200 rounded-lg outline-0'
              required
            />
          </div>
          <button
            type='submit'
            className='bg-black text-white p-2 rounded-lg hover:bg-black/90 transition-all cursor-pointer'
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </main>
  )
}
