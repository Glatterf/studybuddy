import Default from './templates/Default'
import FormChat from '@/app/components/forms/FormChat'

export default function Home() {
  return (
    <Default className="flex items-center justify-center bg-gradient-to-br from-orange-50 to-teal-50  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex flex-col lg:flex-row gap-0 w-full h-screen ">
        {/** Welcome message - Left Side */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-orange-500 to-teal-600 relative ">
          {/* Decorative circles */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"></div>

          <div className="max-w-lg w-full px-12 relative z-10">
            <div className="flex flex-col gap-6">
              {/* icon area */}
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
                <span className="text-white/90 font-semibold text-lg">
                  Study Buddy
                </span>
              </div>

              <div>
                <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
                  Hello, Guest!
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Your AI-powered study companion is ready to help you excel.
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="text-white/90">
                    <p className="font-medium">Upload Your Notes</p>
                    <p className="text-sm text-white/70">
                      Instantly organize and analyze your study materials
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="text-white/90">
                    <p className="font-medium">Get Instant Answers</p>
                    <p className="text-sm text-white/70">
                      Ask questions and receive AI-powered explanations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="text-white/90">
                    <p className="font-medium">Study Smarter</p>
                    <p className="text-sm text-white/70">
                      Generate quizzes, summaries, and flashcards
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/80 text-sm">
                  Ready to get started?{' '}
                  <a
                    className="text-white font-semibold hover:underline underline-offset-2 transition-all"
                    href="/signup"
                  >
                    Create your free account →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/** Form - Right Side */}
        <div className="flex-1 flex items-center justify-center bg-white">
          <div className="w-full max-w-full px-12">
            <FormChat />
          </div>
        </div>
      </div>
    </Default>
  )
}
