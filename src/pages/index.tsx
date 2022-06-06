import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


function Home() {
  return (
    <section className='flex flex-col items-center justify-center min-h-[80vh] text-sz-secondary font-bold text-6xl'>
      <h1 className='gradient'>I'm Emilio González</h1>
      <h1 className='gradient'>Frontend Developer</h1>
    </section>
  )
}

export default Home
