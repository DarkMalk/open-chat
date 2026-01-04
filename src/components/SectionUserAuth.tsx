import { useAuth } from '../hooks/useAuth'
import { Logout } from '../icons/Logout'
import { Avatar } from './Avatar'

export const SectionUserAuth = () => {
  const { auth, logout } = useAuth()

  if (!auth) {
    return
  }

  return (
    <div className='flex justify-between items-center p-4 border-r border-gray-200'>
      <div className='flex flex-row gap-2'>
        <Avatar
          avatar={`${
            import.meta.env.VITE_POCKETBASE_URL
          }/api/files/_pb_users_auth_/${auth.id}/${auth.avatar}`}
          name={auth.name}
          online={auth.active}
        />
        <div>
          <h2 className='text-sm font-semibold'>{auth.name}</h2>
          <p className='text-sm text-gray-500/70'>
            {auth.active ? 'En línea' : 'Desconectado'}
          </p>
        </div>
      </div>
      <button
        aria-label='Cerrar sesión'
        className='p-2 rounded-lg hover:bg-gray-100 hover:text-red-400 cursor-pointer transition-all'
        onClick={logout}
      >
        <Logout />
      </button>
    </div>
  )
}
