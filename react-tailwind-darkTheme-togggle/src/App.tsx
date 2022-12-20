import { useEffect, useState } from 'react'

export default function App() {
  const [dark, setDark] = useState(false)
  // useEffect(() => {
  //   switch (theme) {
  //     case 'Sun':
  //       console.log(document.documentElement.classList.remove('dark'))
  //       // console.log(document.querySelector('html')?.classList.remove('dark'))
  //       console.log(`removed dark`)
  //       break

  //     case 'Moon':
  //       document.documentElement.classList.add('dark')
  //       // document.querySelector('html')?.classList.add('dark')
  //       console.log(`added dark`)
  //       break

  //     default:
  //       break
  //   }
  // }, [])
  return (
    <div className={`${dark ? 'dark' : ''}`}>
      <section className='min-h-screen pt-8 dark:text-gray-100 dark:bg-slate-800 duration-100'>
        <div className='fixed top-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded-full'>
          <button
            onClick={() => setDark((prev) => !prev)}
            className={`w-15 h-10 leading-9 text-xl rounded-xl m-3 ${
              dark && 'text-sky-600'
            }`}
          >
            Toggle
          </button>
        </div>
        <div className='max-w-3xl mx-auto px-5'>
          <div className='text-center'>
            <h1>Code A program</h1>
            <h3>YOLO</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </div>
  )
}
