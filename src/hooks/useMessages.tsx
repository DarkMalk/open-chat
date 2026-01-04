import { useChatStore } from '../config/store'

export const useMessages = () => {
  const { messages, setMessages } = useChatStore()

  return { messages, setMessages }
}
