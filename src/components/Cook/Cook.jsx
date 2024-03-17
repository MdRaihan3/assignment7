import PropTypes from 'prop-types';

const Cook = ({ cook, handlePreparing, idx }) => {
    const { name, preparing_time, calories} = cook

    return (
        <div className="grid grid-cols-11 gap-6">
            <span className="col-span-1">{idx+1}</span>
            <p className="col-span-3">{name}</p>
            <p className="col-span-2">{preparing_time} minutes</p>
            <p className="col-span-2">{calories} calories</p>
            <button onClick={() => handlePreparing(cook ,preparing_time, calories )} className='col-span-3 rounded-3xl h-10 bg-[#0BE58A] font-semibold'>Preparing</button>
        </div>
    );
};

Cook.propTypes ={
    cook: PropTypes.object,
handlePreparing: PropTypes.func,
idx: PropTypes.number
}
export default Cook;