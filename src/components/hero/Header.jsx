const Header = () => {
  return (
    <div className="container-custom relative flex h-[4vw] w-full justify-between max-xl:text-[1.5vw]">
      <div className="flex gap-[5vw]">
        <div className="flex items-center gap-2 text-white">
          <img src="/icon/call.png" alt="" className="h-[1vw] w-[1vw]" />
          <p className="text-[1vw]">(+84)974 925 573</p>
        </div>
        <div className="flex items-center gap-2 text-white">
          <img src="/icon/mail.png" alt="" className="h-[1vw] w-[1.2vw]" />
          <p className="text-[1vw]">duyss1902@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center text-white">
        <a href="#!" className="flex items-center gap-3 text-[1.1vw] hover:text-white/80">
          <span>Giỏ hàng</span> <img src="/icon/cart.png" alt="" className="mb-[1vw] inline-block w-[1.5vw]" />
        </a>
      </div>
    </div>
  )
}

export default Header
