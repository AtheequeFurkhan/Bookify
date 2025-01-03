import { useSelector } from "react-redux"

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-semibold text-center my-7'>
        Profile
      </h1>
      <form className="flex flex-col items-center gap-4">
        <img 
          src={currentUser?.rest?.avatar || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} 
          alt="profile" 
          className="rounded-full h-24 w-24 object-cover cursor-pointer"
          referrerPolicy="no-referrer"
        />
        <input 
          type="text" 
          placeholder="username" 
          defaultValue={currentUser?.rest?.username}
          className="w-80 border p-3 rounded-xl"
        />
        <input 
          type="email" 
          placeholder="email" 
          defaultValue={currentUser?.rest?.email}
          className="w-80 border p-3 rounded-xl"
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-80 border p-3 rounded-xl"
        />
        <button className="w-80 border p-3 rounded-xl bg-green-400 text-slate-950 uppercase hover:bg-opacity-75 disabled:opacity-85">
          Update Profile
        </button>
      </form>
    </div>
  )
}