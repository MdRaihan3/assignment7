
const Cook = ({cook}) => {
   const {name,preparing_time, calories} = cook
  
    return (
        <div className="flex justify-between">
           <span>1</span> <p>{name}</p> <p>{preparing_time} minutes</p> <p>{calories} calories</p>
        </div>
    );
};

export default Cook;