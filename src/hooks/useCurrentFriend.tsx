import { useChatStore } from '../config/store'
import { useFriends } from './useFriends'
import { useEffect } from 'react'

type Props = {
  friendId: string
}

export const useCurrentFriend = ({ friendId }: Props) => {
  const { currentUser, setCurrentUser } = useChatStore()
  const { friends } = useFriends()

  useEffect(() => {
    const friend = friends.find(friend => friend.id === friendId)
    if (friend) setCurrentUser(friend)
  }, [friendId, friends, setCurrentUser])

  return { currentUser, setCurrentUser }
}
