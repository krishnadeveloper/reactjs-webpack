import React from "react";
import axios from "axios";


class SignupForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        //console.log(this.state);
    }

    onSubmit(e){
        e.preventDefault();
        //console.log(this.state);
        let signupData = this.state;
        
        fetch('api/usersignup',{signupData}).then((res)=>{
            console.log(res);
        }).then(()=>{
        });
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" onChange={this.onChange} name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} />

                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control"  onChange={this.onChange} name="password" id="exampleInputPassword1" placeholder="Password" value={this.state.password} />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    };
};

export default SignupForm;