import { getSession } from 'next-auth/react'

export default async (req, res) => {
  const session = await getSession({ req })
  if (!session) {
    res.status(401).json({ error: 'Unauthicated User' })
  } else {
    res.status(200).json({ messsage: 'sucesss', session })
  }
}
