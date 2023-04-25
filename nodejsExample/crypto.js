const { createHash } = require('crypto')

const hash = (input) => {
  return createHash('sha256').update(input).digest('hex')
}

let password = 'hi-mom'
const hash1 = hash(password)

password = 'hi-mom!'
const hash2 = hash(password)

console.log({ hash1, hash2 })
