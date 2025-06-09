const Button = ({ content, className, bgcolor, text, animation }) => {
  return (
    <div data-aos={animation} className={className ? className : ''}>
      <button
        className={`${bgcolor} ${text} flex h-[3vw] w-[10vw] cursor-pointer items-center justify-center rounded-full text-[1.1vw] font-bold max-xl:h-[3vw] max-xl:w-[12vw]`}
      >
        {content}
      </button>
    </div>
  )
}

export default Button
