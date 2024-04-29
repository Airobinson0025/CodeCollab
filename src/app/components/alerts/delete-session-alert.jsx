import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "../ui/alert-dialog"
  import { Button } from "../ui/button"


const DeleteSessionAlert = ({id, onDelete}) => {

    async function deleteSession() {
        const response = await fetch(`/api/session/${id}/delete`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if(response.ok) {
          onDelete(id)
        }
      }

  return (
    <AlertDialog>
        <AlertDialogTrigger aschild>
            <Button variant='secondary' size='sm' className='hover:bg-destructive hover:text-white transition duration-200'>Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to delete this session?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the session for you and it&apos;s associated memebers.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={deleteSession}>Yes, Im sure</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteSessionAlert