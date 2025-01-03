import { useSelector } from "react-redux"

export default function Profile() {
  const currentUser = useSelector((state) => state.user);

  return (
    <div >
      <h1 className='text-3xl font-semibold text-center my-7'>
      Profile
        </h1>
    <form>
      <img src={currentUser.avatar} />
      <input type="text" placeholder="Username" className="block w-full px-4 py-2 border rounded-md my-4" />

      
    </form>
    </div>
  )
}
