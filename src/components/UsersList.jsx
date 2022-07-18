import React from 'react';
import {MdDelete} from "react-icons/md"
import{AiFillEdit} from "react-icons/ai"

const UsersList = ({users,userSelect,deleteUser}) => {
    return (
        <div className='containerList'>
            {
                users.map(user => (
                    <li key={user.id}>
                        <div className='userName'>
                            <small><b>Name:</b> {user.first_name}</small>
                        </div>
                        <div className='userName'>
                            <small><b>Last Name:</b> {user.last_name}</small>
                        </div>
                        <div className='userName'>
                            <small><b>Email:</b> {user.email}</small>
                        </div>
                        <div className='userName'>
                            <small><b>Password:</b> {user.password}</small>
                        </div>
                        <div className='userName'>
                            <small><b>Birthday:</b> {user.birthday}</small>
                        </div>
                        <div className='containerButton'>
                            <button  type='button' onClick={()=>userSelect(user)}><AiFillEdit/></button>
                            <button id="delete" type="button" onClick={()=>deleteUser(user)}><MdDelete/> </button>
                        </div>
                    </li>
                 ))
            }
        </div>
    );
};

export default UsersList;