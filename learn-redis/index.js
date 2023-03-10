import express from 'express'
import fetch from 'node-fetch'
import Redis from 'redis'
import cors from 'cors'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const PORT = 5000
const DEFAULT_EXPIRATION = 3600
const URL = `https://jsonplaceholder.typicode.com/photos`

const RedisClient = Redis.createClient()
const connecToRedis = async () => {
  try {
    await RedisClient.connect()
    console.log(`connected to redis`)
  } catch (error) {
    console.error(error)
  }
}

connecToRedis()

app.get('/photos', async (req, res) => {
  try {
    const albumId = req.query.albumId

    const newUrl = albumId ? URL + `?albumId=${albumId}` : URL

    const photos = await getOrSetCache(
      `photos?albumId=${albumId}`,
      async () => {
        const response = await fetch(newUrl, {
          method: 'GET',
        })
        const data = await response.json()
        return data
      }
    )
    res.json(photos)
  } catch (error) {
    console.error(error)
  }
})

app.get('/photos/:id', async (req, res) => {
  try {
    console.log(URL + `/${req.params.id}`)
    const photos = await getOrSetCache(
      `photos:id=${req.params.id}`,
      async () => {
        const response = await fetch(URL + `/${req.params.id}`, {
          method: 'GET',
        })
        const data = await response.json()
        return data
      }
    )
    res.json(photos)
  } catch (error) {
    console.log(error)
  }
})

const getOrSetCache = async (key, cb) => {
  try {
    const data = await RedisClient.GET(key)
    if (data !== null) {
      console.log(`cache hit`)
      return JSON.parse(data)
    } else {
      console.log(`cache miss`)
      const freshData = await cb()
      RedisClient.SETEX(key, DEFAULT_EXPIRATION, JSON.stringify(freshData))
      return freshData
    }
  } catch (error) {
    console.error(error)
  }
}

app.listen(PORT, (req, res) => {
  console.log(`server runnng at port ${PORT}`)
})
