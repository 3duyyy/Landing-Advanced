import Aos from 'aos'
import { useEffect } from 'react'

const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 800 })
  })

  return (
    <section className="relative overflow-hidden py-[12vw]">
      <div className="absolute top-[7vw] right-[-3vw] z-0">
        <img data-aos="fade-left" src="/intro/mountain.png" alt="" className="max-xl:h-[25vw] max-xl:w-[40vw]" />
      </div>

      <div className="container-custom relative">
        <div className="flex items-center gap-[6vw]">
          <img data-aos="zoom-in-right" src="/intro/intro-tree.png" alt="" className="max-xl:h-[35vw] max-xl:w-[26vw]" />
          <div>
            <div>
              <img data-aos="fade-right" src="/intro/text-above.png" alt="" className="max-xl:w-[18vw]" />
              <img
                data-aos="fade-left"
                src="/intro/text-below.png"
                alt=""
                className="relative top-[-1vw] left-[4.6vw] max-xl:w-[18vw]"
              />
            </div>
            <p data-aos="flip-down" className="w-[26vw] text-[1.1vw] max-xl:text-[1.3vw]">
              Nhờ lợi thế về điều kiện tự nhiên, các sản phẩm nông nghiệp khô ở miền Bắc Việt Nam có hương vị rất đặc trưng và chất
              lượng tuyệt vời. Vì vậy, chúng đang ngày càng được ưa chuộng hơn tại các thị trường trong nước và toàn cầu. Vì vậy, chúng
              đang ngày càng được ưa chuộng hơn tại các thị trường trong nước và toàn cầu.
            </p>
          </div>
          <img
            data-aos="fade-left"
            src="/intro/intro-horse.png"
            alt=""
            className="relative top-[6vw] max-xl:h-[16vw] max-xl:w-[18vw]"
          />
        </div>
      </div>
    </section>
  )
}

export default Intro
