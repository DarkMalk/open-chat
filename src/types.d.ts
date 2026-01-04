interface CollectionFriends {
  collectionId: string
  collectionName: string
  expand: {
    users: User[]
  }
  id: string
  users: string[]
}

interface User {
  id: string
  name: string
  email: string
  avatar: string
  active: boolean
}

interface Message {
  collectionId: string
  collectionName: string
  created: string
  id: string
  message: string
  users: string[]
  creator_id: string
}

interface FriendStore {
  friends: User[]
  setFriends: (friends: User[]) => void
}

interface AuthStore {
  auth: User | null
  setAuth: (user: User | null) => void
}

interface ChatStore {
  messages: Message[]
  setMessages: (messages: Message[]) => void
  currentUser: User | null
  setCurrentUser: (user: User | null) => void
}
