import { useCurrentFriend } from '../../hooks/useCurrentFriend'
import { useMessages } from '../../hooks/useMessages'
import { Link } from 'react-router-dom'
import { Avatar } from '../Avatar'
import { X } from '../../icons/X'

type Props = {
  friendId: string
}

export const HeaderChat = ({ friendId }: Props) => {
  const { currentUser: user, setCurrentUser } = useCurrentFriend({ friendId })
  const { setMessages } = useMessages()

  if (!user) return

  const handleClick = () => {
    setCurrentUser(null)
    setMessages([])
  }

  return (
    <header className='flex flex-row justify-between items-center gap-4 p-4 border-gray-200 border-b w-full h-fit'>
      <div className='flex flex-row items-center gap-4'>
        <Avatar
          avatar={`${
            import.meta.env.VITE_POCKETBASE_URL
          }/api/files/_pb_users_auth_/${user.id}/${user.avatar}`}
          name={user.name}
          online={user.active}
        />
        <div className='flex flex-col'>
          <h1 className='font-semibold text-sm'>{user.name}</h1>
          <p className='text-gray-500/70 text-sm'>
            {user.active ? 'En línea' : 'Desconectado'}
          </p>
        </div>
      </div>
      <Link
        to='/'
        aria-label='Cerrar chat'
        className='hover:bg-gray-200/70 p-2 rounded-lg transition-all cursor-pointer'
        onClick={handleClick}
      >
        <X />
      </Link>
    </header>
  )
}
