import Cook from "../Cook/Cook";

const Cooks = ({addCook}) => {
    
    return (
        <div className="space-y-3">
            <h3 className='text-2xl	font-semibold text-center'>Want to cook: {addCook.length}</h3>
            <hr />
            <div className="space-y-3">
                {addCook.map(cook => <Cook cook={cook}></Cook>)}
            </div>
        </div>
    );
};

export default Cooks;