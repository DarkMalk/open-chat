import { create } from 'zustand'

export const useFriendStore = create<FriendStore>(set => ({
  friends: [],
  setFriends: friends => set(() => ({ friends: [...friends] }))
}))

export const useAuthStore = create<AuthStore>(set => ({
  auth: null,
  setAuth: user => set(() => ({ auth: user }))
}))

export const useChatStore = create<ChatStore>(set => ({
  messages: [],
  setMessages: messages => set(() => ({ messages })),
  currentUser: null,
  setCurrentUser: user => set(() => ({ currentUser: user }))
}))
