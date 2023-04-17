import './globals.css'
import Carousel from '@/components/carousel'

export default function Home() {
  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <div className='bg-green-500'>
        <Carousel/>
      </div>
    </div>
  )
}
