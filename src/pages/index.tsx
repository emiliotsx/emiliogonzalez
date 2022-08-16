import Image from 'next/image';

import Profile from '@/assets/images/profile.jpeg';


function Home() {
  return (
    <section className='flex flex-row items-center min-h-[80vh] w-8/12 text-sz-secondary font-bold text-6xl' style={{ margin: '0 auto' }}>
      <div className="basis-1/2">
        <h1 className='text-2xl'>Hello I'm Emilio González</h1>
        <h1 className=''>I'm a Software Engineer</h1>
      </div>
      <div className="basis-1/2 text-center">
        <Image
          src={Profile}
          alt="Emilio Gonzalez"
          height={350}
          width={350}
          layout="fixed"
          className='rounded-full'
        />
      </div>
    </section>
  )
}

export default Home
