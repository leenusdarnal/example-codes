import Link from "next/link"

export default function Navbar() {
  return (
    <div className="w-full">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-8 lg:justify-between xl:px-0">
        <div className="flex  flex-wrap items-center justify-between">
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-gray-100">
              <span>Tumo Kankaanpaa</span>
            </span>
          </Link>
        </div>

        <div className="nav_items :flex mr-2  space-x-4">
          <Link href="/" locale="fi">
            Suomeksi
          </Link>
          <Link href="/" locale="en">
            In English
          </Link>
          <Link
            href="#contact"
            className="rounded-md bg-indigo-600 px-6 py-2 text-white md:ml-5"
          >
            Book me!
          </Link>
        </div>
      </nav>
    </div>
  )
}
