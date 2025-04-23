import { Avatar } from '../components/Avatar'
import { Check } from '../icons/Check'
import { Plus } from '../icons/plus'
import { X } from '../icons/X'
import {
  initialFriendRequests,
  allFriends,
  recentlyChats
} from '../assets/mock_data'

export default function Aside() {
  return (
    <nav className='flex flex-col min-w-[320px] h-dvh'>
      <div className='w-full flex flex-row gap-2 p-4 border-b border-r border-gray-200'>
        <input
          type='text'
          placeholder='Buscar contactos...'
          className='text-sm w-full px-3 py-2 border border-gray-200 rounded-lg outline-0'
        />
        <button className='flex items-center justify-center bg-black text-white p-2 rounded-lg cursor-pointer'>
          <Plus />
        </button>
      </div>
      <div
        id='friends-requests'
        className='border-r border-b flex flex-col gap-2 border-gray-200 p-4'
      >
        <h1 className='text-sm font-bold text-gray-500'>
          Solicitudes de amistad
        </h1>
        <ul className='flex flex-col gap-4'>
          {initialFriendRequests.map(({ avatar, name, requestTime, id }) => (
            <li
              className='w-full flex flex-row gap-4 justify-between items-center'
              key={id}
            >
              <div className='flex flex-row gap-2 justify-start items-center'>
                <Avatar
                  avatar={avatar}
                  name={name}
                />
                <div>
                  <h2 className='text-sm font-semibold'>{name}</h2>
                  <p className='text-sm text-gray-500/70'>{requestTime}</p>
                </div>
              </div>
              <div>
                <button
                  aria-label={`Aceptar solicitud de ${name}`}
                  className='p-2 hover:bg-gray-200/40 rounded-lg cursor-pointer text-green-500'
                >
                  <Check />
                </button>
                <button
                  aria-label={`Rechazar solicitud de ${name}`}
                  className='p-2 hover:bg-gray-200/40 rounded-lg cursor-pointer text-red-500'
                >
                  <X />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        id='chats-recently'
        className='border-r border-b flex flex-col border-gray-200 h-full'
      >
        <h1 className='text-sm font-bold text-gray-500 px-4 py-2'>
          Chats recientes
        </h1>
        <ul className='flex flex-col'>
          {recentlyChats.map(
            ({ id, avatar, name, online, lastMessage, lastMessageTime }) => (
              <li key={id}>
                <a
                  href={`/chat/${id}`}
                  className='flex flex-row justify-between p-3 hover:bg-gray-100 transition-all'
                >
                  <div className='flex flex-row gap-2'>
                    <Avatar
                      avatar={avatar}
                      name={name}
                      online={online}
                    />
                    <div>
                      <h2 className='text-sm font-semibold'>{name}</h2>
                      <p className='text-sm text-gray-500/70'>{lastMessage}</p>
                    </div>
                  </div>
                  <div>
                    <p className='text-gray-500/70 text-sm'>
                      {lastMessageTime}
                    </p>
                  </div>
                </a>
              </li>
            )
          )}
        </ul>
      </div>
      <div
        id='chats-recently'
        className='border-r border-b flex flex-col border-gray-200'
      >
        <h1 className='text-sm font-bold text-gray-500 px-4 py-2'>
          Todos los amigos
        </h1>
        <ul className='flex flex-col'>
          {allFriends.map(({ id, avatar, name, online }) => (
            <li key={id}>
              <a
                href={`/chat/${id}`}
                className='flex flex-row justify-between p-3 hover:bg-gray-100 transition-all'
              >
                <div className='flex flex-row gap-2'>
                  <Avatar
                    avatar={avatar}
                    name={name}
                    online={online}
                  />
                  <div>
                    <h2 className='text-sm font-semibold'>{name}</h2>
                    <p className='text-sm text-gray-500/70'>
                      {online ? 'En línea' : 'Desconectado'}
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
