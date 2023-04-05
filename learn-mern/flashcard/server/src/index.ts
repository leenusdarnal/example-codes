import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import cors from 'cors'

import Deck from './models/Deck'

config()

const PORT = 5000
const app = express()
app.use(express.json())
app.use(cors())

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL ?? '')
    console.log(`connected to DB`)
    //Server start Listening
    app.listen(PORT, () => {
      console.log(`server running at ${PORT}`)
    })
  } catch (error) {
    console.error(error)
  }
}
connectToDB()

app.get('/decks', async (req: Request, res: Response) => {
  const decks = await Deck.find()
  console.log('All Decks fetched')
  res.send(decks)
})

app.delete('/decks/:deckId', async (req: Request, res: Response) => {
  const deckId = req.params.deckId
  const deck = await Deck.findByIdAndDelete(deckId)
  console.log(`Deck with id:${deckId} deleted`)
  res.json(deck)
})

app.post('/decks', async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  })
  const createdDeck = await newDeck.save()
  console.log(`New Deck created`)
  res.json(createdDeck)
})
