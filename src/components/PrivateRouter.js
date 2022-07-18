import React, { useContext } from 'react';
import { Route,Navigate } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext'
import Feed from './Feed';

function PrivateRouter({component : Component,...rest}) {
    const {user}=useContext(AuthContext);
  return(
      user ? <Feed/> : <Navigate to='/login'></Navigate>
  )
}

export default PrivateRouter;
