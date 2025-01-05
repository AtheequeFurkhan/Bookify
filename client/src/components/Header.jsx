import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const isAuthPage = location.pathname === '/sign-in' || location.pathname === '/sign-up';

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/75 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="bookify-2.png" 
              alt="Bookify" 
              className="h-10 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4 justify-center">
            <form className="relative">
              <input
                type="text"
                placeholder="Search for events, venues..."
                className="w-full py-2 pl-4 pr-10 text-sm rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                <FaSearch className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="hidden sm:inline-block text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="hidden sm:inline-block text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </Link>

            {!isAuthPage && currentUser ? (
              <Link to="/profile" className="flex items-center">
                <div className="relative">
                  <img
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-white hover:ring-blue-500 transition-all"
                    src={currentUser.rest?.avatar || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                    alt="profile"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white"></span>
                </div>
              </Link>
            ) : (
              <Link 
                to="/sign-in" 
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Sign in
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}