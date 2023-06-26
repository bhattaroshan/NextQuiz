//"use client"

import Image from 'next/image'
import Link from 'next/link';
import Questions from './questions/page';
import { useDispatch } from 'react-redux';
import {setGenre} from '@/redux/features/genre-slice';
import { useRouter } from 'next/navigation';

export default function Home() {

  const categories = [
    {
      name: "HISTORY",
      color: "bg-flat-red",
      hoverColor: "hover:bg-flat-lightred",
      image: "/images/icon-history.png"
    },
    {
      name: "FOOD",
      color: "bg-flat-green",
      hoverColor: "hover:bg-flat-lightgreen",
      image: "/images/icon-history.png"
    },
    {
      name: "MOVIES",
      color: "bg-flat-blue",
      hoverColor: "hover:bg-flat-lightblue",
      image: "/images/icon-hitory.png"
    },
    {
      name: "GEOGRAPHY",
      color: "bg-flat-yellow",
      hoverColor: "hover:bg-flat-lightyellow",
      image: "/images/icon-history.png"
    },
    {
      name: "HISTORY",
      color: "bg-flat-blue",
      hoverColor: "hover:bg-flat-lightblue",
      image: "/images/icon-history.png"
    },
    {
      name: "GEOGRAPHY",
      color: "bg-flat-yellow",
      hoverColor: "hover:bg-flat-lightyellow",
      image: "/images/icon-history.png"
    },
    {
      name: "HISTORY",
      color: "bg-flat-red",
      hoverColor: "hover:bg-flat-lightred",
      image: "/images/icon-history.png"
    },
    {
      name: "HISTORY",
      color: "bg-flat-green",
      hoverColor: "hover:bg-flat-lightgreen",
      image: "/images/icon-history.png"
    },
    {
      name: "FOOD",
      color: "bg-flat-green",
      hoverColor: "hover:bg-flat-lightgreen",
      image: "/images/icon-history.png"
    },
    {
      name: "HISTORY",
      color: "bg-flat-red",
      hoverColor: "hover:bg-flat-lightred",
      image: "/images/icon-history.png"
    },
    {
      name: "HISTORY",
      color: "bg-flat-blue",
      hoverColor: "hover:bg-flat-lightblue",
      image: "/images/icon-history.png"
    },
    {
      name: "HISTORY",
      color: "bg-flat-yellow",
      hoverColor: "hover:bg-flat-lightyellow",
      image: "/images/icon-history.png"
    }
  ]

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-4 gap-4">
        {
        categories.map((v,i)=>{
          return <Link href={{
            pathname:"/questions",
            query:{
              topic:v.name.toLowerCase()
            }
          }}>
                <div key={i} className={`w-16 h-16 md:w-40 md:h-40 ${v.color} 
                                              hover:scale-105 hover:cursor-pointer ${v.hoverColor}
                                              rounded-xl flex flex-col justify-between items-center p-4
                                              `}
                                            >
                          <Image priority src={"/images/icon-history.png"} width={80} height={80} alt={v.name}/>
                          <p className="text-vs md:text-lg text-white">{v.name}</p>
                </div>
              </Link>
      
        })
      }
      </div>
    </div>
  );
}
