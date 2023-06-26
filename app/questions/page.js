"use client";
import React from 'react'
import { useSearchParams } from 'next/navigation';

function Questions() {
    const searchParams = useSearchParams();

    const topic = searchParams.get("topic");

  return (
    <p className="text-white">{topic}</p>
  )
}
;
export default Questions;