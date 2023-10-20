export async function GET(){
  console.log('Current_time GET Hanlder Invoked')
  return new Response(new Date(Date.now()).toLocaleTimeString())
}
export const prerender = true