import { useEffect } from 'react'
import ArticleComponent from './ArticleComponent'
import Aos from 'aos'

const ServiceContent = () => {
  useEffect(() => {
    Aos.init({
      duration: 800
    })
  })

  return (
    <section className="container-custom flex flex-col items-center justify-center pb-[12vw]">
      <div>
        <img data-aos="fade-right" src="/service-content/service-heading.png" alt="" className="h-[3vw] w-[31vw]" />
        <img data-aos="fade-left" src="/service-content/service-desc.png" alt="" className="ml-[3.5vw] h-[4vw] w-[25vw]" />
      </div>

      <section className="flex items-center gap-[5vw]">
        <div className="flex w-[22vw] flex-col items-center justify-center gap-[3vw]">
          <ArticleComponent
            animation={'fade-right'}
            path={'/service-content/icon/bag.png'}
            title={'CAM KẾT'}
            desc={'Tuân thủ luật pháp, Bộ Quy Tắc Ứng Xử và các quy chế, chính sách quy định của Công ty.'}
          />
          <ArticleComponent
            animation={'fade-right'}
            path={'/service-content/icon/earth.png'}
            title={'CHÍNH TRỰC'}
            desc={'Thảo luận chân thật và phản hồi trực tiếp là cần thiết để ra quyết định đúng và nhanh chóng.'}
          />
        </div>

        <div data-aos="zoom-out" className="relative">
          <img src="/service-content/main-img.png" alt="" className="h-[21vw] w-[40vw] max-xl:w-[33vw]" />
          <img
            data-aos-easing="linear"
            src="/service-content/leaf1.png"
            alt=""
            className="absolute top-[-3vw] right-[12vw] h-[5vw] w-[7vw]"
          />
          <img
            data-aos-easing="linear"
            src="/service-content/leaf2.png"
            alt=""
            className="absolute top-[-2vw] right-[8vw] h-[6vw] w-[7vw]"
          />
          <img
            data-aos-easing="linear"
            src="/service-content/leaf3.png"
            alt=""
            className="absolute right-[8vw] bottom-[-2vw] h-[6vw] w-[7vw]"
          />
        </div>

        <div className="flex w-[22vw] flex-col items-center justify-center gap-[3vw]">
          <ArticleComponent
            animation={'fade-left'}
            path={'/service-content/icon/shaking-hands.png'}
            title={'TIN TƯỞNG'}
            desc={'Chủ động làm những việc cần làm để đạt được kết quả, hành xử như người làm chủ Công ty.'}
          />
          <ArticleComponent
            animation={'fade-left'}
            path={'/service-content/icon/personal.png'}
            title={'LÀM CHỦ'}
            desc={'Chủ động làm những việc cần làm để đạt được kết quả, hành xử như người làm chủ Công ty.'}
          />
        </div>
      </section>
    </section>
  )
}

export default ServiceContent
