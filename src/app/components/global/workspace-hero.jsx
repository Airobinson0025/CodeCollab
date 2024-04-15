'use client'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'


const WorkspaceHero = () => {
    
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-[650px] rounded-md text-white my-10 filter brightness-100'>
        <div className='absolute bg-[url(https://images.unsplash.com/photo-1487284122274-e864e9dec2bf?q=80&w=2372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] brightness-75 rounded-md bg-cover bg-center h-full w-full'></div>

        <div className='relative'>
            <h1>Build it all, together.</h1>
        </div>

        <Link href='#' className='relative'>
            <Button size='lg' variant='secondary' className="border hover:border-white hover:scale-105 transition duration-500">Invite a Friend</Button>
        </Link>
    </div>
  )
}

export default WorkspaceHero