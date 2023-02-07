import HeaderLay from "@/module/layouts/Header"
import FooterLay from "@/module/layouts/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <HeaderLay />
        {children}
        <FooterLay />
      </body>
    </html>
  )
}
