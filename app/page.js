//"use client"

import Image from 'next/image'
import Link from 'next/link';
import Questions from './questions/page';
import { useDispatch } from 'react-redux';
import {setGenre} from '@/redux/features/genre-slice';
import { useRouter } from 'next/navigation';

const baseURL = "https://openlibrary.org/people/bhattaroshan/books/already-read.json";

async function getData() {
  const res = await fetch(baseURL);
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {

  const data = await getData();
  const entries = data.reading_log_entries;

  

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
    <div className="flex flex-col gap-10 justify-center items-center my-20">
      <div className="grid grid-cols-4 gap-4">
        {
        categories.map((v,i)=>{
          return <Link key={i} href={{
            pathname:"/questions",
            query:{
              topic:v.name.toLowerCase()
            }
          }}>
                <div className={`w-16 h-16 md:w-40 md:h-40 ${v.color} 
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
      {
        entries.map((v,i)=>{
          console.log(v?.work?.title);
          return (
            <div key={i} className='w-5/12 bg-flat-red text-white rounded-lg '>
              <p className='p-4 text-xl '>{i+1}. {v?.work?.title}</p>
            </div>
          );
        })
      }
    </div>
  );
}
