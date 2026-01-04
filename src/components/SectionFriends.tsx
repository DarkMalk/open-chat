import { Link } from 'react-router-dom'
import { useFriends } from '../hooks/useFriends'
import { Avatar } from './Avatar'

export const SectionFriends = () => {
  const { friends } = useFriends()

  return (
    <>
      {friends.length > 1 && (
        <div className='h-full border-r border-b flex flex-col border-gray-200'>
          <h1 className='text-sm font-bold text-gray-500 px-4 py-2'>
            Todos los amigos
          </h1>
          <ul className='flex flex-col'>
            {friends.map(({ id, avatar, name, active }) => (
              <li key={id}>
                <Link
                  to={`/chat/${id}`}
                  className='flex flex-row justify-between p-3 hover:bg-gray-100 transition-all'
                >
                  <div className='flex flex-row gap-2'>
                    <Avatar
                      avatar={`${
                        import.meta.env.VITE_POCKETBASE_URL
                      }/api/files/_pb_users_auth_/${id}/${avatar}`}
                      name={name}
                      online={active}
                    />
                    <div>
                      <h2 className='text-sm font-semibold'>{name}</h2>
                      <p className='text-sm text-gray-500/70'>
                        {active ? 'En línea' : 'Desconectado'}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
