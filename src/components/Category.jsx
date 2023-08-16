import { NavLink } from "react-router-dom"
import { FaPizzaSlice, FaHamburger } from "react-icons/fa"
import { GiNoodles, GiChopsticks } from "react-icons/gi"



const Category = () => {
  return (
    <section className='py-3 mb-4 flex justify-center'>
        <ul className="w-full max-w-[300px] flex flex-wrap justify-between gap-3">
            <li className='text-black flex justify-center items-center'>
                <NavLink to={'/cuisine/Italian'} className='bg-white w-[60px] h-[60px] rounded-full transition-colors hover:bg-purple-600 hover:text-white flex justify-center items-center flex-col'>
                    <FaPizzaSlice />
                    <h4 className='text-xs'>Italian</h4>
                </NavLink>
            </li>
            <li className='text-black flex justify-center items-center'>
                <NavLink to={'/cuisine/American'} className='bg-white w-[60px] h-[60px] rounded-full transition-colors hover:bg-purple-600 hover:text-white flex justify-center items-center flex-col'>
                    <FaHamburger />
                    <h4 className='text-xs'>American</h4>
                </NavLink>
            </li>
            <li className='text-black flex justify-center items-center'>
                <NavLink to={'/cuisine/Thai'} className='bg-white w-[60px] h-[60px] rounded-full transition-colors hover:bg-purple-600 hover:text-white flex justify-center items-center flex-col'>
                    <GiNoodles />
                    <h4 className='text-xs'>Thai</h4>
                </NavLink>
            </li>
            <li className='text-black flex justify-center items-center'>
                <NavLink to={'/cuisine/Japanese'} className='bg-white w-[60px] h-[60px] rounded-full transition-colors hover:bg-purple-600 hover:text-white flex justify-center items-center flex-col'>
                    <GiChopsticks />
                    <h4 className='text-xs'>Japanese</h4>
                </NavLink>
            </li>
        </ul>
    </section>
  )
}

export default Category