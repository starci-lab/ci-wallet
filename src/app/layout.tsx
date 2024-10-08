import React, { PropsWithChildren } from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import { WrappedLayout } from "./_layout"

const font = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Ci Wallet",
    description: "Generated by create next app",
}

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <html lang="en">
            <body className={`${font.className} min-h-screen`}>
                <WrappedLayout>{children}</WrappedLayout>
            </body>
        </html>
    )
}

export default Layout
