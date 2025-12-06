import { corsHeaders } from "@/lib/cors"
import { NextRequest, NextResponse } from "next/server"

export async function OPTIONS() {
  return corsHeaders(new NextResponse(null, { status: 200 }))
}

// GET: Return Outline dynamic access key
export async function GET(request: NextRequest) {
  const yamlConfig = `transport:
  $type: tcpudp

  tcp:
    $type: shadowsocks
    endpoint:
      $type: websocket
      url: wss://out.cheenama.com/a7d34f965f068ff594c5fdd2ed1cf707
    cipher: chacha20-ietf-poly1305
    secret: bwIkBMooHOa6fpwKHKmmXf/c62ghAg==

  udp:
    $type: shadowsocks
    endpoint:
      $type: websocket
      url: wss://out.cheenama.com/78e2e800eb67e7d847b47318231be825
    cipher: chacha20-ietf-poly1305
    secret: bwIkBMooHOa6fpwKHKmmXf/c62ghAg==`

  return corsHeaders(
    new NextResponse(yamlConfig, {
      status: 200,
      headers: {
        "Content-Type": "text/yaml",
      },
    })
  )
}
