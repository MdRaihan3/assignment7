
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes';
import Cooks from './components/Cooks/Cooks';
function App() {
  const [addCook, setAddCook] = useState([])


  const [count, setCount] = useState(0)

  const cooksCount = (cook) => {
    const newCook = [...addCook, cook]
    setAddCook(newCook)
    console.log()
    const newCount = count + 1;
    setCount(newCount)
  }

  return (
    <>
      <Header></Header>
      <div className='grid grid-cols-7 max-w-7xl mx-auto gap-10 my-6'>
        <div className='col-span-4'>
          <Recipes cooksCount={cooksCount}></Recipes>

        </div>
        <div className='border-2 p-4 rounded-2xl col-span-3'>
          
         
          <div>
            <Cooks addCook={addCook}></Cooks>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
