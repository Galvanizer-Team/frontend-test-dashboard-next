import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function AuthPage() {
  return (
    <main className={`p-20 w-[600px] ${inter.className}`}>
      <h1 className="text-4xl">Auth.</h1>
      <div className="text-sm mt-1 text-zinc-700">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quidem soluta sit enim velit veniam officia unde
          voluptates iure. Aliquid.
        </p>
      </div>
    </main>
  )
}
