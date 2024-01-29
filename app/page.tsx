import Image from 'next/image'

let name:number = 66;
let test:string = "my name is roshan";

name = 56;

export default function Home() {
  return (
    <>
      <p>{name}</p>
      <p>{test}</p>
      <p>Is there anything I can do for you?</p>
      <p>Testing here okay!</p>
    </>
  )
}
