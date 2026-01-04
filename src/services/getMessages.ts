import { pb } from '../config/pocketbase'

export const getMessages = async ({
  friendId,
  authId
}: {
  friendId: string
  authId: string
}) => {
  const response = await pb.collection<Message>('messages').getFullList({
    sort: '+created',
    filter: `users ~ "${friendId}" && users ~ "${authId}"`
  })

  return response
}
