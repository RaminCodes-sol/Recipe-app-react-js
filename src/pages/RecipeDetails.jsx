import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




const RecipeDetails = () => {
  const [recipeDetails, setRecipeDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')
  const params = useParams()


  const getRecipeDetails = async (id) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=a3a7ec65aaf6483aa99624870566a8cd`)
    const data = await response.json()
    setRecipeDetails(data)
  }


  useEffect(() => {
    getRecipeDetails(params.recipeId)
  }, [params.recipeId])



  return (
    <section className='flex flex-col lg:flex-row w-full max-w-[1100px] mx-auto px-6 py-6'>

        {/*-------Left-Side-------*/}
        <div className="px-4">
            <h3>{recipeDetails.title}</h3>
            <figure className="w-[250px] h-[250px]">
                <img src={recipeDetails.image} alt='img' className="w-full h-full object-cover rounded-lg" />
            </figure>
        </div>

        {/*-------Right-Side-------*/}
        <div className="flex-1 p-3 px-9">
            <div className="flex gap-4 py-4">
                <button onClick={() => setActiveTab('instructions')} className={`${ activeTab === 'instructions' && 'bg-purple-500 text-white'} border-2 border-purple-500 p-2 text-purple-500 transtion-colors duration-300 hover:bg-purple-500 hover:text-white`}>instructions</button>
                <button onClick={() => setActiveTab('ingredients')} className={`${activeTab === 'ingredients' && 'bg-purple-500 text-white'} border-2 border-purple-500 p-2 text-purple-500 transtion-colors duration-300 hover:bg-purple-500 hover:text-white`}>ingredients</button>
            </div>
            <div>
                { 
                    activeTab === 'instructions' && (
                        <>
                            <h3 className="text-xl font-semibold mt-9 pb-1">Summary:</h3>
                            <p id='p-tag-details' className="indent-2" dangerouslySetInnerHTML={{__html: recipeDetails.summary}}></p>
                            <h3 className="text-xl font-semibold mt-9 pb-1">Instructions:</h3>
                            <p id='p-tag-details' className="indent-2" dangerouslySetInnerHTML={{__html: recipeDetails.instructions}}></p>
                        </>
                    )
                }

                {
                    activeTab === 'ingredients' && (
                        <ul>
                            {
                                recipeDetails?.extendedIngredients.map((ingredient, index) => {
                                    return (
                                        <li className="list-disc" key={index}>{ingredient.original}</li>
                                    )
                                })
                            }
                        </ul>
                    )
                }
            </div>
        </div>

    </section>
  )
}

export default RecipeDetails