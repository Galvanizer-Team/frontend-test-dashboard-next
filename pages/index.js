import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={`p-20 w-[600px] ${inter.className}`}>
      <h1 className="text-4xl">Hello There.</h1>
      <p className="text-sm mt-1 text-zinc-700">This is a frontend application used to test some microservices.</p>
    </main>
  )
}
