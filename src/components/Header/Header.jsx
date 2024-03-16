import searchIcon from '../../assets/images/searchicon.svg';
import profileImg from '../../assets/images/profileIcon.svg';

import './Header.css';

const Header = () => {
    return (
        <div className=''>
            <div className='flex justify-between p-4 my-6  max-w-7xl mx-auto'>
                <div className='text-3xl font-bold'>Racipe Calories</div>
                <div className='flex gap-6'>
                    <h5>Home</h5>
                    <h5>Racipes</h5>
                    <h5>About</h5>
                    <h5>Search</h5>
                </div>
                <div className='flex gap-4'>
                    <img className='-mr-16' src={searchIcon} alt="" />
                    <input className=' bg-[#150B2B0D] rounded-3xl pl-14 py-2 text-black' placeholder='Search' type="text" />

                    <img className='w-10 h-10' src={profileImg} alt="" />
                </div>
            </div>
            <div className='banner text-white space-y-10 lg:px-32 my-6  max-w-7xl mx-auto rounded-xl text-center lg:pt-20'>
                <h1 className='text-5xl font-bold'>Discover an exceptional cooking class tailored for you!</h1>
                <p>Speedy weeknight dinners, 5-ingredient dishes, quick and easy meals, plus kid-pleasing snacks and desserts.
                </p>
                <div className='text-xl font-semibold space-x-6'>
                    <button className='px-4 py-3 rounded-3xl bg-[#0BE58A] text-black'>Explore Now</button>
                    <button className='px-4 py-3 border-2 rounded-full'>Our Feedback</button>
                </div>
            </div>
            <div className='text-center space-y-4'>
                <h3 className='text-4xl font-semibold'>Our Recipes</h3>
                <p className='pb-10'>Explore 10000+ recipes, recipes in videos, the latest food news, articles, kitchen hacks, <br /> diet plans and many more at Times Food.</p>
            </div>
        </div>
    );
};

export default Header;