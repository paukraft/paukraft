import { geolocation } from '@vercel/functions'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  // Get geolocation data from Vercel
  const { country } = geolocation(request)

  // Redirect to German resume if user is from Germany, otherwise use English
  const redirectUrl = country === 'DE' ? '/lebenslauf.pdf' : '/resume.pdf'

  // Perform redirect
  return NextResponse.redirect(new URL(redirectUrl, request.url))
}
