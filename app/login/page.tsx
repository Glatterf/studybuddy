'use client'

import Default from '../templates/Default'
import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  return (
    <Default className="!p-0 !max-w-none !mx-0 bg-gradient-to-br from-orange-50 to-teal-50">
      <div className="flex items-center justify-center min-h-full py-12 px-4">
        <div className="w-full max-w-2xl">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-orange-500 to-teal-500 px-10 py-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold">Welcome Back</h1>
              </div>
              <p className="text-white/90">
                Sign in to continue your learning journey
              </p>
            </div>

            {/* Form Section */}
            <div className="px-10 py-8">
              <form className="space-y-5">
                {/* Email */}
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200 text-base"
                    required
                  />
                </div>

                {/* Password */}
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200 text-base"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-orange-600 hover:text-orange-700 font-medium underline mt-2"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-700">
                    Remember me for 30 days
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-teal-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-teal-600 shadow-md hover:shadow-lg transition-all duration-200 text-base"
                >
                  Sign In
                </button>
              </form>

              {/* Sign Up Link */}
              <div className="mt-6 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link
                  href="/signup"
                  className="text-orange-600 hover:text-orange-700 font-semibold underline"
                >
                  Create one now
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Secure login powered by StudyBuddy
            </p>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setShowForgotPassword(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-orange-500 to-teal-500 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Reset Password</h2>
              <button
                onClick={() => setShowForgotPassword(false)}
                className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="reset-email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="reset-email"
                    name="reset-email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200"
                    required
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(false)}
                    className="flex-1 px-6 py-2.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-teal-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-teal-600 transition-all duration-200"
                  >
                    Send Link
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </Default>
  )
}
