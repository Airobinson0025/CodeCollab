'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({})




const SignUpForm = () => {

  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    }
  })

  const onSubmit = (data) => {
    console.log(data)
   }

  return (
    <Form {...form}>
      <form onClick={form.handleSubmit(onSubmit)} className='space-y-7 w-full'>
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
          name='confirmPassword'
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
      </form>

      <Button type='submit' onClick={form.handleSubmit(onSubmit)} className='w-full'>Sign Up</Button>
    </Form>
  )
}

export default SignUpForm