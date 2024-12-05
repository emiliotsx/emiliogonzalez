import { NextResponse, NextRequest } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"


const DEFAULT_LANGUAGE_HEADER = { "accept-language": "es-ES,es;q=0.5" }
const DEFAULT_LOCALE = "es"
const LOCALES: Locales[] = ["en-US", "es-ES", "es", "en"]
const SELECT_LOCALE = {
  "en-US": "en",
  "es-ES": "es",
  "en": "en",
  "es": "es",
}

function getLocale(request: NextRequest) {
  const headers = (request.headers.get("accept-language") ?? DEFAULT_LANGUAGE_HEADER) as any
  const negotiator = new Negotiator({ headers })
  const languages = negotiator.languages()

  if (languages.includes("*")) {
    if (!headers.includes(LOCALES[0])) return DEFAULT_LOCALE
    return SELECT_LOCALE[LOCALES[0] as Locales]
  }

  const selectedLocale = match(languages, LOCALES, DEFAULT_LOCALE)
  return SELECT_LOCALE[selectedLocale as Locales] || DEFAULT_LOCALE
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    "/((?!_next).*)"
  ]
}