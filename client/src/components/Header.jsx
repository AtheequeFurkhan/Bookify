import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function Header() {
const { currentUser } = useSelector((state) => state.user);
const location = useLocation();
 const isAuthPage = location.pathname === '/sign-in' || location.pathname === '/sign-up';
    return (
        <header className='bg-slate-200'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/' className='text-slate-800 text-xl font-bold'>
                <img 
    src="bookify-2.png" 
    alt="Bookify" 
    className="w-20 object-contain flex-shrink-0 p-0 m-0" 
/>                </Link>
                <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                    <input type='text' placeholder='Search....' className='bg-transparent focus:outline-none w-40 sm:w-70' />
                    <FaSearch className='text-slate-800' />
                </form>
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li className='hidden sm:inline text-slate-600 hover:underline'>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline text-slate-600 hover:underline'>About</li>
                    </Link>
                    
                    {!isAuthPage && currentUser ? (
    <Link to='/profile'>
        <img
            className='rounded-full h-7 w-7 object-cover'
            src={currentUser.rest?.avatar || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}            alt='profile'
            referrerPolicy='no-referrer'
        />
    </Link>
) : (
    <Link to='/sign-in'>
        <li className='text-slate-700 hover:underline'>Sign in</li>
    </Link>
)}
                </ul>
            </div>
        </header>
    );
}