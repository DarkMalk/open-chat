import { pb } from '../config/pocketbase'

type Props = {
  email: string
  password: string
}

export const loginService = async ({ email, password }: Props) => {
  const { record } = await pb
    .collection<User>('users')
    .authWithPassword(email, password)

  console.log(record)

  return record
}
