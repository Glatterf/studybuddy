'use client'

import { useState, useRef, useEffect } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function FormLogin() {
  // Refs
  const formRef = useRef<HTMLFormElement>(null)

  // Hooks
  const router = useRouter()
  const { push: redirect } = router

  // Local state
  const [state, setState] = useState({
    message: '',
    success: false,
    errors: {
      email: '',
      password: '',
      system: '',
    },
    input: {
      email: '',
      password: '',
    },
  })
  const [pending, setPending] = useState(false)

  // Handle
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setPending(true)

    // Data
    // ?? undefined or null check like if (!formRef.current) return
    const formData = new FormData(formRef.current ?? undefined)
    const email = formData.get('email')?.toString().trim()
    const password = formData.get('password')?.toString().trim()

    if (!email || !password) {
      setState({
        message: '',
        success: false,
        errors: {
          email: !email ? 'Email is required.' : '',
          password: !password ? 'Password is required.' : '',
          system: '',
        },
        input: {
          email: email ?? '',
          password: password ?? '',
        },
      })
      setPending(false)
      return
    }

    try {
      // NextAuth
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      console.log('RES: ', res)

      if (res?.ok === true) {
        setState({
          message: 'Logged in successfully!',
          success: true,
          errors: {
            email: '',
            password: '',
            system: '',
          },
          input: {
            email: '',
            password: '',
          },
        })

        // Fetch the session to get user role
        const sessionRes = await fetch('/api/auth/session')
        const session = await sessionRes.json()

        console.log('Session: ', session)

        // Do some toast
        toast.success('Logged in successfully! Redirecting...')

        // Wait 1 second before redirecting
        setTimeout(() => {
          //
          redirect(`/`)
        }, 1000)

        //
      } else {
        console.log('Failed to login: ', res)
        setState({
          message: 'Login failed.',
          success: false,
          errors: {
            email: '',
            password: '',
            system: 'Login failed. Please check your credentials.',
          },
          input: {
            email: email ?? '',
            password: password ?? '',
          },
        })
      }

      //
    } catch (error) {
      //
      console.log(error)

      //
      setState({
        message: '',
        success: false,
        errors: {
          email: '',
          password: '',
          system: 'System error, please contact admin.',
        },
        input: {
          email: email ?? '',
          password: password ?? '',
        },
      })
    } finally {
      setPending(false)
    }
  }

  return (
    <form
      data-loading={pending}
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
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
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-200 text-base ${
            state?.errors.email
              ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100'
              : 'border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100'
          }`}
          required
        />
        {state?.errors.email && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            {state?.errors.email}
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
          defaultValue={state?.input?.password}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-200 text-base ${
            state?.errors.password
              ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100'
              : 'border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100'
          }`}
          required
        />
        {state?.errors.password && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            {state?.errors.password}
          </p>
        )}
      </div>

      {/* System error */}
      {state?.errors?.system && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-center gap-2">
          <svg
            className="w-5 h-5 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          <span>{state?.errors?.system}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={pending}
        className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-teal-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-teal-600 shadow-md hover:shadow-lg transition-all duration-200 text-base disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Please wait...
          </span>
        ) : (
          'Log in'
        )}
      </button>
    </form>
  )
}
