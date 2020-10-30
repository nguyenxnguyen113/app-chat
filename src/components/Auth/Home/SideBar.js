import React, {useEffect, useState} from 'react';
import { firebaseAuth, firebaseDb } from '../../../firebase';
import { Input } from '../share/Input';

export const SideBar = (props) => {
    const [value, setValue] = useState({
        name: "",
        user: ""
    })
    const [conversations, setConversations] = useState([])
    const handleChange = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        firebaseDb.collection("conversations").add({
            name:value.name,
            users: [props.loggedInUser.email, value.user]
        })
    }
    useEffect(()=>{
        console.log(props.loggedInUser.email)
        firebaseDb.collection('conversations').where('users', 'array-contains', props.loggedInUser.email).onSnapshot((querySnapshot)=>{
            querySnapshot.docChanges().forEach((change) => {
                setConversations((prev)=>{
                    return [...prev, {id: change.doc.id, name: change.doc.data().name, users: change.doc.data().users}]
                })
            });
        })
    },[props.loggedInUser.email])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Input type="text" onChange = {handleChange} label="Name" name="name" value={value.name}/>
                </div>
                <div>
                    <Input type="text" onChange = {handleChange} label="User" name="user" value={value.user}/>
                </div>
                <div>
                    <button type="submit">Create</button>
                </div>
                
            </form>
            <div>
                {conversations.map((item) => {
                    return <div key={item.id} onClick={()=>{props.onConClick(item)}}>{item.name}</div>
                })}
            </div>
        </div>
    )
}