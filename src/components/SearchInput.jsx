import { useState } from "react"
import { useNavigate } from "react-router-dom"


const SearchInput = () => {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()


  const handleSubmit = e => {
    e.preventDefault()
    navigate(`/searched/${inputValue}`)
    setInputValue('')
  }
  

  return (
    <div className='py-7 flex justify-center'>
      <form onSubmit={handleSubmit} className="flex w-full max-w-[450px]">
        <input 
          type='text' 
          placeholder='look for recipes...' 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 px-2 py-3 text-black border-none outline-none text-lg"
        />
        <button className='bg-purple-600 px-2 py-3'>search</button>
      </form>
    </div>
  )
}

export default SearchInput