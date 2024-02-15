'use client'
// import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import './globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { PaymentProvider } from '@/components/contexts/checkContext'
import { Toaster } from 'sonner';
import { NextUIProvider } from "@nextui-org/react";
import LogoutModal from '@/components/LogoutModal'
import { getCookie } from '@/components/utils/Cookie'
import { useTokenStore } from '@/stores/TokenStore'


const inter = Inter({ subsets: ['latin'] })


// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const tokenString = useTokenStore((state)=>state.tokenString)
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

  return (
    <html lang="en">
      <body className={inter.className}>
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
