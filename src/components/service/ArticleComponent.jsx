const ArticleComponent = ({ path, title, desc, animation }) => {
  return (
    <article data-aos={animation} className="flex flex-col items-center justify-center">
      <img src={path} alt="" className="h-[8vw] w-[8vw]" />
      <h3 className="text-[1.2vw] font-bold text-[#400404]">{title}</h3>
      <p className="mt-[1vw] text-center text-[1vw]">{desc}</p>
    </article>
  )
}

export default ArticleComponent
