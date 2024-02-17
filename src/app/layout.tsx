'use client'
// import type { Metadata } from 'next'

import { Inter, Architects_Daughter } from 'next/font/google'
import './globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { PaymentProvider } from '@/components/contexts/checkContext'
import { Toaster } from 'sonner';
import { NextUIProvider } from "@nextui-org/react";
import LogoutModal from '@/components/LogoutModal'
import { getCookie } from '@/components/utils/Cookie'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})


const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = getCookie("token");
  const tokenParts = token.split(" ");

  const headers = {
    authorization: tokenParts ? tokenParts[1] : "",
    'client-name': 'WidgetX Ecom [web]',
    'client-version': '1.0.0'
  };

  console.log("headers from layout", headers)


  const graphqlClient = new ApolloClient({
    uri: "http://localhost:8000/graphql",
    cache: new InMemoryCache(),
    headers: headers
  });

  useEffect(() => {
    AOS.init({
      once: false,
      // disable:'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  }, [])

  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <head>
        <title>Nephara</title>
      </head>
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 tracking-tight`}>
        <ApolloProvider client={graphqlClient}>
          <NextUIProvider>
            <PaymentProvider>
              <LogoutModal />
              {children}
            </PaymentProvider>
          </NextUIProvider>
          <Toaster richColors position="top-right" />
        </ApolloProvider>
      </body>
    </html>
  )
}
