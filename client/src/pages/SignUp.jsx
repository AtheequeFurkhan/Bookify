import {Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'
import OAuth from '../components/OAuth';



export default function SignUp() {
  const [formData , setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    
    try {
      setLoading(true); // loading
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      //convert the response to json format
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='p-4 max-w-lg ms-auto me-auto'>
      
      <h1 className='text-3xl font-bold text-center mt-10 '>
        Sign Up
      </h1>
      <form onSubmit = {handleSubmit} className= 'flex flex-col gap-4 my-10'>
        <input type="text" placeholder="Username" className='p-3 rounded-lg border-2' id="username" onChange = {handleChange}/>
        <input type="email" placeholder="Email" className='p-3 rounded-lg border-2' id="email" onChange = {handleChange}/>
        <input type="password" placeholder="Password" className='p-3 rounded-lg border-2' id="password" onChange={handleChange} />        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-6 justify-center '>
        <p>
          Have an account?
        </p>
        <Link to={"/sign-in"} className='text-slate-700 hover:underline'>
          <span className="text-blue-800">
          Sign In
          </span>
        </Link>
      </div>
      {error && <p className='text-red-500 text-center mt-4'>{error}</p>}
      
      </div>
  )
}
