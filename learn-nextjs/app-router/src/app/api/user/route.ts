import { NextRequest } from 'next/server'
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search')
  console.log(search)
  console.log('GET ROute')
  return new Response(JSON.stringify({ name: 'John' }), { status: 401 })
}
