'use server'

import prisma from '@/app/lib/prisma'
import bcrypt from 'bcryptjs'
import toast from 'react-hot-toast'
import { redirect } from 'next/navigation'

//import { User } from '@prisma/client'

import { hash } from 'bcrypt'
type SignupState = {
  success?: boolean
  errors: { field: string; message: string }[]
  input?: {
    name?: string
    email?: string
    password?: string
  }
}

export async function signupAction(
  prevState: SignupState,
  formData: FormData
): Promise<SignupState> {
  const name = formData.get('name')?.toString().trim() || ''
  const email = formData.get('email')?.toString().trim() || ''
  const password = formData.get('password')?.toString().trim() || ''

  const errors: { field: string; message: string }[] = []

  if (!name) errors.push({ field: 'name', message: 'Name is required.' })
  if (!email) errors.push({ field: 'email', message: 'Email is required.' })
  if (!password)
    errors.push({ field: 'password', message: 'Password is required.' })

  // Only check email format if email is not empty
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email && !emailRegex.test(email)) {
    errors.push({ field: 'email', message: 'Invalid email format.' })
  }
  // Only check if email exists if there are no email errors yet
  if (email && errors.filter((e) => e.field === 'email').length === 0) {
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      errors.push({ field: 'email', message: 'Email already exists.' })
    }
  }

  if (errors.length > 0) {
    return {
      errors,
      input: { name, email },
    }
  }

  // Hash password & create
  await prisma.user.create({
    data: {
      name,
      email,
      password: await bcrypt.hash(password, 10),
    },
  })
  return {
    success: true,
    errors: [],
    input: {},
  }
}

type ActionError = {
  field: string
  message: string
}

type ActionResponse<T = unknown> = {
  success: boolean
  payload: T | null
  message: string | null
  errors: ActionError[]
  input?: any
}

export async function createUser(
  prevState: ActionResponse<any>,
  formData: FormData
): Promise<ActionResponse<any>> {
  // Extract data
  const name = formData.get('name')
  const email = formData.get('email')
  const password = formData.get('password')

  let errors: ActionError[] = []

  if (!name || (typeof name === 'string' && name.trim() === '')) {
    errors.push({ field: 'name', message: 'Name is required' })
  }
  if (!email || (typeof email === 'string' && email.trim() === '')) {
    errors.push({ field: 'email', message: 'Email is required' })
  }
  if (!password || (typeof password === 'string' && password.trim() === '')) {
    errors.push({ field: 'password', message: 'Password is required' })
  }

  if (errors.length > 0) {
    return {
      success: false,
      payload: null,
      message: null,
      errors,
      input: { name, email, password },
    }
  }
  // Proceed
  try {
    // Proceed create user
    const hashedPass = await hash(password as string, 12)
    const user = await prisma.user.create({
      data: {
        name: name as string,
        email: email as string,
        password: hashedPass,
      },
    })

    return {
      success: true,
      payload: user,
      message: null,
      errors: [],
      input: { name, email, password },
    }
  } catch (error) {
    console.log(error)

    return {
      success: false,
      payload: null,
      message: 'Something went wrong',
      errors: [],
    }
  }
}
