import './globals.css'
import Carousel from '@/components/carousel'

export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex h-auto w-auto'>
        <Carousel/>
      </div>
    </div>
  )
}
