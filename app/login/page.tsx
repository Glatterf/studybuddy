'use client'

import Bare from '../templates/Bare'
import Logo from '../components/Logo'
import FormsLogin from '../components/forms/FormLogin'
import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
  const [showForgotPassword, setShowForgotPassword] = useState(false)

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
                <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                <p className="text-white/90">
                  Sign in to continue your learning journey
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="px-10 py-8">
              <FormsLogin />

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
    </Bare>
  )
}
