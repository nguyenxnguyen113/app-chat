import  React, {Component} from 'react'
import {Input} from './share/Input'
import { firebaseAuth } from '../../firebase'
export class Register extends Component  {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        status: 'default'
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
            this.setState({
                status: 'success'
            })
        }).catch(()=>{
            this.setState({
                status: 'error'
            })
        })
    }
    backToLogin = () => {
        console.log(this.props.history.push('/auth/login'))
    }

    render() {
        const {email, password, confirmPassword, message} = this.state
        return (
        <div>
            <h2>Register</h2>
        {message === 'success' && <p className="msg-success">Registered successfully!</p>}
        {message === 'error' && <p className="msg-error">Oops! something went wrong</p>}
            <form onSubmit={this.handleSubmit}>
                <div><Input label="Email" type="text" value={email} onChange={this.handleChange} name="email"/></div>
                <div><Input label="Password" type="password" value={password} onChange={this.handleChange} name="password"/></div>
                <div><Input label="Confirm password" type="password" value={confirmPassword} onChange={this.handleChange} name="confirmPassword"/></div>
                <div>
                    <button type='submit'>Register</button>
                    <button type='button' onClick={this.backToLogin}>Back to login</button>
                </div>
            </form>
        </div>
        )
    }
}