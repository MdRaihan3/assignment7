import Currentpreparing from "../Currentpreparing/Currentpreparing";

const Currentpreparings = ({ currentCooks }) => {
    return (
        <div className="space-y-3">
            <h3 className='text-2xl	font-semibold text-center'>Current Cooking: {currentCooks.length}</h3>
            <hr />
            <div className="space-y-6">
                <div className="grid grid-cols-11 gap-6">
                    <span className="col-span-1"></span>
                    <span className="col-span-4">Name</span>
                    <span className="col-span-3">Time</span>
                    <span className="col-span-3">Calories</span>
                </div>
                <div className="space-y-3">
                    {currentCooks.map(currentcook => <Currentpreparing currentcook={currentcook}></Currentpreparing>)}
                </div>
            </div>
            
        </div>
    );
};

export default Currentpreparings;