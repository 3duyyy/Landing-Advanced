import { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import Aos from 'aos'

const ProductList = () => {
  const [active, setActive] = useState('A')
  const buttonCSS =
    'h-[3vw] w-[10vw] max-xl:w-[12vw] max-xl:h-[4vw] max-lg:w-[10vw] max-lg:h-[3vw] rounded-3xl bg-white font-bold text-[#105A4A] text-[1.2vw]'

  useEffect(() => {
    Aos.init({
      duration: 800
    })
  })

  return (
    <div className="px-[4vw] pb-[10vw]">
      <div className="relative">
        <img src="/product/mountain.png" alt="" className="absolute top-[-3vw] left-[-4vw] z-0 h-[22vw] w-[31vw]" />
        <img src="/product/bg-tree.png" alt="" className="absolute right-[-4vw] bottom-[-10vw] z-0 h-[35vw] w-[33vw]" />

        <section className="container-custom relative">
          <div className="flex justify-between px-[5vw]">
            <div>
              <img data-aos="fade-right" src="/product/product-title.png" alt="" className="h-[4.5vw] w-[16vw]" />
              <img
                data-aos="fade-left"
                src="/product/product-title2.png"
                alt=""
                className="relative bottom-[1.5vw] left-[4.5vw] h-[3.5vw] w-[15vw]"
              />
            </div>

            <div className="flex items-center gap-[5vw] text-white">
              <button onClick={() => setActive('A')} className={active === 'A' ? `${buttonCSS}` : 'cursor-pointer text-[1.2vw]'}>
                Set quà
              </button>
              <button onClick={() => setActive('B')} className={active === 'B' ? `${buttonCSS}` : 'cursor-pointer text-[1.2vw]'}>
                Lá chè khô
              </button>
              <button onClick={() => setActive('C')} className={active === 'C' ? `${buttonCSS}` : 'cursor-pointer text-[1.2vw]'}>
                Lá chè tươi
              </button>
            </div>
          </div>

          <section className="flex items-center justify-center gap-[4vw]">
            <ProductItem animationButton={'zoom-out-up'} animationCard={'zoom-in-right'} path={'/product/gift-1.png'} />
            <ProductItem animationButton={'zoom-out-up'} animationCard={'zoom-out-up'} path={'/product/gift-2.png'} />
            <ProductItem animationButton={'zoom-out-up'} animationCard={'zoom-in-left'} path={'/product/gift-1.png'} />
          </section>
        </section>
      </div>
    </div>
  )
}

export default ProductList
