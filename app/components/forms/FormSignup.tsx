'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { signupAction } from '@/app/lib/actions/user'
import { useActionState } from 'react'
import React from 'react'
import { redirect } from 'next/navigation'
import toast from 'react-hot-toast'

// Type for each error entry
type FieldError = {
  field: string
  message: string
}

// The shape of the state coming from the server action
type SignupState = {
  success?: boolean
  errors: FieldError[]
  input?: {
    name?: string
    email?: string
  }
}

export default function FormSignup() {
  const [state, formAction] = useActionState(signupAction, { errors: [] })
  React.useEffect(() => {
    if (state.success) {
      toast.success('Logged in successfully! Redirecting...')
      const timer = setTimeout(() => redirect('/login'), 1000)
      return () => clearTimeout(timer)
    }
  }, [state.success])

  const { pending } = useFormStatus()

  return (
    <form
      data-loading={pending}
      action={formAction}
      className="space-y-5"
      noValidate
    >
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Full Name
        </label>

        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          defaultValue={state?.input?.name}
          className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 text-base ${
            state?.errors.find((error: FieldError) => error.field === 'name')
              ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100'
              : 'border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100'
          }`}
        />

        {state?.errors.find((e: FieldError) => e.field === 'name') && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            {state.errors.find((e: FieldError) => e.field === 'name')?.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email Address
        </label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          defaultValue={state?.input?.email}
          className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 text-base ${
            state?.errors.find((error: FieldError) => error.field === 'email')
              ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100'
              : 'border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100'
          }`}
        />

        {state?.errors.find((e: FieldError) => e.field === 'email') && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            {state.errors.find((e: FieldError) => e.field === 'email')?.message}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Password
        </label>

        <input
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 text-base ${
            state?.errors.find(
              (error: FieldError) => error.field === 'password'
            )
              ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100'
              : 'border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100'
          }`}
        />

        {state?.errors.find((e: FieldError) => e.field === 'password') && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            {
              state.errors.find((e: FieldError) => e.field === 'password')
                ?.message
            }
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={pending}
        className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-teal-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-teal-600 shadow-md hover:shadow-lg transition-all duration-200 text-base disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? 'Please wait...' : 'Sign Up'}
      </button>
    </form>
  )
}
