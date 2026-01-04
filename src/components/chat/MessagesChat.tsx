import { getMessages } from '../../services/getMessages'
import { useMessages } from '../../hooks/useMessages'
import { useAuth } from '../../hooks/useAuth'
import { Message } from './Message'
import { useEffect } from 'react'

type Props = {
  friendId: string
}

export const MessagesChat = ({ friendId }: Props) => {
  const { messages, setMessages } = useMessages()
  const { auth } = useAuth()

  useEffect(() => {
    if (!auth) return
    getMessages({ friendId, authId: auth.id }).then(messages =>
      setMessages(messages)
    )
  }, [friendId, auth, setMessages])

  return (
    <div
      id='messages'
      className='flex flex-row bg-gray-100 p-4 w-full h-full overflow-y-auto'
    >
      <ul className='flex flex-col gap-4 w-full'>
        {messages.map(({ id, message, creator_id, created }) => (
          <Message
            key={id}
            message={message}
            creatorId={creator_id}
            createdDate={created}
          />
        ))}
      </ul>
    </div>
  )
}
