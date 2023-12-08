'use client'
import { Navbar } from '@/components/navbar'
import Head from 'next/head'
export default function About() {
  return (
    <>
    <style jsx>
      {`
      .myspan{
        color:red;
      }
      `}
    </style>
    <Head>
      <title>About Page</title>
    </Head>
    <Navbar/>
    </>
    
  )
}

