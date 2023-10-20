import { browser } from "$app/environment"

export const load= async ({fetch}) => {
  console.log(`Home page universal load funtion called ${browser}`);

  const response = await fetch("/api/current-time")
  const currentTime = await response.text()
  return {currentTime}
}
export const prerender = true
export const csr = false