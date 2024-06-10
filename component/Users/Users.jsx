import { useParams } from 'react-router-dom'
useParams

function Users() {
    const {usersID} = useParams()
  return (
    <div className='bg-orange-700 text-white text-3xl text-center'>User : {usersID}</div>
  )
}

export default Users    