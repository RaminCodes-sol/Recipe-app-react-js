import { Routes, Route, useLocation } from "react-router-dom"
import Home from './pages/Home'
import Cuisine from "./pages/Cuisine"
import Category from "./components/Category"
import SearchInput from "./components/SearchInput"
import Searched from "./pages/Searched"
import Navbar from "./components/Navbar"
import RecipeDetails from "./pages/RecipeDetails"
import { AnimatePresence } from "framer-motion"




const App = () => {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <SearchInput />
      <Category />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine/:type' element={<Cuisine />} />
          <Route path='/searched/:search' element={<Searched />} />
          <Route path='/recipeDetails/:recipeId' element={<RecipeDetails />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
