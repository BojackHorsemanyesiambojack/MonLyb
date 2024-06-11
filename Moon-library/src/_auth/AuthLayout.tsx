import { Navigate, Outlet } from 'react-router-dom';
import LayoutImage from './Assets/img/Layout_image.jpg';


export default function AuthLayout() {

  const isAutheticated = false;

  return (
    <>
      {isAutheticated? 
      (<Navigate to = '/' />)
      :
      (<>
      <section className='flex flex-1 justify-center items-center flex-col py-20 pb-20 text-white'>
        <Outlet />
      </section>
      <img src ={LayoutImage} 
      alt='layout_image'
      className='hidden xl:block w-1/2 object-cover bg-no-repeat self-center h-1/2 mr-10 rounded-sm'
      />
        </>
      )}
    </>
  )
}
