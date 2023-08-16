import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { motion } from 'framer-motion'




const Searched = () => {
  const [searchedRecipes, setSearchRecipes] = useState([])
  const params = useParams()


  const getSearchedData = async (name) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a3a7ec65aaf6483aa99624870566a8cd&query=${name}`)
    const data = await response.json()
    setSearchRecipes(data.results)
  }


  useEffect(() => {
    getSearchedData(params.search)
  }, [params.search])


  if (searchedRecipes.length === 0) return <h1 className="text-center font-bold text-red-500 py-6">Not Found "{params.search}"</h1>


  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className='flex flex-col w-full max-w-[1100px] mx-auto pb-12'>
      <h1 className="pb-5 mb-4 text-xl underline underline-offset-8">searched for: {params.search}</h1>
      <div className="grid grid-cols-fluid gap-5">
        {
          searchedRecipes?.map(item => {
            return (
              <Link to={`/recipeDetails/${item.id}`} key={item.id}>
                <img src={item.image} alt='img' />
                <h4>{item.title}</h4>
              </Link>
            )
          })
        }
      </div>
    </motion.section>
  )
}

export default Searched