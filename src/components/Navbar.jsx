import { Link } from "react-router-dom"
import { SiIfood } from "react-icons/si"



const Navbar = () => {
  return (
    <nav className="flex justify-between px-16 py-6">
      <Link to='/' className="text-xl text-purple-400 flex items-center gap-2"><SiIfood />TastyEats</Link>
      <p></p>
    </nav>
  )
}

export default Navbar