import { Mail, MapPin, Phone } from 'lucide-react'

const FooterContent = () => {
  const CATALOG_TITLE = 'pb-[1.5vw] text-[1.2vw] font-semibold'
  const CATALOG_CONTENT = 'text-[1vw] text-white/80'

  return (
    <section className="container-custom grid grid-cols-4 gap-[4vw]">
      <div>
        <h3 className={`${CATALOG_TITLE}`}>LIÊN HỆ</h3>
        <ul className="flex flex-col gap-[0.5vw]">
          <a href="#!" className="flex gap-[0.5vw]">
            <MapPin className="h-[2.5vw] w-[1.5vw] shrink-0 pb-[1vw]" />
            <li className={`${CATALOG_CONTENT}`}>A18*, Tầng 18, Tòa Nhà 96A, Số 96 Định Công, Thanh Xuân, Hà Nội</li>
          </a>
          <a href="#!" className="flex items-center gap-[0.5vw]">
            <Mail className="h-[2vw] w-[1.2vw]" />
            <li className={`${CATALOG_CONTENT}`}>duyss1902@gmail.com</li>
          </a>
          <a href="#!" className="flex items-center gap-[0.5vw]">
            <Phone className="h-[2vw] w-[1.2vw]" />
            <li className={`${CATALOG_CONTENT}`}>0974925573</li>
          </a>
        </ul>
      </div>
      <div>
        <h3 className={`${CATALOG_TITLE}`}>THÔNG TIN LIÊN HỆ</h3>
        <ul className="flex flex-col gap-[0.5vw]">
          <li className={`${CATALOG_CONTENT}`}>
            <a href="#!">Hướng dẫn mua hàng</a>
          </li>
          <li className={`${CATALOG_CONTENT}`}>
            <a href="#!">Kinh nghiệm mua hàng</a>
          </li>
          <li className={`${CATALOG_CONTENT}`}>
            <a href="#!">Hình thức thanh toán</a>
          </li>
          <li className={`${CATALOG_CONTENT}`}>
            <a href="#!">Chính sách đổi trả</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={`${CATALOG_TITLE}`}>TRANG CHỦ</h3>
        <ul className="flex flex-col gap-[0.5vw]">
          <li className={`${CATALOG_CONTENT}`}>
            <a href="#!">Về chúng tôi</a>
          </li>
          <li className={`${CATALOG_CONTENT}`}>
            <a href="#!">Sản phẩm</a>
          </li>
          <li className={`${CATALOG_CONTENT}`}>
            <a href="#!">Tin tức</a>
          </li>
          <li className={`${CATALOG_CONTENT}`}>
            <a href="#!">Liên hệ</a>
          </li>
        </ul>
      </div>
      <section>
        <h3 className={`${CATALOG_TITLE}`}>THƯ VIỆN</h3>
        <div className="grid grid-cols-3 grid-rows-2 gap-[1vw]">
          <img src="/footer/footer-img.png" alt="" />
          <img src="/footer/footer-img.png" alt="" />
          <img src="/footer/footer-img.png" alt="" />
          <img src="/footer/footer-img.png" alt="" />
          <img src="/footer/footer-img.png" alt="" />
        </div>
      </section>
    </section>
  )
}

export default FooterContent
