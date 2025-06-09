import { useEffect, useRef } from 'react'
import Button from '../Button'
import Header from './Header'
import HeroBar from './HeroBar'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { motion, useAnimation, useInView } from 'framer-motion'

const Hero = () => {
  const controls = useAnimation()
  const treeRef = useRef(null)
  const isTreeView = useInView(treeRef, { threshold: 0.5 })

  useEffect(() => {
    Aos.init({ duration: 800, easing: 'ease-in-out' })

    if (isTreeView) {
      controls.start({
        scaleX: [1, 1.2, 1],
        transition: {
          duration: 0.8,
          ease: 'easeInOut'
        }
      })
    }
  }, [controls, isTreeView])

  return (
    <section className="relative h-screen max-xl:h-[80vw] max-md:h-[60vw]">
      <div className="relative z-10 h-full">
        <img src="/hero/hero-bg.png" alt="" className="absolute top-0 left-0 z-0 h-full w-full object-cover" />

        <Header />
        <div className="relative h-[0.1vw] w-full bg-white/30"></div>
        <HeroBar />

        <section className="h-auto">
          <section>
            <div className="absolute bottom-0 left-0">
              <img src="/hero/additional-bg.png" alt="" className="w-[70vw]" />
            </div>
            <div className="absolute bottom-[16vw] left-[10vw]">
              <img data-aos="fade-right" src="/hero/main-content.png" alt="" className="h-[8vw] w-[20vw]" />
            </div>
            <div className="absolute bottom-[13vw] left-[11vw]">
              <img data-aos="fade-left" src="/hero/main-content2.png" alt="" className="h-[4vw] w-[19vw]" />
            </div>
            <Button
              animation={'zoom-out-up'}
              className={'absolute bottom-[6vw] left-[11vw]'}
              bgcolor={'bg-[#b71540] hover:bg-[#b71540]/90'}
              content={'Xem ngay'}
              text={'text-white'}
            />
          </section>

          <div className="absolute top-[15vw] left-[4vw] max-2xl:top-[45vw]">
            <img src="/hero/leaf-left.png" alt="" className="h-[6vw] w-[6vw]" />
          </div>

          <div className="absolute top-[20vw] right-[8vw] max-2xl:top-[50vw]">
            <img src="/hero/leaf-right.png" alt="" className="h-[6vw] w-[8vw]" />
          </div>
        </section>
      </div>

      <div ref={treeRef} className="absolute right-0 bottom-[-10vw] z-10">
        <motion.img animate={controls} src="/hero/tree.png" alt="" className="h-auto w-[60vw] origin-right object-cover" />
      </div>
    </section>
  )
}

export default Hero
