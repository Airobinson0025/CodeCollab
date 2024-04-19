import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaCircle } from 'react-icons/fa6'
import { Image } from 'lucide-react'
import { EraserIcon } from '@radix-ui/react-icons'
EraserIcon

const RecentSessionCard = ({ id, sessionName, lastVisited, participants, mission, status }) => {

  return (
    <Card className='flex flex-col justify-between shadow-md aspect-square'>
        <div>
            <CardHeader>
                <CardTitle>{sessionName}</CardTitle>
                <CardDescription>Misson: {mission}</CardDescription>
            </CardHeader>
        </div>
        <CardFooter className='flex items-center justify-between'>
                <p>Status: {status}{ status === 'Online' ? <FaCircle color='green' size={10} className='inline ml-1'/> : <FaCircle   color='#d5ab09' size={10} className='inline ml-1' />}</p>
                <div className='flex items-center gap-2'>
                  <Link href='#'>
                      <Button className='hover:bg-primary hover:text-secondary transition duration-200' size='sm' variant=''>Join</Button>
                  </Link>
                  <Button variant='secondary' size='sm' className='hover:bg-destructive hover:text-white transition duration-300'>Delete</Button>
                </div>
        </CardFooter>
    </Card>
  )
}

export default RecentSessionCard