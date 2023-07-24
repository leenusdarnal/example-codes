export const getRandomNumber = async () => {
  const res = await new Promise(
    (resolve, reject) =>
      setTimeout(() => resolve(Math.round(Math.random() * 100)), 1500)
    // reject('TEsting Await')
  )
  if (res) {
    return res
  } else {
    throw new Error('Promise failed')
  }
}
