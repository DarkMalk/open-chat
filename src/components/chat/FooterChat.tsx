import { createMessage } from '../../services/createMessage'
import { useMessages } from '../../hooks/useMessages'
import { useAuth } from '../../hooks/useAuth'
import { FormEvent, useState } from 'react'
import { Send } from '../../icons/Send'
import { Input } from '../Input'

export const FooterChat = ({ friendId }: { friendId: string }) => {
  const [message, setMessage] = useState<string>('')
  const { messages, setMessages } = useMessages()
  const { auth } = useAuth()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!message.trim() || !auth) return

    const newMessage = await createMessage({
      message,
      users: [friendId, auth.id],
      creator_id: auth.id
    })

    setMessages([...messages, newMessage])
    setMessage('')
  }

  return (
    <footer className='p-4 border-gray-200 border-t w-full h-fit'>
      <form
        className='flex flex-row justify-between items-center gap-4 w-full'
        onSubmit={handleSubmit}
      >
        <Input
          placeholder='Escribe un mensaje...'
          name='message'
          value={message}
          onChange={event => setMessage(event.target.value)}
          isRequired
        />
        <button
          className='bg-black p-2 rounded-lg text-white cursor-pointer'
          aria-label='Envía tu mensaje'
        >
          <Send />
        </button>
      </form>
    </footer>
  )
}
