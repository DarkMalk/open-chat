import { recentlyChats } from '../assets/mock_data'
import { Avatar } from './Avatar'

export const SectionChatsRecently = () => {
  return (
    <div className='border-r border-b flex flex-col border-gray-200 h-full'>
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
                  <p className='text-gray-500/70 text-sm'>{lastMessageTime}</p>
                </div>
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
