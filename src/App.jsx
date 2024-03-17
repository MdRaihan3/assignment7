
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes';
import Cooks from './components/Cooks/Cooks';
import Currentpreparings from './components/Currentpreparings/Currentpreparings';
function App() {
  const [addCook, setAddCook] = useState([])

  const [currentCooks, setCurrentCooks] = useState([])

  const [cookingTime, setCookingTime] = useState(0)
  const [foodCalories, setFoodCalories] = useState(0)

  const cooksCount = (cook) => {
    const newCook = [...addCook, cook]
    setAddCook(newCook)
    console.log()
  }

  const handlePreparing = (cooking, time, calories) => {
    const remainingCooks = addCook.filter(c => c.id !== cooking.id);
    setAddCook(remainingCooks)
    const newCurrentCooking = [...currentCooks, cooking]
    setCurrentCooks(newCurrentCooking)

    const newCookingTime = cookingTime + time;
    setCookingTime(newCookingTime)

    const newFoodCalories = foodCalories+ calories;
    setFoodCalories(newFoodCalories)
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
            <Cooks 
              handlePreparing={handlePreparing} addCook={addCook}></Cooks>
          </div>
          <hr />
          <div className='mt-14'>
            <Currentpreparings currentCooks={currentCooks}></Currentpreparings>
            <hr />
            <div className='pt-6 flex justify-between'>
                <p>Total Times = {cookingTime} minutes</p>
                <p>Total Calories = {foodCalories} calories</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
