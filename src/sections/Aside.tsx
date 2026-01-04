import { SectionRequestsFriends } from '../components/SectionRequestsFriends'
import { SectionUserAuth } from '../components/SectionUserAuth'
import { SectionFriends } from '../components/SectionFriends'
import { Input } from '../components/Input'
import { Plus } from '../icons/Plus'

export default function Aside() {
  return (
    <nav className='flex flex-col min-w-[320px] h-dvh'>
      <div className='flex flex-row gap-2 p-4 border-gray-200 border-r border-b w-full'>
        <Input
          placeholder='Buscar contactos...'
          name='search-contacts'
        />
        <button className='flex justify-center items-center bg-black p-2 rounded-lg text-white cursor-pointer'>
          <Plus />
        </button>
      </div>
      <SectionRequestsFriends />
      {/* <SectionChatsRecently /> <-- Sección deshabilitada */}
      <SectionFriends />
      <SectionUserAuth />
    </nav>
  )
}
