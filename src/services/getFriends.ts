import { pb } from '../config/pocketbase'

export const getFriends = async ({ auth_id }: { auth_id: string }) => {
  const response = await pb
    .collection<CollectionFriends>('friends')
    .getFullList({ expand: 'users' })

  const friends = response.flatMap(({ expand }) =>
    expand.users.filter(item => item.id !== auth_id)
  )

  return friends
}
