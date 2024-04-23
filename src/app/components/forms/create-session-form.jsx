'use client'
import React from 'react'
import { Form, FormField, FormLabel, FormControl, FormMessage, FormItem } from '../ui/form'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
    title: z.string().min(2, 'Title must be at least 2 charactes long').max(100, 'Title must be less than 50 characters'),
    description: z.string().min(2, 'Ti').max(100, 'Mission must be less than 100 characters'),
})

const CreateSessionForm = () => {

  const router = useRouter()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            description: '',
        }
    })

    const onSubmit = async (values) => {
        try {
            const response = await fetch('/api/session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: values.title,
                    description: values.description
                })
            })
            if(response.ok) {
                const data = await response.json()
                const id = data.session.id
                console.log('Session created successfully.', data)
                // router.push(`workspace/sessions/${id}`)
            }
        } catch (error) {

            console.error(error, 'Error creating session. Please try again.')

        }
    }

  return (
    <Form {...form}>
        <motion.form
            initial={{ y: 20, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ ease: 'easeInOut', duration: 0.5 }} 
            onSubmit={form.handleSubmit(onSubmit)} 
            className='flex flex-col p-8 border rounded-md gap-7'>
        <h3>Create a New Collab Session</h3>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pick a Title for Your Collab Session</FormLabel>
              <FormControl>
                <Input placeholder='Session Title' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
        )} />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Collab Session Description</FormLabel>
              <FormControl>
                <Input placeholder='Ex. "Saas Product Brainstorm" ( Max 100 Characters )' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
  )} />
        <Button type='submit'>Create New Session</Button>
        </motion.form>
    </Form>
  )
}

export default CreateSessionForm