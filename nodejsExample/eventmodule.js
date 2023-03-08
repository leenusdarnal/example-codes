const EventEmitter = require('node:events')

const emitter = new EventEmitter()

emitter.on('order-pizza', (size, toppings) => {
  console.log(`order received baking a ${size} with ${toppings} pizza started`)
})

emitter.on('order-pizza', (size) => {
  if (size === 'large') {
    console.log(`compplementary drinks served`)
  }
})
emitter.emit('order-pizza', 'large', 'mushroom')
