import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div>
        <Link href="/">
          <h1>XynBio Next</h1>
        </Link>
        <p>NextJS!</p>
        <br />
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div>
        <br />
        <h3>The open source repository is only for REFERENCE and STUDY, and the ownership belongs to XynBio. Please do not IMITATE or COPY without PERMISSION.</h3>
      </div>
    </footer>
  )

  return (
    <html>
      <head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
