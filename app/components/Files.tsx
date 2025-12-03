import type { File } from '@prisma/client'
import FileCard from '@/app/components/FileCard'

export default function Files({ files }: { files: File[] }) {
  return (
    <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-transparent">
      <div className="flex gap-5 w-max min-w-full">
        {files.map((file: File, i) => (
          <FileCard key={i} file={file} />
        ))}
      </div>
    </div>
  )
}
