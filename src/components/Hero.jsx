import { motion } from "framer-motion"
import { styles } from "../styles/styles"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[300px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-golden" />
          <div className="w-1 h-40 sm:h-80 bg-golden"/>
        </div>
        <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Cachaça <span className="text-golden">Premiada</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>Bi Destilada, explosão de sabor!</p>
          </div>
      </div>
    </section>
  )
}

export default Hero