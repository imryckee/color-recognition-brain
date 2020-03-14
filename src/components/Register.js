import React from 'react';

const initialState = {
    name:'',
    email:"",
    password:'',
    submissionFormat:"",
    emailExisted:"",
    dbfailed:""
}

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = initialState;
    } 
 
    onNameChange = (event) => {
        this.setState({name:event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email:event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password:event.target.value})
    }

    onSubmitRegister = (event) => {
        event.target.parentNode.parentNode.firstChild.childNodes[1].lastChild.value="";
        event.target.parentNode.parentNode.firstChild.childNodes[2].lastChild.value="";
        event.target.parentNode.parentNode.firstChild.childNodes[3].lastChild.value="";

        fetch(this.props.server+"/register",{
            method:'post',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
                name:this.state.name,
                email:this.state.email,
                password:this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            this.setState(
                ()=>(initialState)
            );
            if(data==="incorrect form submission"){
                this.setState(
                    ()=>({submissionFormat:false})
                );
            }else if (data==="email has existed"){
                this.setState(
                    ()=>({emailExisted:true})
                );
            }else if (data==="there is something wrong with database"){
                this.setState(
                    ()=>({dbfailed:true})
                );
            }else{
                this.props.onRouteChange('signin');
            }
        })
        .catch(err => {
            console.log("Can't connect to database.");
            this.setState(
                ()=>({dbfailed:true})
            );
        })
    }

    render(){
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-30-l mw10 shadow-5 center">
                <main className="pl5 pr5 pt4 pb3 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f3 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input
                                    onChange={this.onNameChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" 
                                    name="name"  
                                    id="name"
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    onChange={this.onEmailChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    onChange={this.onPasswordChange}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password"
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                                onClick={this.onSubmitRegister}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Register"
                            />
                        </div>
                    </div>
                    {this.state.emailExisted===true
                        ?<p className="white">This email has existed.</p>
                        :(this.state.submissionFormat===false
                            ?<div className="white">
                                <p>Incorrect form submission.</p>
                                <p>Follow the following rules.</p>
                            </div>
                            :(this.state.dbfailed===false
                                ?<div className="white">
                                    <p>Can't connect to database.</p>
                                    <p>Try it later.</p>
                                </div>
                                :<div></div>
                            )
                        )
                    }
                    <div>
                        <p>Name shouldn't be empty.</p>
                        <p>Email should be valid. </p>
                        <p>Password should be greater than 6 digits.</p>
                    </div>
                </main>
            </article>
        )
    }
}
export default Register