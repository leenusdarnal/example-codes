import { useRouter } from 'next/router'
import { useState } from 'react'

const EventsList = ({ eventList }) => {
  const [events, setEvents] = useState(eventList)
  const router = useRouter()

  const fetchSportsEvents = async () => {
    const response = await fetch(`http://localhost:4000/events?category=sports`)
    const data = await response.json()
    setEvents(data)
    router.push('/events?category=sports', undefined, { shallow: true })
    console.log(`settting new  EventsList`)
  }
  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of Events</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default EventsList
