import { ChevronUp } from 'lucide-react'

const ScrollTop = ({ className }) => {
  const handleScrollOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={handleScrollOnTop}
      className={`${className} flex h-[3vw] w-[3vw] cursor-pointer items-center justify-center rounded-full bg-[#911A35]`}
    >
      <ChevronUp className="h-[2vw] w-[2vw]" />
    </button>
  )
}

export default ScrollTop
