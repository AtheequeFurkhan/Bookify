import { useSelector } from "react-redux"
import { useRef, useState } from "react";
import { updateUserSuccess , updateUserFailure , updateUserStart } from "../redux/user/userSlice.js";
import { useDispatch } from "react-redux";

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser.rest._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };
  
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-semibold text-center my-7'>
        Profile
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
         Firebase plan need to be updated 3.45 *
        <input type="file" ref={fileRef} hidden accept="image/*"/>
        <img onClick={() => fileRef.current.click()}
          src={currentUser?.rest?.avatar || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} 
          alt="profile" 
          className="rounded-full h-24 w-24 object-cover cursor-pointer"
          referrerPolicy="no-referrer"
        />
        <input 
          type="text" 
          name="username"
          placeholder="username" 
          defaultValue={currentUser?.rest?.username}
          className="w-80 border p-3 rounded-xl"
          onChange={handleChange}
        />
        <input 
          type="email" 
          name="email"
          placeholder="email" 
          defaultValue={currentUser?.rest?.email}
          className="w-80 border p-3 rounded-xl"
          onChange={handleChange}
        />
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
          className="w-80 border p-3 rounded-xl"
        />
        <button className="w-80 border p-3 rounded-xl bg-green-400 text-slate-950 uppercase hover:bg-opacity-75 disabled:opacity-85">
          Update Profile
        </button>
      </form>

      <div className="flex justify-between mt-5">
        <span className="text-red-500 cursor-pointer"> Delete Account </span>
        <span className="text-red-500 cursor-pointer"> Sign Out </span>

      </div>
    </div>
  )
}