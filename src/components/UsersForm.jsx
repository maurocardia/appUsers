import React, { useEffect, useState } from 'react';
import axios from "axios"
import { FaUserAlt,FaBirthdayCake } from 'react-icons/fa'
import {MdEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"


const UsersForm = ({refreshList,userSelected,editUser,setUserSelected}) => {
    const[name,setName]=useState("")
    const[lastName,setLastName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[birthday,setBirthday]=useState("")

    
  const reset=()=>{
    setName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setBirthday("")
}

useEffect(()=>{
   
    if(userSelected!==null){
        setName(userSelected.first_name)
        setLastName(userSelected.last_name)
        setEmail(userSelected.email)
        setPassword(userSelected.password)
        setBirthday(userSelected.birthday)

    }

},[userSelected])

const uploadUser=(typedUser)=>{
    alert("the user is being sent")
    axios.post("https://users-crud1.herokuapp.com/users/",typedUser)
    .then(()=>{
                console.log(typedUser)
                refreshList()
                reset() })
    .catch(error=> console.log(error.response))
}
   


    const submit = (e) =>{
        e.preventDefault()
     
            const typedUser = {
                email:email,
                password:password,
                first_name:name,
                last_name:lastName,
                birthday:birthday
            }
            
            
            if(userSelected!==null){
                editUser(typedUser)
                reset()
               
            }else{
                uploadUser(typedUser)
                 setUserSelected(null)
            }
    }

    return (
    
        <div className='containerform'>

            <form onSubmit={submit} >

                <h2>New User</h2>

                <div className='containerName'>
                    
                    <div className='containerFirstName'>
                        <h4><FaUserAlt/></h4>
                        <label htmlFor="firstName"></label>
                        <input 
                                onChange={e=> setName(e.target.value)}
                                type="text"
                                id='firstName'
                                value={name} 
                                placeholder='First Name'/>
                    </div>

                    <div className='containerlastName'>
                        <label htmlFor="lastName" ></label>
                         <input  
                                onChange={e=> setLastName(e.target.value)}
                                type="text"
                                id='lastName'
                                value={lastName}
                                placeholder='Last Name' />
                                    
                    </div>
                            
                </div>

               

                <div className='containerEmail'>
                    <label htmlFor="email"><b><MdEmail/> </b></label>
                    <input 
                            onChange={e=> setEmail(e.target.value)}
                            type="text"
                            id='email'
                            value={email} 
                            placeholder="Email"/>
                            
                </div>

                <div className='containerPassword'>
                    <label htmlFor="password"><b><RiLockPasswordFill/> </b></label>
                    <input 
                            onChange={e=> setPassword(e.target.value)}
                            type="password"
                            id='password'
                            value={password} 
                            placeholder="Password"/>
                            
                </div>

                <div className='containerBirthday'>
                    <label htmlFor="birthday"><b> <FaBirthdayCake/> </b></label>
                    <input 
                            onChange={e=> setBirthday(e.target.value)}
                            type="date"
                            id='birthday'
                            value={birthday} />
                            
                </div>
                <div className='containerUpload'>

                    <button className='upload' onClick={submit} type='submit' >Upload</button>
                </div>

            </form>
        </div>
    );
};

export default UsersForm;