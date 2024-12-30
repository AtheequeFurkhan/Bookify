import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-4 max-w-lg ms-auto me-auto'>
      
      <h1 className='text-3xl font-bold text-center mt-10 '>
        Sign Up
      </h1>
      <form className= 'flex flex-col gap-4 my-10'>
        <input type="text" placeholder="Username" className='p-3 rounded-lg border-2' id="username"/>
        <input type="text" placeholder="Email" className='p-3 rounded-lg border-2' id="email"/>
        <input type="text" placeholder="Password" className='p-3 rounded-lg border-2' id="password"/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>Sign Up</button>
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
      
      
      </div>
  )
}
