import Bare from '../templates/Bare'
import Logo from '../components/Logo'
import FormSignup from '../components/forms/FormSignup'
import Link from 'next/link'

export default function Signup() {
  return (
    <Bare className="!p-0 !max-w-none !mx-0 bg-gradient-to-br from-orange-50 to-teal-50">
      {/* Logo in upper left */}
      <div className="absolute top-6 left-6 z-10">
        <Logo />
      </div>

      <div className="flex items-center justify-center min-h-screen py-12 px-4">
        <div className="w-full max-w-2xl">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-orange-500 to-teal-500 px-10 py-8 text-white">
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-2">Create Account</h1>
                <p className="text-white/90">
                  Join StudyBuddy and start learning smarter today
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="px-10 py-8">
              <FormSignup />

              {/* Login Link */}
              <div className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="text-orange-600 hover:text-orange-700 font-semibold underline"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Bare>
  )
}
