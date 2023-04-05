import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1> Next JS pre-rendering</h1>
      <Link href='/users'>
        <button>Users</button>
      </Link>
      <hr />
      <Link href='/posts'>
        <button>Posts</button>
      </Link>
      <hr />
      <Link href='/products'>
        <button>Products</button>
      </Link>
      <hr />
      <Link href='/news'>
        <button>News</button>
      </Link>
    </>
  )
}
