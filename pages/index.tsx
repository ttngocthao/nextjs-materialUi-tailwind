import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Heading from '../src/components/Heading'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-paper">
      <Head>
        <title>Nextjs-MaterialUI-Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <p>This is header</p>
      </header>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Heading />
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <p className='text-darkteal'>Body content her</p>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p>This is footer</p>
      </footer>
    </div>
  )
}

export default Home
