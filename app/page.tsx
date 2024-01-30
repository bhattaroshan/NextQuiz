import Image from 'next/image'
import { Button, Input, Typography } from '@mui/material'




export default function Home() {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='flex flex-col justify-center items-center border p-10 rounded-xl'>
        <Typography className='font-bold mb-6'>LogIn</Typography>
        <Input disableUnderline className='border rounded px-2'/>
        <Button>Click Me</Button>

      </div>
    </div>
  )
}
