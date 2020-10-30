import  React,{useEffect, useState} from 'react'
import {Input} from './share/Input'
import { firebaseAuth } from '../../firebase'
import {useHistory} from 'react-router-dom'
export const Login = () => {
    const [inputValue, setInputValue] = useState({
        email:"",
        password:""
    })
    const handleChange = (event) =>{
        setInputValue({
            ...inputValue,
            [event.target.name]: event.target.value
        })
    }
    useEffect(() => {
        firebaseAuth.onAuthStateChanged((user) => {
            // if (user) {
            //     this.setState({
            //         loggedInUser: user,
            //         loading: true
            //     })
            // }
        })
    }, [])
    const history = useHistory()
    const goToRegister = () => {
        history.push('/auth/register')
    }
    const handleLogin = (event) =>{
        event.preventDefault();
        firebaseAuth.signInWithEmailAndPassword(inputValue.email, inputValue.password)
        history.push('/home/')
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div><Input label='Email' name='email' type='text' value={inputValue.email} onChange={handleChange}/></div>
                <div><Input label='Password' name='password' type='password' value={inputValue.password} onChange={handleChange}/></div>
                <button type='submit'>Login</button>
            </form>
            <div>
                <button type='button' onClick={goToRegister}>Go to regiseter</button>
            </div>
        </div>
    )
}

