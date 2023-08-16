import Popular from "../components/Popular"
import Veggies from "../components/Veggies"
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-[1100px] mx-auto py-10">
      <Veggies />
      <Popular />
    </motion.div>
  )
}

export default Home