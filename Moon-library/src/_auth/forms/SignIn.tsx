import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from '@/lib/validation';
import Logo from '../Assets/img/icon.png';
import { Hourglass } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { createUserAccount } from '@/lib/Appwrite/Api';

export default function SignIn() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { 
      name:'', 
      email:'',
      username:'',
      password:''
    },
  })
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const newUser = await createUserAccount(values);
    console.log(values);
  }

  const isLoading = false;

  return (
      <div className='flex flex-col items-center pb-5'>
        <Form {...form}>
      <header className='sm:w-420 flex-center flex-col text-center p-4 m-2'>
        <div className='flex items-center justify-center mt-10 sm:mt-10'>
        <img src = {Logo} className=' w-16' alt = 'logo' />
        <h1 className= 'font-bold text-1xl'>MoonLyb</h1>
        </div>
        <h2 className='h2:bold text-2xl font-semibold p-4'>Login</h2>
        <p className='text-gray-300 max-w-30 text-sm'>To be a great philosopher and reader in Moon's Library you will need an identity</p>
      </header>
      <form onSubmit={form.handleSubmit(onSubmit)} className = 'flex flex-col w-10/12 mt-1' >        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input className = 'bg-black' type='email'   placeholder="Socratesgrecy3938@gmail.com" {...field}/>
              </FormControl>
              <FormDescription className='text-gray-300'>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input className = 'bg-black' type='text'   placeholder="Socrates1234" {...field}/>
              </FormControl>
              <FormDescription className='text-gray-300'>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className=' flex items-center flex-col mt-3'>
          {isLoading?
          <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#f0f9f7', '#72a1ed']}
          />
          :
          "Submit"
          }
        </Button>
        <p className=' text-sm text-white-2 text-center mt-2'>
          Are you a new philosopher?, <Link to = '/sign-up' className=' text-blue-900 font-semibold'>Create an account</Link>
        </p>
      </form>
    </Form>
      </div>
  )
}
