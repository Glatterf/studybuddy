'use client'

import Default from '../templates/Default'
import Link from 'next/link'
import { useState } from 'react'

export default function Signup() {
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

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
                <h1 className="text-3xl font-bold">Create Account</h1>
              </div>
              <p className="text-white/90">
                Join StudyBuddy and start learning smarter today
              </p>
            </div>

            {/* Form Section */}
            <div className="px-10 py-8">
              <form className="space-y-5">
                {/* Full Name */}
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200 text-base"
                    required
                  />
                </div>

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

                {/* Password Fields in Grid */}
                <div className="grid grid-cols-2 gap-4">
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
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      name="confirm-password"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200 text-base"
                      required
                    />
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="mt-1 w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                    required
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-700 leading-relaxed"
                  >
                    I agree to the{' '}
                    <button
                      type="button"
                      onClick={() => setShowTerms(true)}
                      className="text-orange-600 hover:text-orange-700 underline font-medium"
                    >
                      Terms of Service
                    </button>{' '}
                    and{' '}
                    <button
                      type="button"
                      onClick={() => setShowPrivacy(true)}
                      className="text-teal-600 hover:text-teal-700 underline font-medium"
                    >
                      Privacy Policy
                    </button>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-teal-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-teal-600 shadow-md hover:shadow-lg transition-all duration-200 text-base"
                >
                  Create Account
                </button>
              </form>

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

      {/* Terms of Service Modal */}
      {showTerms && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setShowTerms(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-orange-500 to-teal-500 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Terms of Service</h2>
              <button
                onClick={() => setShowTerms(false)}
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
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
              <div className="prose prose-sm max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  1. Acceptance of Terms
                </h3>
                <p className="text-gray-600 mb-4">
                  By accessing and using StudyBuddy, you accept and agree to be
                  bound by the terms and provision of this agreement.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  2. Use License
                </h3>
                <p className="text-gray-600 mb-4">
                  Permission is granted to temporarily access the materials on
                  StudyBuddy for personal, non-commercial transitory viewing
                  only.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  3. User Account
                </h3>
                <p className="text-gray-600 mb-4">
                  You are responsible for maintaining the confidentiality of
                  your account and password. You agree to accept responsibility
                  for all activities that occur under your account.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  4. Content
                </h3>
                <p className="text-gray-600 mb-4">
                  Users are solely responsible for the content they upload.
                  StudyBuddy reserves the right to remove any content that
                  violates these terms.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  5. Limitation of Liability
                </h3>
                <p className="text-gray-600 mb-4">
                  StudyBuddy shall not be liable for any damages arising out of
                  the use or inability to use the materials on our platform.
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowTerms(false)}
                  className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-teal-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-teal-600 transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-orange-500 to-teal-500 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Privacy Policy</h2>
              <button
                onClick={() => setShowPrivacy(false)}
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
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
              <div className="prose prose-sm max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Information We Collect
                </h3>
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us, including
                  your name, email address, and any study materials you upload
                  to our platform.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How We Use Your Information
                </h3>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to provide, maintain, and
                  improve our services, to develop new features, and to protect
                  StudyBuddy and our users.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Information Sharing
                </h3>
                <p className="text-gray-600 mb-4">
                  We do not share your personal information with third parties
                  except as described in this policy or with your consent.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Data Security
                </h3>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, or destruction.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Your Rights
                </h3>
                <p className="text-gray-600 mb-4">
                  You have the right to access, update, or delete your personal
                  information at any time through your account settings.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Contact Us
                </h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy, please
                  contact us at privacy@studybuddy.com.
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-teal-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-teal-600 transition-all duration-200"
                >
                  Close
                </button>
              </div>
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
