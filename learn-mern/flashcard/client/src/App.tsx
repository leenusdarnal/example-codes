import { useEffect, useState } from 'react'

type TDeck = {
  title: string
  _id: string
}

function App() {
  const [title, setTitle] = useState('')
  const [decks, setDecks] = useState<TDeck[]>([])

  const handleCreateDeck = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/decks', {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const deck: TDeck = await response.json()
    setDecks([...decks, deck])
    setTitle('')
  }
  const handleDeleteDeck = async (deckId: string) => {
    const response = await fetch(`http://localhost:5000/decks/${deckId}`, {
      method: 'DELETE',
    })
    const data: TDeck = await response.json()
    alert(data.title)
  }

  useEffect(() => {
    const fetchDecks = async () => {
      const response = await fetch('http://localhost:5000/decks')
      const newDecks = await response.json()
      setDecks(newDecks)
    }
    fetchDecks()
  }, [])

  return (
    <div className=' flex flex-col justify-center min-h-screen gap-20 items-center p-5 text-white bg-slate-900'>
      <ol className='grid grid-cols-1 gap-10 md:grid-cols-3'>
        {decks.map((deck, index) => (
          <div
            className=' flex flex-col justify-center items-center border-2 w-96 
          font-bold text-center text-2xl text-black h-52
          border-red-900 bg-slate-300 rounded-3xl hover:cursor-pointer
          hover:bg-slate-100 '
          >
            <div className='relative '>
              <button
                className='absolute bottom-12 left-40'
                onClick={() => handleDeleteDeck(deck._id)}
              >
                X
              </button>
            </div>
            <li key={deck?._id}>{deck?.title}</li>
          </div>
        ))}
      </ol>
      <form className='mb-10' onSubmit={(e) => handleCreateDeck(e)}>
        <label htmlFor='deck-title' className='mr-3'>
          Deck Title
        </label>
        <input
          id='deck-title'
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          className='text-black outline-none pl-3'
        />
        <button className='ml-4 p-1 bg-teal-500 rounded-lg'>Create Deck</button>
      </form>
    </div>
  )
}

export default App
