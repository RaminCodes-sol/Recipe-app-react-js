import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'




const Popular = () => {
  const [popular, setPopular] = useState([])


  const getPopular = async () => {
    const popularRecipes = localStorage.getItem('popularRecipes')

    if (popularRecipes) {
      setPopular(JSON.parse(popularRecipes))
    } else {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=a3a7ec65aaf6483aa99624870566a8cd&number=9`)
      const data = await response.json()
      localStorage.setItem('popularRecipes', JSON.stringify(data.recipes))
      setPopular(data.recipes)
    }
  }


  useEffect(() => {
    getPopular()
  }, [])




  return (
    <section id="recipes" className='w-full'>

      <h1 className="font-bold p-3 text-xl">popular dishes</h1>

      <div className="w-full">
        <Splide options={{
          perPage:4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '1rem'
        }}>
          {
            popular?.map(recipe =>  {
              return(
              <SplideSlide key={recipe.id}>
                <Link to={`/recipeDetails/${recipe.id}`} title={recipe.title} className="inline-block h-full min-h-[15rem] overflow-hidden">
                  <h4 className="w-full text-center text-sm absolute z-10 top-[80%] left-[50%] -translate-x-[50%] -translate-y-[50%]">{recipe.title}</h4>
                  <img src={recipe.image} alt="img" className="w-full h-full absolute object-cover rounded-lg"/>
                </Link>
              </SplideSlide>
              ) 
            })
          }
        </Splide>
      </div>

    </section>
  )
}

export default Popular