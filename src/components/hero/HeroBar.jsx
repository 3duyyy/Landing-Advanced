import { ChevronDown, Search } from 'lucide-react'

const HeroBar = () => {
  return (
    <div className="container-custom relative mt-6 flex justify-between text-white">
      <div className="">
        <img src="/logo.png" alt="" className="h-[4vw] w-[7vw]" />
      </div>
      <div className="flex items-center gap-[4vw] max-xl:text-[1.4vw]">
        <a href="#!" className="font-semibold hover:text-white/80">
          TRANG CHỦ
        </a>
        <a href="#!" className="font-semibold hover:text-white/80">
          VỀ CHÚNG TÔI
        </a>
        <div className="flex items-center gap-1 font-semibold hover:text-white/80">
          <a href="#!">GIÁ TRỊ</a>
          <ChevronDown className="w-[1.5vw]" />
        </div>
        <a href="#!" className="font-semibold hover:text-white/80">
          TIN TỨC
        </a>
        <a href="#!" className="font-semibold hover:text-white/80">
          LIÊN HỆ
        </a>
        <a href="#!">
          <Search className="mb-[0.5vw] h-[1.5vw] w-[1.5vw] hover:text-white/80" />
        </a>
      </div>
    </div>
  )
}

export default HeroBar
