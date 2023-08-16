import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'




const Veggies = () => {
  const [veggies, setVeggies] = useState([])


  const getVeggies = async () => {
    const veggiesRecipes = localStorage.getItem('veggiesRecipes')

    if (veggiesRecipes) {
      setVeggies(JSON.parse(veggiesRecipes))
    } else {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=a3a7ec65aaf6483aa99624870566a8cd&number=9&tags=vegetarian`)
      const data = await response.json()
      localStorage.setItem('veggiesRecipes', JSON.stringify(data.recipes))
      setVeggies(data.recipes)
    }
  }


  useEffect(() => {
    getVeggies()
  }, [])




  return (
    <section id="recipes" className='w-full mb-8'>

      <h1 className="font-bold p-3 text-xl">popular Veggies</h1>

      <div className="w-full">
        <Splide options={{
          perPage:4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '1rem'
        }}>
          {
            veggies?.map(recipe =>  {
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

export default Veggies