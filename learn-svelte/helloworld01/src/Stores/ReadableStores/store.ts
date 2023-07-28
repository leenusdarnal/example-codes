import { readable } from 'svelte/store'

export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date())
  }, 1000)
  // setup code goes here`
  return function stop() {
    // teardowm code goes here
    clearInterval(interval)
  }
})
