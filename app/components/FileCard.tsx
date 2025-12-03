'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { File } from '@prisma/client'
import Modal from '@/app/components/Modal'
import { format } from 'date-fns'

export default function FileCard({ file }: { file: File }) {
  // State
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        title={file.name}
        className=" bg-gray-100 w-30 h-50 p-3 rounded-lg hover:bg-gray-200 animated cursor-pointer  gap-2"
      >
        <div className="relative h-full w-full flex flex-col items-center justify-center group">
          {/* PDF Icon at top-left */}
          <Image
            src="/pdf.png"
            width={32}
            height={32}
            alt={file.name}
            className="absolute top-2 left-2 opacity-75 group-hover:opacity-100"
          />

          {/* Centered filename */}
          <div className="text-center text-sm break-words max-w-full ">
            {file.name}
          </div>
        </div>
      </div>
      {showModal && file && (
        <Modal
          title={file.name}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        >
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div>{format(file.createdAt, 'MMM dd, yyyy')}</div>
            </div>
            <div className="w-full h-[80dvh]">
              <iframe
                src={file?.url || ''}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
