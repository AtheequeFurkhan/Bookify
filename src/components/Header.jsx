import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
   <header className='bg-slate-200'>

    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
<Link to='/' className='text-slate-800 text-xl font-bold'>
    <h1 className='font-bold text-sm sm:tex-xl flex flex-wrap '>
    <span className='text-slate-400'>
    Book
    </span>
    <span className='text-slate-800'>
    Ify
    </span>

    </h1>
    </Link>
    <form className = 'bg-slate-100 p-3 rounded-lg flex items-center'>
        <input type='text' placeholder='Search....' className='bg-transparent focus:outline-none w-40 sm:w-70'/>
        <FaSearch className='text-slate-800'/>
    </form>
    <ul className='flex gap-4'>
        <Link to='/'>
        <li className='hidden sm:inline text-slate-600 hover:underline'>
            Home
        </li>
        </Link>
        <Link to='/about'>
        <li className='hidden sm:inline text-slate-600 hover:underline'>
            About
        </li>
        </Link>
        <Link to='/sign-in'>
        <li className=' text-slate-600 hover:underline'>
            Sign In
        </li>
        </Link>
    </ul>
    </div>
    
   </header>
  )
}
