
import React from 'react'
import { Button } from '../ui/button'
import { AlertDialog, AlertDialogCancel, AlertDialogAction, AlertDialogDescription, AlertDialogTrigger, AlertDialogTitle, AlertDialogFooter, AlertDialogHeader } from '@/components/ui/alert-dialog'
import { AlertDialogContent } from '@radix-ui/react-alert-dialog'

const SessionDeleteAlert = () => {
  return (
    <AlertDialog>
        <AlertDialogTrigger>
            <Button variant='secondary' size='sm' className='hover:bg-destructive transition duration-300'>Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
        <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure you want to delete this session?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the session and its memebers.
            </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Yes, Im Sure.</AlertDialogAction>
        </AlertDialogFooter>
        </AlertDialogContent>

    </AlertDialog>
  )
}

export default SessionDeleteAlert