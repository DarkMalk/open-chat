import { useAuth } from '../../hooks/useAuth'
import { relativeTimeFormat } from '../../utils/relativeTimeFormat'

type Props = {
  creatorId: string
  message: string
  createdDate: string
}

export const Message = ({ creatorId, message, createdDate }: Props) => {
  const date = relativeTimeFormat(createdDate)
  const { auth } = useAuth()

  if (!auth) return

  return (
    <li
      className={`w-full flex ${
        creatorId === auth.id ? 'justify-end' : 'justify-start'
      }`}
    >
      <div
        className={`p-2 rounded-lg max-w-[60%] ${
          creatorId === auth.id
            ? 'bg-blue-300 rounded-br-none'
            : 'bg-gray-300 rounded-bl-none'
        }`}
      >
        <p>{message}</p>
        <p className='text-gray-500/80 text-sm'>{date}</p>
      </div>
    </li>
  )
}
