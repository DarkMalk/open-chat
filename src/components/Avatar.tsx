import { Point } from '../icons/Point'

type Props = {
  avatar: string
  name: string
  online?: boolean
}

export const Avatar = ({ avatar, name, online }: Props) => (
  <div className='relative'>
    <img
      src={avatar}
      alt={`Foto de perfil de ${name}`}
      className='w-10 h-10 rounded-full'
    />
    {online && (
      <Point className='absolute right-[-6px] bottom-[-6px] text-green-500' />
    )}
  </div>
)
