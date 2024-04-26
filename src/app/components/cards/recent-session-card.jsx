import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaCircle } from 'react-icons/fa6'
import { EraserIcon } from '@radix-ui/react-icons'
EraserIcon

const RecentSessionCard = ({ id, title, description, status, members }) => {

  return (
    <Card className='flex flex-col justify-between shadow-xl h-[200px]'>
        <div>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
        </div>
        <CardFooter className='flex items-center justify-between'>
                <div>
                  { status === true ? (
                    <div className='flex items-center gap-2'>
                      <p>Online</p>
                      <FaCircle className='text-primary' size={15}/>
                    </div>
                  ) : (
                    <div className='flex items-center gap-2'>
                      <p>Offline</p>
                      <FaCircle className='text-destructive' size={15}/>
                    </div>
                  
                  )}
                </div>
                <div className='flex items-center gap-2'>
                  <Link href={`/workspace/sessions/${id}`}>
                      <Button className='hover:bg-primary hover:text-secondary transition duration-200' size='sm' variant=''>Join</Button>
                  </Link>
                  <Button variant='secondary' size='sm' className='hover:bg-destructive hover:text-white transition duration-300'>Delete</Button>
                </div>
        </CardFooter>
    </Card>
  )
}

export default RecentSessionCard