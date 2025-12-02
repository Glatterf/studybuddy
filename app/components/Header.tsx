import Link from "next/link";

export default function Header() {
  return <header className="bg-white">
    <div className="container flex items-center justify-between  mx-auto p-5">
      {/** Logo */}
      <div className="font-bold text-2xl">StudyBuddy</div>

      {/** Action or buttons */}
      <div className="flex gap-3">
        <Link href="/login" className="button button--default">Login</Link>
        <Link href="/signup" className="button button--default">signup</Link>
      </div>
    </div>
  </header>
}