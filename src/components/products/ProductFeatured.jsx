import { Dot } from 'lucide-react'
import Button from '../Button'
import { useEffect } from 'react'
import Aos from 'aos'

const ProductFeatured = () => {
  useEffect(() => {
    Aos.init({
      duration: 800
    })
  })

  return (
    <section className="relative overflow-hidden pb-[12vw] pl-[8vw] max-xl:pb-[15vw]">
      <div className="absolute right-0 bottom-[-2vw] w-[100vw]">
        <img src="/featured/featured-bottom.png" alt="" className="w-full object-cover" />
      </div>
      <div className="absolute bottom-[7.5vw] left-[8vw]">
        <img data-aos="fade-right" src="/featured/people.png" alt="" className="h-[6.7vw] w-[5vw]" />
      </div>

      <div className="container-custom relative">
        <div className="flex gap-[6vw]">
          <div className="mt-[1vw]">
            <img data-aos="zoom-out-right" src="/featured/featured-product.png" alt="" className="h-[37vw] w-[30vw]" />
          </div>
          <section className="w-[30vw] text-[1.1vw] text-white">
            <div>
              <img data-aos="fade-left" src="/featured/featured-title.png" alt="" className="h-[5.2vw] w-[28vw]" />
            </div>
            <h3 data-aos="fade-left" className="mt-[1.2vw] ml-[0.2vw] text-[2vw] font-semibold text-[#F0EBE1]">
              Set quà trà Giangshan
            </h3>
            <div data-aos="fade-left" className="mt-[0.5vw] ml-[0.2vw] flex items-center gap-[1.5vw]">
              <p data-aos="fade-left" className="text-[1.5vw] font-semibold text-[#F0EBE1]">
                278.000<span className="font-light text-[#9AA5B1]">đ</span>
              </p>
              <p data-aos="fade-left" className="text-[#9AA5B1]/80 line-through">
                296.000đ
              </p>
            </div>
            <p data-aos="fade-left" className="py-[1vw] font-light text-white/80">
              Nhờ lợi thế về điều kiện tự nhiên, các sản phẩm nông nghiệp khô ở miền Bắc Việt Nam có hương vị rất đặc trưng và chất
              lượng tuyệt vời. Vì vậy, chúng đang ngày càng được ưa chuộng hơn tại các thị trường trong nước và toàn cầu. Vì vậy, chúng
              đang ngày càng được ưa chuộng hơn tại các thị trường trong nước và toàn cầu.
            </p>
            <div className="flex flex-col gap-2 font-light text-white/80">
              <p className="flex items-center gap-[0.5vw]">
                <Dot className="h-[2vw] w-[2vw]" /> <span data-aos="fade-left">Lục trà</span>
              </p>
              <p className="flex items-center gap-[0.5vw]">
                <Dot className="h-[2vw] w-[2vw]" /> <span data-aos="fade-left">Bạch trà</span>
              </p>
              <p className="flex items-center gap-[0.5vw]">
                <Dot className="h-[2vw] w-[2vw]" /> <span data-aos="fade-left">Hồng trà</span>
              </p>
            </div>
            <div className="relative z-10 mt-[2vw] flex gap-[2vw]">
              <Button
                animation={'zoom-out-up'}
                content={'Thêm vào giỏ'}
                bgcolor={'bg-[#b71540] hover:bg-[#b71540]/90'}
                text={'text-white'}
              />
              <Button
                animation={'zoom-out-up'}
                content={'Mua ngay'}
                bgcolor={'bg-[#F0EBE1] hover:bg-[#F0EBE1]/90'}
                text={'text-[#A11938]'}
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default ProductFeatured
