import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function Default({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-dvh border">
      <Header />
      <main className={` ${className}`}>{children}</main>
      <Footer />
    </div>
  )
}
