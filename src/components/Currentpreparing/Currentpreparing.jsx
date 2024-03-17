
const Currentpreparing = ({ currentcook }) => {
    const {name, preparing_time, calories}= currentcook
    return (

        <div className="grid grid-cols-11 gap-6">
            <span className="col-span-1">1</span>
            <p className="col-span-4">{name}</p>
            <p className="col-span-3">{preparing_time} minutes</p>
            <p className="col-span-3">{calories} calories</p>
        </div>
    );
};

export default Currentpreparing;