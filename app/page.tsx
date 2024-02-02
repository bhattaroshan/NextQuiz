import Image from 'next/image'
import { Button, Input, Typography } from '@mui/material'




export default function Home() {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='flex flex-col justify-center items-center border p-10 rounded-xl'>
        <Typography className='font-bold mb-6'>LogIn</Typography>
        <Input disableUnderline className='border rounded px-2'/>
        <Button variant='outlined' sx={{my:'20px'}}>Log In</Button>
        <Button variant='outlined' sx={{my:'10px'}}>Log Out</Button>
        <Button variant='outlined' sx={{my:'10px'}}>Profile</Button>
        <Typography>Testing here</Typography>
      </div>
    </div>
  )
}
