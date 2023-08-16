import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'



const Cuisine = () => {
    const [cuisine, setCuisine] = useState([])
    const params = useParams()


    const getCuisine = async (type) =>{
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a3a7ec65aaf6483aa99624870566a8cd&cuisine=${type}`)
        const data = await response.json()
        setCuisine(data.results)
    }

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])



    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className='flex flex-col w-full max-w-[1100px] mx-auto pb-12'>
            <h1 className="pb-5 mb-4 text-xl underline underline-offset-8">Cuisine: {params.type}</h1>
            <div className='grid grid-cols-fluid gap-5 w-full'>
                {
                    cuisine?.map(item => {
                        return (
                            <Link to={`/recipeDetails/${item.id}`} key={item.id} title={item.title}>
                                <img src={item.image} alt='img'/>
                                <h4 className='text-sm truncate'>{item.title}</h4>
                            </Link>
                        )
                    })
                }
            </div>
        </motion.section>
    )
}

export default Cuisine