import { motion } from "framer-motion"

import { SectionWrapper } from "../hoc"
import { styles } from "../styles/styles"
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={(textVariant())}>
        <h2 className={`${styles.sectionHeadText}`}>Quem Somos</h2>
      </motion.div>

      <motion.p
        className="text-justify"
        variants={fadeIn('', '', 0.1, 1)}
      >
        Cachaceiros do Sítio Antônio & Anna, localizado em Nova Friburgo, RJ,
      </motion.p>
      <motion.p
        className="text-justify mt-4"
        variants={fadeIn('', '', 0.2, 1)}
      >
        Apaixonados pelo o que fazemos, há mais de 14 anos produzindo a melhor cachaça de região.
      </motion.p>
      <motion.p
        className="text-justify mt-4"
        variants={fadeIn('', '', 0.3, 1)}
      >
        A origem do nosso nome <span className="text-golden font-bold">Premiada</span> vem de uma brincadeira entre amigos, logo no começo produzíamos apenas para consumo próprio,
        devido a qualidade da nossa cachaça, ela foi apelidada de <span className="text-golden font-bold">Premiada</span>.  Logo fomos ganhando fama entre os amigos e conhecidos, a propaganda boca a boca foi tanta que tivemos que expandir nossa produção para poder atender nossos amigos,
        que logo se tornaram nossos clientes.
      </motion.p>
    </>
  )
}

export default SectionWrapper (About, 'about')