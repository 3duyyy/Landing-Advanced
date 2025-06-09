import { ChevronDown, Home, Info, Newspaper, Phone, Search } from 'lucide-react'

const HeroBar = () => {
  return (
    <>
      <div className="container-custom relative mt-6 hidden justify-between text-white md:flex">
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

      <nav className="fixed right-0 bottom-[-1px] left-0 z-50 border-t bg-white shadow md:hidden">
        <div className="grid h-14 grid-cols-5 items-center text-xs text-gray-600">
          <button className="flex flex-col items-center gap-0.5">
            <Home className="h-5 w-5" />
            <span>Trang Chủ</span>
          </button>

          <button className="flex flex-col items-center gap-0.5">
            <Info className="h-5 w-5" />
            <span>Chúng tôi</span>
          </button>

          <div className="relative top-[-8px] left-[10px] flex h-18 w-18 items-center justify-center rounded-full border-4 border-white bg-slate-700">
            <img src="/logo.png" alt="" className="h-7 w-11" />
          </div>

          <button className="flex flex-col items-center gap-0.5">
            <Newspaper className="h-5 w-5" />
            <span>Tin tức</span>
          </button>

          <button className="flex flex-col items-center gap-0.5">
            <Phone className="h-5 w-5" />
            <span>Liên hệ</span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default HeroBar
