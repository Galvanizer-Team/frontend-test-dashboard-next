import { Space_Mono } from "next/font/google"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function Home() {
  return (
    <main className={`p-6 md:p-20 w-[600px] ${spaceMono.className}`}>
      <h1 className={`text-4xl mb-6 `}>Hey There,</h1>
      <div className={`flex flex-col gap-6 leading-5 `}>
        <p>This is a frontend application used to test some microservices.</p>
        <div className="flex flex-col gap-2 underline">
          <p>The latest version&apos;s just chilling.</p>
        </div>
      </div>
    </main>
  )
}
