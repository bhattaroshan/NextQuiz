import Image from 'next/image'

let name:number = 65;
let test:string = "my name is roshan";

name = 56;

export default function Home() {
  return (
    <>
      <p>{name}</p>
      <p>{test}</p>
    </>
  )
}
