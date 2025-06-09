import { useEffect } from 'react'
import ProductFeatured from './ProductFeatured'
import ProductList from './ProductList'
import Aos from 'aos'

const Product = () => {
  useEffect(() => {
    Aos.init({
      duration: 800
    })
  })

  return (
    <section className="relative bg-[#105A4A]">
      <div className="absolute top-[48vw] left-[5vw]">
        <img data-aos="fade-right" src="/featured/bird.png" alt="" className="w-[15vw]" />
      </div>

      <div className="relative top-[-5vw] pr-[-10vw]">
        <img src="/product/top-product.png" alt="" className="w-full" />
        <img data-aos="fade-left" src="/icon/horse-icon.png" alt="" className="absolute right-[8vw] bottom-[2.6vw] w-[5vw]" />
        <img
          data-aos="fade-down"
          src="/icon/leaf-icon.png"
          alt=""
          className="absolute top-[-0.5vw] left-[13vw] w-[2.2vw] max-xl:top-[-0.6vw] max-xl:left-[15vw]"
        />
        <img
          data-aos="fade-right"
          src="/icon/bot-skele-icon.png"
          alt=""
          className="absolute top-[1.6vw] left-[8vw] w-[3vw] max-xl:top-[1.6vw]"
        />
        <img
          data-aos="fade-right"
          src="/icon/skele-icon.png"
          alt=""
          className="absolute top-[-1.3vw] left-[8.5vw] w-[2vw] max-xl:top-[-1.2vw] max-xl:left-[8.5vw]"
        />
      </div>

      <div>
        <ProductList />
        <ProductFeatured />
      </div>
    </section>
  )
}

export default Product
