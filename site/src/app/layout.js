import './globals.css'

export const metadata = {
  title: 'Sortify',
  description: 'Sortify is a web app that uses many sorting algorithms and visualizes them in a beautiful way. 🛸',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
