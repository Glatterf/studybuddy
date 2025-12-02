import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="px-5 py-5 flex items-center justify-between p-5 relative z-5">
        <div className="flex items-center gap-3">
          <Logo />
          <div className="hidden sm:flex items-center gap-2 ml-4">
            <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-teal-400 rounded-full"></div>
            <span className="text-sm font-medium bg-gradient-to-r from-orange-600 to-teal-600 text-transparent bg-clip-text">
              Your AI Study Companion
            </span>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <Link
            href="/login"
            className="button button--default px-6 py-2.5 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-200 relative group"
          >
            <span className="relative z-10">Login</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-teal-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </Link>
          <Link
            href="/signup"
            className="button button--default px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 relative overflow-hidden group"
          >
            <span className="relative z-10">Sign Up</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
          </Link>
        </div>
      </div>
    </header>
  )
}
