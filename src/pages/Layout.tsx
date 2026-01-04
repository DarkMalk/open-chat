import { Outlet } from 'react-router-dom'
import Aside from '../sections/Aside'
import { Toaster } from 'sonner'

function Layout() {
  return (
    <>
      <main className='flex flex-row'>
        <Aside />
        <Outlet />
      </main>
      <Toaster position='top-center' />
    </>
  )
}

export { Layout }
