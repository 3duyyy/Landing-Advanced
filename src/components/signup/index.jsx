import { useAnimate, useInView } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

const Signup = () => {
  const [scope, animate] = useAnimate()
  const isRef = useInView(scope, { threshold: 0.8 })

  useEffect(() => {
    if (isRef) {
      const runAnimation = async () => {
        await animate(scope.current, { scaleX: [1, 1.2, 1] }, { duration: 0.9 })
      }
      runAnimation()
    }
  }, [animate, isRef, scope])

  return (
    <section className="relative">
      <div>
        <img ref={scope} src="/signup/branch-tree.png" alt="" className="absolute top-[-10vw] h-[25vw] w-[41vw] origin-left" />
      </div>
      <div>
        <img src="/signup/bg-signup.png" alt="" className="w-full object-cover" />
      </div>
    </section>
  )
}

export default Signup
