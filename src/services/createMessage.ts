import { pb } from '../config/pocketbase'

type Props = {
  message: string
  users: string[]
  creator_id: string
}

export const createMessage = async ({ message, users, creator_id }: Props) => {
  const newMessage = await pb
    .collection<Message>('messages')
    .create({ message, users, creator_id })

  return newMessage
}
