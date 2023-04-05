const mongoose = require('mongoose')

const User = require('./models/User')

const connectToDb = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://yetano:yetano10@mernappcluster0.6t0npzj.mongodb.net/?retryWrites=true&w=majority'
    )
    console.log(`connected to DB`)
  } catch (error) {
    console.error(error)
  }
}
connectToDb()

const addUser = async () => {
  const newUser = new User({ name: 'yetano', age: 25 })
  try {
    const userData = await User.create({ name: 'user2', age: '25' })
    userData.name = 'user5'
    const data = await userData.save()
    // const userData = await newUser.save()
    console.log(`user Saved data : ${data}`)
  } catch (error) {
    console.error(error)
  }
}

addUser()
