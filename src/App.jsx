import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'



function App() {
  const[userSelected,setUserSelected]=useState(null)
  const[users,setUsers]=useState([])
  

  useEffect(()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res=>setUsers(res.data))
  },[])
  

  const refreshList=()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res=>setUsers(res.data))
  }

    const userSelect = (user) =>{
      setUserSelected(user)
        alert(`${user.first_name} was selected`)
        console.log( )
        
       
       
    }
const editUser=(userinput)=>{
  alert(`wait while the user loads... ${userSelected.id}`)
  console.log(userinput)
  axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,userinput)
  .then(()=>refreshList())
  .catch(error => console.log(error.response)) 
}


const deleteUser=(user)=>{

  alert(`deleted user ${user.id}`)
  axios.delete(`https://users-crud1.herokuapp.com/users/${user.id}/`)
  .then(()=>refreshList())
}
  

  return (
    <div className="App">
      <UsersForm 
                  refreshList={refreshList} 
                  userSelected={userSelected}
                  editUser={editUser}
                  setUserSelected={setUserSelected}/>
      <UsersList  
                  users={users} 
                  userSelect={userSelect} 
                  userSelected={userSelected}
                  deleteUser={deleteUser} />
      
    </div>
  )
}

export default App
