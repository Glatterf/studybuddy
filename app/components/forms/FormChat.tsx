'use client'

import { useChat } from '@ai-sdk/react'
import { useState, useRef, useEffect } from 'react'
import { UserRound, Bot, Send } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */

export default function FormChat() {
  // AI SDK
  const { messages, sendMessage } = useChat({
    onError: (error) => {
      console.log('error: ', error)
      setError(error.toString())
    },
  })

  // States
  const [error, setError] = useState('')
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Ref for auto-scrolling
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  // Functions
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()

      // trigger
      const form = e.currentTarget.form
      if (form && input.trim()) {
        form.requestSubmit()
      }
    }
  }

  // Handle chat
  async function handleChat(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!input) return

    try {
      setIsLoading(true)
      await sendMessage({ text: input })
      setInput('')
    } catch (error: any) {
      console.log('error: ', error)
      setError(error.toString())
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-full w-full max-w-full mx-auto p-6">
      {/*Message Display Area with scrolling*/}
      <div
        ref={messagesContainerRef}
        className="flex-1 max-h-[700px] overflow-y-auto overflow-x-hidden mb-4 pr-2 
             scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400"
      >
        {messages && messages.length > 0 ? (
          <div className="flex flex-col gap-4">
            {messages.map((message) => (
              <div
                data-loading={isLoading}
                key={message.id}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/*Avatar*/}
                <div
                  className={`h-9 w-9 flex-shrink-0 rounded-full flex items-center justify-center ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-orange-500 to-teal-500 text-white'
                      : 'bg-gray-100 text-gray-600 border border-gray-200'
                  }`}
                >
                  {message.role === 'user' ? (
                    <UserRound className="w-5 h-5" />
                  ) : (
                    <Bot className="w-5 h-5" />
                  )}
                </div>

                {/*Message Content*/}
                <div className="flex flex-col gap-1 max-w-[75%]">
                  <div
                    className={`p-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-orange-500 to-teal-500 text-white rounded-tr-sm'
                        : 'bg-gray-100 text-gray-800 rounded-tl-sm border border-gray-200'
                    }`}
                  >
                    {message.parts.map((part, i) => {
                      switch (part.type) {
                        case 'text':
                          return (
                            <div
                              key={`${message.id}-${i}`}
                              className="prose prose-sm max-w-none [&>p]:mb-2 [&>p]:last:mb-0 [&>ul]:mb-2 [&>ul>li]:list-disc [&>ul>li]:ml-4 [&>ol>li]:list-decimal [&>ol>li]:ml-4 [&>h1]:text-lg [&>h2]:text-base [&>h3]:text-sm [&>code]:bg-black/10 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded"
                            >
                              <ReactMarkdown>{part.text}</ReactMarkdown>
                            </div>
                          )
                      }
                    })}
                  </div>
                </div>
              </div>
            ))}
            {/*Mark end of chat*/}
            <div ref={messagesEndRef} />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <div className="text-center">
              <Bot className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm">Start a conversation...</p>
            </div>
          </div>
        )}
      </div>

      {/*Input*/}
      <form
        data-loading={isLoading}
        onSubmit={(e) => handleChat(e)}
        className="flex flex-col gap-2"
      >
        <div className="relative">
          <textarea
            name="message"
            placeholder="Ask me anything..."
            className="w-full p-4 pr-12 border-2 border-gray-200 rounded-2xl resize-none 
      focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all 
      duration-200 min-h-15 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
      [scrollbar-width:none]
      [overflow:overlay]
      [&::-webkit-scrollbar-button]:hidden
      [&::-webkit-resizer]:hidden"
            rows={1}
            onKeyDown={handleKeyDown}
            value={input}
            onChange={(e) => {
              setInput(e.currentTarget.value)
              // Auto-resize textarea
              e.currentTarget.style.height = 'auto'
              e.currentTarget.style.height =
                Math.min(e.currentTarget.scrollHeight, 128) + 'px'
            }}
            disabled={isLoading}
          />

          {/* Button aligned with textarea's bottom-right */}
          <div className="absolute right-2 bottom-4 flex items-center justify-center">
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2 bg-gradient-to-r from-orange-500 to-teal-500 text-white rounded-lg 
        hover:from-orange-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed 
        transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}
      </form>
    </div>
  )
}
