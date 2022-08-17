import Image from 'next/image';

import Profile from '@/assets/images/profile.jpeg';


function Home() {
  return (
    <section className='home min-h-[80vh] w-7/12 text-sz-secondary font-bold'>
      <div className="basis-1/2 home__description">
        <h1 className='text-3xl home__description-title'>Hello 👋🏾 I'm Emilio González</h1>
        <h1 className='text-7xl home__description-subtitle'>I'm a Software Engineer</h1>
      </div>
      <div className="basis-1/2 text-center home__profile">
        <Image
          src={Profile}
          alt="Emilio Gonzalez"
          height={300}
          width={300}
          layout="fixed"
          className='rounded-full'
        />
      </div>
    </section>
  )
}

export default Home
