"use client";
import React, { useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation';

function Questions() {
    const searchParams = useSearchParams();
    const topic = searchParams.get("topic");
    const circleRef = useRef();

    useEffect(()=>{
        setInterval(()=>{
            const cirum = Math.PI*2*50/2;
            console.log(cirum);
            circleRef.current.style.strokeDashArray = `${cirum} ${cirum}`
            circleRef.current.style.strokeDashoffset = cirum;
        },1000);
    },[])

  return (
    <>
        <p className="text-white">{topic}</p>
        <svg height="120" width="120">
            <circle ref={circleRef} strokeWidth="10" stroke='white' fill='transparent' strokeDashoffset={2*Math.PI*50/2} r={50} cx={60} cy={60}/>
        </svg>
    </>
  )
}
;
export default Questions;