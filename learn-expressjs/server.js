const express = require('express')

const app = express()
app.use(express.static('views'))

const userRouter = require('./routes/user')
app.use('/user', userRouter)

app.listen(3000, () => {
  console.log(`server running at port 3000`)
})
