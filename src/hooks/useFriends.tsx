import { useEffect } from 'react'
import { useFriendStore } from '../config/store'
import { getFriends } from '../services/getFriends'
import { useAuth } from './useAuth'

export const useFriends = () => {
  const { friends, setFriends } = useFriendStore()
  const { auth } = useAuth()

  useEffect(() => {
    getFriends({ auth_id: auth?.id ?? '' }).then(res => setFriends(res))
  }, [auth?.id, setFriends])

  return { friends, setFriends }
}
