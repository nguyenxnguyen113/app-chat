import React, {Component} from 'react';
import { firebaseAuth } from '../../../firebase';
import { Redirect } from "react-router-dom"
import { SideBar } from './SideBar';
import {Header} from './Header'
import {Composer} from './Composer'
import { ListMessageClass } from './ListMessage';
export class Home extends Component {
    state = {
        loggedInUser: null,
        loading: true,
        activeCon: null,
    }
    handleChangeActiveCon = (conversation) => {
        this.setState({
            activeCon: conversation
        })
    }
    componentDidMount() {
        firebaseAuth.onAuthStateChanged((user) => {
            console.log(user)
            if (user) {
                this.setState({
                    loggedInUser: user,
                })
            }
            this.setState({loading: false})
        })
    }
    render() {
        const {loggedInUser, loading, activeCon} = this.state;
        console.log(loggedInUser,loading)
        if(loading) {
            return <p> trying to login </p>
        }
        if (!loading && !loggedInUser) {
            return <Redirect to="/auth/login"/>
        }

        return( 
        <div style= {{display: "flex"}}>
            <div style={{width: 200}}>
                <SideBar loggedInUser={loggedInUser} activeCon={activeCon} onConClick={this.handleChangeActiveCon}/>
            </div>
            {activeCon ? <div>
                <Header activeCon={activeCon}/>
                <ListMessageClass activeCon={activeCon}/>
                <Composer activeCon={activeCon} loggedInUser={loggedInUser}/>
            </div> : null}
            
        </div>
        )
    }
}