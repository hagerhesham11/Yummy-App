import { RouterProvider,createHashRouter } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home.jsx';
import Layout from './components/Layout/Layout.jsx';
import MealDetails from './components/MealDetails/MealDetails.jsx';
import Search from './components/Search/Search.jsx';
import Contact from './components/Contact/Contact.jsx';
import Categories from './components/Categories/Categories.jsx';
import Area from './components/Area/Area.jsx';
import AreaMeals from './components/AreaMeals/AreaMeals.jsx'
import CategoryMeals from './components/CategoryMeals/CategoryMeals.jsx';
import Ingredients from './components/Ingredients/Ingredients.jsx';
import IngredientMeals from './components/IngredientMeals/IngredientMeals.jsx'

let router = createHashRouter([
  {path:"/", element:<Layout/> ,children:[
    {index:true,element:<Home/>},
    {path:"/meal/:id",element:<MealDetails/>},
    {path:'/search',element:<Search/>},
    {path:'/categories',element:<Categories/>},
    {path:'/category/:category',element:<CategoryMeals/>},
    {path:'/area',element:<Area/>},
    {path:'/area/:area',element:<AreaMeals/>},
    {path:'/ingredients',element:<Ingredients/>},
    {path:'/ingredients/:ingredient',element:<IngredientMeals/>},
    {path:'/contact',element:<Contact/>},


  ]}
])

function App() {

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
