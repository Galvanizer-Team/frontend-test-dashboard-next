import { makeFetch, isValidUrl } from "@davidcrammer/shotgun"

export const config = {
  api: {
    externalResolver: true,
  },
}

const usesAuthProxy = (url) => {
  const routes = ["/users/auth"]
  return routes.some((route) => url.includes(route))
}

export default async function handler(req, res) {
  let { url: baseUrl } = req.query
  let url = baseUrl

  const method = req.method
  const data = req.body

  if (!url) return res.status(400).json({ error: "Invalid URL" })

  const headers = {
    "Content-Type": "application/json",
  }

  url = process.env.API_ROUTE + baseUrl
  if (usesAuthProxy(url)) {
    headers["x-api-token"] = process.env.API_KEY
    url = process.env.API_ROUTE_AUTH + baseUrl
  }

  // temporary. I don't feel like setting the headers lol
  if (baseUrl === "/purchase" || baseUrl === "/card") {
    headers["x-api-token"] = process.env.API_KEY
    url = process.env.API_ROUTE + baseUrl
  }

  if (!isValidUrl(url)) {
    return res.status(400).json({
      error: "Invalid URL",
    })
  }

  const request = await makeFetch(url, method, { data, headers, contentType: "application/json" })
  if (request.success === "success") {
    res.status(200).json(request)
  } else {
    res.status(400).json(request)
  }
}
