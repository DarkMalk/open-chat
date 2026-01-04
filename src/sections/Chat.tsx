import { MessagesChat } from '../components/chat/MessagesChat'
import { HeaderChat } from '../components/chat/HeaderChat'
import { FooterChat } from '../components/chat/FooterChat'
import { getIdPathname } from '../utils/getIdPathname'
import { useLocation } from 'react-router-dom'

export function Chat() {
  const { pathname } = useLocation()
  const friendId = getIdPathname({ pathname })

  if (!friendId) return

  return (
    <section className='flex flex-col w-full h-dvh'>
      <HeaderChat friendId={friendId} />
      <MessagesChat friendId={friendId} />
      <FooterChat friendId={friendId} />
    </section>
  )
}
