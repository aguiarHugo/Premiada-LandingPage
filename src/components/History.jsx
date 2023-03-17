import { motion } from "framer-motion"

import { styles } from "../styles/styles"
import { textVariant } from '../utils/motion'

const History = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText}`}>A história da</p>
        <h2 className={`${styles.sectionHeadText}`}>Cachaça</h2>
      </motion.div>
    </>
  )
}

export default History