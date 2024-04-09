'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'



const formSchema = z.object({
  email: z.string().min(1, 'Email is require').email('Invalid email'),
  password: z.string().min(1, 'Password is required' ).min(6, 'Password must be at least 6 characters').regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')

})


const SignInForm = () => {

  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async (values) => {
      const signInData = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false
      })
      if(signInData.error) {
        console.log(signInData.error)
      } else {
        router.push('/dashboard')
      }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5 w-full'>
        <FormField
          control={form.control}
          name='email'
          render={({field}) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placehodler='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}>
        </FormField>

        <FormField
          control={form.control}
          name='password'
          render={({field}) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input  type='password' placehodler='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}>
        </FormField>
        
        <Button type='submit' className='w-full'>Sign In</Button>
      </form>
    </Form>
  )
}

export default SignInForm