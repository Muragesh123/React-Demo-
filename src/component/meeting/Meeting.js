
import React, { Component } from 'react'

export class Meeting extends Component {

    userData;
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
             name:'',
             email:'',
             date:''
        }
    }

    onChangeName(e){
        this.setState({name:e.target.value})

    }
    onChangeEmail(e){
        this.setState({email:e.target.value})
        
    }
    onChangeDate(e){
        this.setState({date:e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
      
        // this.setState({
        //     name:'',
        //     email:'',
        //     date:''
        // })
    }

    componentDidMount(){
        this.userData = JSON.parse(localStorage.getItem('user'));
        if(localStorage.getItem('user')){
            this.setState({
                name:this.userData.name,
                email:this.userData.email,
                date:this.userData.date
            })

        }else{

            this.setState({
                name:'',
                email:'',
                date:''
            })

        }

    }
    componentWillUpdate(nextProps,nextState){
        localStorage.setItem('user',JSON.stringify(nextState));


    }
    
    render() {
        return (
            <div className="auth-wrapper" onSubmit={this.onSubmit}>
             <div className="auth-inner">
            <form name="Login">
            
            <h3>Welcome to Meeting form</h3>

            <div className="form-group">
                <label>Participant Name</label>
                <input type="text" className="form-control" name="email" placeholder="Enter email" value={this.state.name} onChange={this.onChangeName}/>
            </div>

            <div className="form-group">
                <label>Participant Email</label>
                <input type="email" className="form-control"  name="password" placeholder="Enter password" value={this.state.email} onChange={this.onChangeEmail} />
            </div>

            <div className="form-group">
                <label>Date</label>
                <input type="date" className="form-control"  name="password" placeholder="Enter password" value={this.state.date}  onChange={this.onChangeDate} />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>

        
        </form>
        </div>
        </div>
        )
    }
}

export default Meeting
