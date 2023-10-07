import { type ServeOptions } from 'bun'
Bun.serve({
  async fetch(request: Request) {
    // const url = new URL(request.url)
    // return new Response(url.href)
    throw new Error('bad request')
  },
  error(error) {
    console.log(error)
    return new Response('oops!!')
  },
})
