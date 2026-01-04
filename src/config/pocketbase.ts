import Pocketbase from 'pocketbase'

const pb = new Pocketbase(import.meta.env.VITE_POCKETBASE_URL)

pb.autoCancellation(false)

export { pb }
