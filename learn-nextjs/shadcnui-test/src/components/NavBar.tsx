import { ModeToggle } from "@/components/ThemeToggle"
export function NavBar() {
  return (
    <div className="flex justify-between px-5 py-2 ">
      <a href="/">Home</a>
      <div className="flex gap-5">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/team">Team</a>
      </div>
      <ModeToggle />
    </div>
  )
}
