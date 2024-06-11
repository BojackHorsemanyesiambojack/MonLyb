import { Routes, Route} from 'react-router-dom';

import AuthLayout from './_auth/AuthLayout';
import SignIn from './_auth/forms/SignIn';
import Signup from './_auth/forms/Signup';
import RootLayout from './_root/RootLayout';
import { Home } from './_root/pages';

function App() {

  return (
      <main className='flex h-screen bg-black'>
        <Routes>
          <Route element = {<AuthLayout />}>
            <Route path='/sign-in' element = {<SignIn />} />
            <Route path='/sign-up' element = {<Signup />} />
          </Route>

          <Route element ={<RootLayout />}>
            <Route index element = {<Home />} />
          </Route>
        </Routes>
      </main>
  )
}

export default App
