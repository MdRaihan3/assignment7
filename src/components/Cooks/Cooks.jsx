import Cook from "../Cook/Cook";

const Cooks = ({ addCook, handlePreparing }) => {

    return (
        <div className="space-y-3">
            <h3 className='text-2xl	font-semibold text-center'>Want to cook: {addCook.length}</h3>
            <hr />
            <div className="space-y-6">
                <div className="grid grid-cols-11 gap-6">
                    <span className="col-span-1"></span>
                    <span className="col-span-3">Name</span> 
                    <span className="col-span-2">Time</span>  
                    <span className="col-span-2">Calories</span>
                    <span className="col-span-3"></span>
                </div>
                <div className="space-y-3">
                    {addCook.map(cook => <Cook handlePreparing={handlePreparing} cook={cook}></Cook>)}
                </div>
            </div>
        </div>
    );
};

export default Cooks;