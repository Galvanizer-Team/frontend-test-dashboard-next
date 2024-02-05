import "@/styles/globals.css"
import { NextUIProvider } from "@nextui-org/react"
import { PaymentForm } from "react-square-web-payments-sdk"

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
