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
    <div className="flex flex-col min-h-dvh border  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {/* Sticky header */}
      <Header />

      {/* main content */}
      <main>{children}</main>

      {/* Footer stays at bottom after scrolling */}
      <Footer />
    </div>
  )
}
