import time from '../../assets/images/time.svg';
import caloriesImg from '../../assets/images/calories.svg';

const Recipe = ({ recipe,cooksCount}) => {
    const { name, image, description, calories, preparing_time, ingredients } = recipe

    return (
        <div className="col-span-1 space-y-3 border-2 p-4 rounded-xl">
            <img className="w-full h-60 rounded-3xl" src={image} alt="" />
            <h3 className="text-xl font-semibold">{name}</h3>
            <p>{description.slice(0,75)}...</p>
        
            <hr />
            <p>Ingredients : {ingredients.length}</p>
            <ul className="list-disc ml-4">
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
            </ul>
            <hr />
            <div className='flex justify-between'>
                <div className='flex text-center gap-2'><img src={time} alt="" /> {preparing_time} minutes</div>
                <div className='flex text-center gap-2'><img src={caloriesImg} alt="" /> {calories} calories</div>
            </div>
            <button onClick={()=>cooksCount(recipe)} className='px-4 py-3 rounded-3xl bg-[#0BE58A] font-semibold'>Want to Cook</button>
        </div>
    );
};

export default Recipe;