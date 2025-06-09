import React from 'react'
import Button from '../Button'

const ProductItem = ({ path, animationCard, animationButton }) => {
  return (
    <div>
      <article data-aos={animationCard} className="relative">
        <img src="/product/sale.png" alt="" className="absolute top-0 right-[1vw] w-[2.5vw] object-cover" />
        <div className="flex h-[20vw] w-[18vw] items-center justify-center rounded-t-[1vw] bg-[#075241]">
          <img src={path} alt="" className="h-[10vw] w-[12vw]" />
        </div>
        <div className="rounded-b-[1vw] bg-[#F0EBE1] py-[1vw] text-center">
          <h3 className="text-lg text-[1.2vw] font-bold">Set quà trà Giangshan</h3>
          <div className="flex justify-center gap-[1.5vw]">
            <p className="text-[1.1vw] font-bold text-[#105A4A]">
              278.000<span className="font-light text-[#9AA5B1]">đ</span>
            </p>
            <p className="text-[1.1vw] text-[#9AA5B1]/80 line-through">296.000đ</p>
          </div>
        </div>
      </article>

      <Button
        animation={animationButton}
        content={'Mua ngay'}
        className="mt-[2vw] flex items-center justify-center"
        bgcolor={'bg-[#b71540] hover:bg-[#b71540]/90'}
        text={'text-white'}
      />
    </div>
  )
}

export default ProductItem
