import React from 'react'
import {Route, Link} from 'react-router-dom'
import {Login} from './Login'
import {Register} from './Register'
export const Auth = () => {
    return(
        <div>
            <div>
                <Link to="/auth/register">Register</Link> 
                &nbsp;
                <Link to="/auth/login">Login</Link>
            </div>
            <Route path="/auth/register" component={Register}/>
            <Route path="/auth/login" component={Login}/>
        </div>
    )
}