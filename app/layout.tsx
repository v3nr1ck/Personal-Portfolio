import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'James Venrick | VNRK',
  description:
    'Principal Product Manager — Physical AI, Digital Twin, IoT, and enterprise platforms at Walmart. 18+ years building products at Fortune 5 companies.',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
