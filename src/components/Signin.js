import React from 'react';

const initialState = {
    signInEmail:"",
    signInPassword:'',
    passwordWrong:"",
    noSuchUser:"",
    dbfailed:"",
} 

class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = initialState;
    }

    onEmailChange = (event) => {
        this.setState({signInEmail:event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword:event.target.value})
    }

    onSubmitSignIn = (event) => {
        event.target.parentNode.parentNode.firstChild.childNodes[1].lastChild.value="";
        event.target.parentNode.parentNode.firstChild.childNodes[2].lastChild.value="";

        fetch(this.props.server+"/signin",{
            method:'post',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
                email:this.state.signInEmail,
                password:this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            this.setState(
                ()=>(initialState)
            );
            if(data==='wrong password'){
                this.setState(
                    ()=>({passwordWrong:true})
                );
            }else if(data==='no such user'){
                this.setState(
                    ()=>({noSuchUser:true})
                );
            }else if(data==='there is something wrong with database'){
                this.setState(
                    ()=>({dbfailed:true})
                );
            }else{
                this.props.onSigninStatusChange(true);
                this.props.loadUser(data);
                this.props.changeToInitialStatus();
                this.props.onRouteChange('home');
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
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f3 fw6 ph0 mh0">Sign In</legend>
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
                                onClick={this.onSubmitSignIn} 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Sign In"
                            />
                        </div>
                    </div>
                    {this.state.passwordWrong===true
                        ?<p className="white">Password is wrong.</p>
                        :(this.state.noSuchUser===true
                            ?<p className="white">No such user.</p>
                            :(this.state.dbfailed===true
                                ?<div className="white">
                                    <p>Can't connect to database.</p>
                                    <p>Try it later.</p>
                                </div>
                                :<div></div>
                            )
                        )
                    }
                </main>
            </article>
        )
    }
}

export default Signin