import React from 'react';
import {FaUserLock} from "react-icons/fa";
import {FaKey} from "react-icons/fa";
import style from './Login.module.scss'

//Components Login
class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            pwd: '',
            errorMsg: ''
        }
    };
    //Collecter le nom et pwd de l'utisateur et l'envoyer au component parent
    onSubmit =(e) => {
        e.preventDefault();
        const resulte = {
            "name":this.state.name,
            "password":this.state.pwd
        }
        this.props.userSubmit(resulte);
    }
    //Gérer la saisie du nom
    onChangeName = (e) => {
        this.setState({name:e.target.value});
        this.setState({errorMsg: ''})
    }
    //Gérer la saisie du pwd
    onChangePwd= (e) =>{
        this.setState({ pwd: e.target.value})
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} method="get" className={style.container}  >
                <h3 className={style.Heading}>Sign In</h3>
                <label htmlFor="username">Username:</label>
                <div className={style.row}>
                    <div className={style.icon}>
                        <FaUserLock size="16px"/>
                    </div>
                    <input type="text" name="username" placeholder="Username" id="username" required value={this.state.name} onChange={this.onChangeName}></input>
                </div>
                <p className={style.errorMsg}>{this.state.errorMsg}</p>
                <label htmlFor="password">Password:</label>
                <div className={style.row}>
                    <div className={style.icon}>
                        <FaKey size="16px"/>
                    </div>
                    <input type="password" name="password" placeholder="Password" id="password" required value={this.state.pwd} onChange={this.onChangePwd} />
                </div>
                <button type="primary" onClick={this.onSignIn}>Sign In</button>
                <span>Only admin can login, <a href="mailto:devhugok@gmail.com">forgot Password?</a></span>
            </form>
    )}
}


export default Login