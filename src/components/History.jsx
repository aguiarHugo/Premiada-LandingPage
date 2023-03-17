import { motion } from "framer-motion"

import { SectionWrapper } from "../hoc"
import { styles } from "../styles/styles"
import { fadeIn, textVariant } from '../utils/motion'

const History = () => {
  return (
    <>
      <motion.div variants={(textVariant())}>
        <p className={`${styles.sectionSubText}`}>A história da</p>
        <h2 className={`${styles.sectionHeadText}`}>Cachaça</h2>
      </motion.div>

      <motion.p
        className="text-justify"
        variants={fadeIn('', '', 0.1, 1)}
      >
        <span className="text-2xl text-golden">"</span>Assim como muitas outras bebidas, a origem exata da cachaça é incerta, mas estima-se que ela tenha sido 
        inventada entre os anos de 1516 e 1532, sendo considerada a primeira bebida destilada da América Latina. 
        Reza a lenda que a cachaça teria surgido como uma variação com cana-de-açúcar na bagaceira, tradicional 
        bebida portuguesa feita a partir dos bagaços de uva destilados.
      </motion.p>
      <motion.p
        className="text-justify mt-4"
        variants={fadeIn('', '', 0.2, 1)}
      >
        Ainda segundo a história, o nome da bebida teria surgido do espanhol cachaza, usado para um tipo de vinho consumido 
        em regiões da Espanha e de Portugal. Outras fontes creditam o nome a uma versão feminina de “cachaço”, como os 
        porcos selvagens eram chamados na época. O motivo seria o fato de que o líquido era usado para amolecer a carne do 
        animal antes de seu cozimento e consumo. Devido ao seu antigo processo de destilação, onde pingava do alambique, a 
        cachaça também ganhou o apelido popular de "pinga".
      </motion.p>
      <motion.p
        className="text-justify mt-4"
        variants={fadeIn('', '', 0.3, 1)}
      >
        Ao longo dos anos, a cachaça passou por altos e baixos. Após a fracassada 
        tentativa de proibição pela corte portuguesa, a bebida ganhou espaço no país, 
        originando outras bebidas, como o quentão e a caipirinha, e se tornando um aspecto 
        essencial da formação cultural e social brasileira.<span className="text-2xl text-golden">"</span><span className="text-golden">(Bartender Store)</span>
      </motion.p>
    </>
  )
}

export default SectionWrapper (History, 'history')