import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <div>
        Go to <a href='/dashboard'>Dashboard</a>
      </div>
    </main>
  )
}
