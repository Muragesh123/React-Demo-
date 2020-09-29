import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login} from '../../redux/reducer';
import { Link } from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
             
        };
    }
    
    render() {
        // let {email,password} = this.state
        let{isLoginPending,isLoginSuccess,loginError} = this.props
        return (
            <div className="auth-wrapper" onSubmit={this.onSubmit}>
             <div className="auth-inner">
            <form name="Login">
            
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={e => this.setState({email:e.target.value})}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control"  name="password" placeholder="Enter password" onChange={e => this.setState({password:e.target.value})} />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>

            {isLoginPending && <div>Please wait ...</div>}
            {isLoginSuccess && <div>{this.props.history.push("/meeting")}</div>}
            {loginError && <div>Invalid email or password</div>}
            
        </form>
        </div>
        </div>
        )
    }
    onSubmit = (e) => {
        e.preventDefault();
      
        let {email,password} = this.state
        this.props.login(email,password);
    }
}



const mapStateToProps = (state) =>{
    return{
        isLoginPending:state.isLoginPending,
        isLoginSuccess:state.isLoginSuccess,
        loginError:state.loginError

    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        login:(email,password) => dispatch(login(email,password))

    };
}

export default connect(mapStateToProps,mapDispatchToProps) (Login);
