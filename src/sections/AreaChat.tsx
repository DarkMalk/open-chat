import { initialMessages } from '../assets/mock_data'
import { Avatar } from '../components/Avatar'
import { Send } from '../icons/Send'
import { X } from '../icons/X'

const INITIAL_CHAT = {
  online: true,
  name: 'María García',
  avatar: '/placeholder.svg',
  messages: initialMessages
}

export default function AreaChat() {
  return (
    <section className='flex flex-col w-full'>
      <header className='flex flex-row gap-4 justify-between items-center w-full p-4 h-fit border-b border-gray-200'>
        <div className='flex flex-row gap-4 items-center'>
          <Avatar
            avatar={INITIAL_CHAT.avatar}
            name={INITIAL_CHAT.name}
            online={INITIAL_CHAT.online}
          />
          <div className='flex flex-col'>
            <h1 className='font-semibold text-sm'>{INITIAL_CHAT.name}</h1>
            <p className='text-sm text-gray-500/70'>
              {INITIAL_CHAT.online ? 'En línea' : 'Desconectado'}
            </p>
          </div>
        </div>
        <button className='hover:bg-gray-200/70 p-2 rounded-lg cursor-pointer'>
          <X />
        </button>
      </header>
      <div
        id='messages'
        className='flex flex-row w-full h-full p-4 bg-gray-100'
      >
        <ul className='flex flex-col gap-4 w-full'>
          {INITIAL_CHAT.messages.map(({ id, senderId, text, timestamp }) => (
            <li
              key={id}
              className={`w-full flex ${
                senderId === 'current-user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`p-2 rounded-lg ${
                  senderId === 'current-user'
                    ? 'bg-blue-300 rounded-br-none'
                    : 'bg-gray-300  rounded-bl-none'
                }`}
              >
                <p>{text}</p>
                <p className='text-sm text-gray-500/70'>{timestamp}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <footer className='w-full h-fit border-t p-4 border-gray-200'>
        <form className='w-full flex flex-row gap-4 justify-between items-center'>
          <input
            type='text'
            placeholder='Escribe un mensaje...'
            name='message'
            className='text-sm w-full px-3 py-2 border border-gray-200 rounded-lg outline-0'
          />
          <button
            className='cursor-pointer bg-black text-white p-2 rounded-lg'
            aria-label='Envía tu mensaje'
          >
            <Send />
          </button>
        </form>
      </footer>
    </section>
  )
}
