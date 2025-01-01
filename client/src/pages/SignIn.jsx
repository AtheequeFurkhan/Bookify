import {Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInSuccess,signInFail} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';


export default function SignIn() {
  const [formData , setFormData] = useState({});
  const { loading , error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      dispatch(signInStart());
      //setLoading(true); // loading
      const res = await fetch('/api/auth/signin', {
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
        dispatch(signInFail(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFail(error.message));
    }
  };

  return (
    <div className='p-4 max-w-lg ms-auto me-auto'>
      
      <h1 className='text-3xl font-bold text-center mt-10 '>
        Sign In
      </h1>
      <form onSubmit = {handleSubmit} className= 'flex flex-col gap-4 my-10'>
        <input type="text" placeholder="Username" className='p-3 rounded-lg border-2' id="username" onChange = {handleChange}/>
        {/* <input type="email" placeholder="Email" className='p-3 rounded-lg border-2' id="email" onChange = {handleChange}/> */}
        <input type="password" placeholder="Password" className='p-3 rounded-lg border-2' id="password" onChange={handleChange} />        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Log In'}
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-6 justify-center '>
        <p>
          Dont Have an account?
        </p>
        <Link to={"/sign-up"} className='text-slate-700 hover:underline'>
          <span className="text-blue-800">
          Sign Up
          </span>
        </Link>
      </div>
      {error && <p className='text-red-500 text-center mt-4'>{error}</p>}
      
      </div>
  )
}
