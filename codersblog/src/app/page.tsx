'use client'
import { Navbar } from '@/components/navbar'
import Head from 'next/head'
export default function Home() {
  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
    {/* Navbar Section */}
    <Navbar/>
    {/* Navbar Section Ends */}
    </>
  )
}
