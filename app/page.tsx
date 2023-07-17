import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <h1 className='text-red-500 text-4xl'>Hello</h1>
    </div>
  )
}
