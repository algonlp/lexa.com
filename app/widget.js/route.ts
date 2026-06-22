import { proxyWidgetRequest } from '@/lib/widget-proxy'

export async function GET(request: Request) {
  return proxyWidgetRequest(request, '/widget.js')
}
