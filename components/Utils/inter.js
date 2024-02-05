import { Inter } from "next/font/google"
const interFont = Inter({ subsets: ["latin"] })

export default function inter() {
  return interFont.className
}
