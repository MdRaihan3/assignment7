import serachIcon from '../../assets/images/searchicon.svg';
import profileImg from '../../assets/images/profileIcon.svg';
const Header = () => {
    return (
        <div>
            <div>Racipe Calories</div>
            <div>
                <h5>Home</h5>
                <h5>Racipes</h5>
                <h5>About</h5>
                <h5>Search</h5>
            </div>
            <div>
<button><img src={serachIcon} alt="" /> search</button>
<img src={profileImg} alt="" />
            </div>
        </div>
    );
};

export default Header;