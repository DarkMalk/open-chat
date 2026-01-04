import { pb } from '../config/pocketbase'

export const updateUserActive = async ({
  id,
  active
}: {
  id: string
  active: boolean
}) => {
  const user = await pb.collection<User>('users').update(id, { active })

  return user
}
