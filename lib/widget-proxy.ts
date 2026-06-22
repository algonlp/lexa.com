const WIDGET_ORIGIN = 'https://3c0d-103-49-136-35.ngrok-free.app'

export async function proxyWidgetRequest(request: Request, path: string) {
  const requestUrl = new URL(request.url)
  const upstreamUrl = new URL(path, WIDGET_ORIGIN)
  upstreamUrl.search = requestUrl.search

  const headers = new Headers()
  headers.set('ngrok-skip-browser-warning', 'true')

  const contentType = request.headers.get('content-type')
  if (contentType) {
    headers.set('content-type', contentType)
  }

  const body =
    request.method === 'GET' || request.method === 'HEAD'
      ? undefined
      : await request.arrayBuffer()

  const response = await fetch(upstreamUrl, {
    method: request.method,
    headers,
    body,
    cache: 'no-store',
  })

  const responseHeaders = new Headers()
  const responseContentType = response.headers.get('content-type')
  if (responseContentType) {
    responseHeaders.set('content-type', responseContentType)
  }
  responseHeaders.set('cache-control', 'no-store')

  return new Response(response.body, {
    status: response.status,
    headers: responseHeaders,
  })
}
