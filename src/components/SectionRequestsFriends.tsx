import { initialFriendRequests } from '../assets/mock_data'
import { Check } from '../icons/Check'
import { X } from '../icons/X'
import { Avatar } from './Avatar'

export const SectionRequestsFriends = () => {
  return (
    <div className='border-r border-b flex flex-col gap-2 border-gray-200 p-4'>
      <h1 className='text-sm font-bold text-gray-500'>
        Solicitudes de amistad
      </h1>
      <ul className='flex flex-col gap-4'>
        {initialFriendRequests.map(({ avatar, name, requestTime, id }) => (
          <li
            className='w-full flex flex-row gap-4 justify-between items-center'
            key={id}
          >
            <div className='flex flex-row gap-2 justify-start items-center'>
              <Avatar
                avatar={avatar}
                name={name}
              />
              <div>
                <h2 className='text-sm font-semibold'>{name}</h2>
                <p className='text-sm text-gray-500/70'>{requestTime}</p>
              </div>
            </div>
            <div>
              <button
                aria-label={`Aceptar solicitud de ${name}`}
                className='p-2 hover:bg-gray-200/40 rounded-lg cursor-pointer text-green-500'
              >
                <Check />
              </button>
              <button
                aria-label={`Rechazar solicitud de ${name}`}
                className='p-2 hover:bg-gray-200/40 rounded-lg cursor-pointer text-red-500'
              >
                <X />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
