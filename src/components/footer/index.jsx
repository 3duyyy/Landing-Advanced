import { ChevronUp, MoveRight } from 'lucide-react'
import FooterContent from './FooterContent'
import FooterBottom from './FooterBottom'
import ScrollTop from '../ScrollTop'
import { useEffect } from 'react'
import Aos from 'aos'

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 800
    })
  })

  return (
    <footer className="relative text-white max-md:pb-14">
      <img src="/footer/bg-footer.png" alt="" className="absolute top-0 left-0 z-0 h-full w-full" />

      <div className="relative flex flex-col items-center justify-center pt-[8vw]">
        <img src="/logo.png" alt="" className="h-[4vw] w-[7vw]" />
        <div className="flex items-center gap-[0.8vw] pt-[2vw] pb-[2.5vw]">
          <a href="#!">
            <img src="/icon/FB.png" alt="" className="h-[2.5vw] w-[2.5vw] object-cover" />
          </a>
          <a href="#!">
            <img src="/icon/ZL.png" alt="" className="h-[2.5vw] w-[2.5vw] object-cover" />
          </a>
          <a href="#!">
            <img src="/icon/YTB.png" alt="" className="h-[2.5vw] w-[2.5vw] object-cover" />
          </a>
          <a href="#!">
            <img src="/icon/GOOGLE.png" alt="" className="h-[2.5vw] w-[2.5vw] object-cover" />
          </a>
        </div>

        <FooterContent />

        <FooterBottom />

        <div
          data-aos="fade-right"
          className="absolute top-[-5vw] left-[10vw] flex h-[10vw] w-[80vw] items-center justify-between rounded-xl bg-[#075241] px-[5vw] text-[1.1vw] text-white"
        >
          <div>
            <p data-aos="fade-right" data-aos-delay="200" className="text-[1.5vw] font-bold">
              ĐĂNG KÝ NHẬN THÔNG TIN TỪ CHÚNG TÔI
            </p>
            <p data-aos="fade-right" data-aos-delay="100" className="mt-[0.5vw] font-light">
              Vui lòng nhập email để nhận các thông tin mới nhất từ chúng tôi
            </p>
          </div>
          <div className="relative h-[3vw] w-[25vw]">
            <input
              type="email"
              placeholder="Email của bạn"
              className="h-full w-full border-b-2 border-b-white/60 placeholder:text-white/80 focus:outline-none"
            />
            <button className="cursor-pointer">
              <MoveRight className="absolute right-0 bottom-[0.5vw] h-[1.5vw] w-[1.5vw]" />
            </button>
          </div>
        </div>
        <ScrollTop className={'absolute right-[2vw] bottom-[5vw]'} />
      </div>
    </footer>
  )
}

export default Footer
