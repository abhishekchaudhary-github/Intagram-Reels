import React,{useContext,useEffect, useState} from 'react';
import {AuthContext} from '../context/AuthContext'
import { database } from "../firebase";
import UploadFile from './UploadFile';
import Post from './Post';

function Feed() {
  const {user,logout}=useContext(AuthContext);
  const [userData,setUserData]=useState();

  useEffect(()=>{ 
    const unsub=database.users.doc(user.uid).onSnapshot((snapshot)=>{
      setUserData(snapshot.data())
    })
    return ()=>{unsub()}
  },[user])
  return (
    <>
    <div style={{display : 'flex',justifyContent : 'flex-end',marginTop : '1rem',marginRight : '4rem'}}><button onClick={logout}>log out</button></div>
    <div style={{display : 'flex',justifyContent : 'center',alignItems : 'center',flexDirection : 'column'}}>
        <div >
          <h1>Welcome!</h1>          
      </div>
      <UploadFile user={userData}/>
      <Post userData={userData}/>
    </div>
    </>
  )
}

export default Feed;
