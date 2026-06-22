import { proxyWidgetRequest } from '@/lib/widget-proxy'

type RouteContext = {
  params: Promise<{ endpoint: string }>
}

async function proxyRequest(request: Request, context: RouteContext) {
  const { endpoint } = await context.params
  return proxyWidgetRequest(request, `/api/widget/${endpoint}`)
}

export const GET = proxyRequest
export const POST = proxyRequest
