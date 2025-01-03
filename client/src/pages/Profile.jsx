import { useSelector } from "react-redux"

export default function Profile() {
  const currentUser = useSelector((state) => state.user);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-semibold text-center my-7'>
      Profile
        </h1>
    <form className="flex flex-col items-center gap-4">
      {/* <img src={currentUser.user} /> */}
      <input type="text" placeholder="username" className="w-80 border p-3 rounded-xl "/>
      <input type="email" placeholder="email" className="w-80 border p-3 rounded-xl "/>
      <input type="password" placeholder="password" className="w-80 border p-3 rounded-xl "/>
      <button className = "w-80 border p-3 rounded-xl bg-green-400 text-slate-950 uppercase hover:bg-opacity-75 disabled:85" >Update Profile</button>

      <p></p>


      
    </form>
    </div>
  )
}
