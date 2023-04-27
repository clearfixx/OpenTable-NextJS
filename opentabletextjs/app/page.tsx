import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <section className='flex h-screen w-full items-center justify-center bg-gradient-to-b from-white via-slate-100 to-black'>
        <h1 className='text-3xl'>Hello from NextJS</h1>
      </section>
      </div>
    </main>
  )
}
