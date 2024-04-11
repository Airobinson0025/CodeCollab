'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  username: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }).regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must contain at least one special character' }),
  passwordConfirmation: z.string()
}).refine((data) => {
  return data.password === data.passwordConfirmation
}, {
  message: 'Passwords do not match',
  path: ['passwordConfirmation']
})


const SignUpForm = () => {

  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  })

  const onSubmit = async (values) => {
    try {
      const response = await fetch ('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: values.username,
          email: values.email,
          password: values.password,
          passwordConfirmation: values.passwordConfirmation
        })
      })
      if(response.ok) {
        const data = await response.json()
        console.log(data, { message: 'User created successfully'})
        router.push('/sign-in')
      }
    } catch (error) {
      console.error(error, { message: 'An error occurred creating user' })
    }
   }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5 w-full'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='pick a username' {...field} />
              </FormControl>
              {/* <FormDescription>This is your public display name</FormDescription> */}
              <FormMessage />
            </FormItem>
  )}>
        </FormField>

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='example@yahoo.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
  )}>
        </FormField>

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
  )}>
        </FormField>

        <FormField
          control={form.control}
          name='passwordConfirmation'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder='re-enter password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
  )}>
        </FormField>
        <Button type='submit' className='w-full'>Sign Up</Button>
      </form>
    </Form>
  )
}

export default SignUpForm