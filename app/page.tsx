import Image from 'next/image'
import { headers } from 'next/headers'
import { Button, Input, Typography } from '@mui/material'




export default function Home() {
  // const language = headers().get('Content-Language');
  // console.log(language);

  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen gap-4'>
      <Typography className='font-bold text-xl'>Hello Everybody</Typography>
      <div className='flex flex-col justify-center items-center border p-10 rounded-xl bg-red-50'>
        <Typography className='font-bold mb-6'>LogIn</Typography>
        <Input disableUnderline className='border rounded px-2'/>
        <Button variant='outlined' sx={{my:'20px'}}>Log In</Button>
        <Button variant='outlined' sx={{my:'10px'}}>Log Out</Button>
        <Button variant='outlined' sx={{my:'10px'}}>Profile</Button>
        <Typography>Testing here</Typography>
        <Typography className='font-thin text-sm mt-4 text-gray-500'>All rights reserved</Typography>
        {
          // language??
          // <Typography>{language}</Typography>
        }
      </div>
    </div>
  )
}
