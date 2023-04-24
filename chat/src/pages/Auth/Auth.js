import React from 'react'
import './Auth.css'
import Logo from "../../img/logo.png"
const Auth = () => {
  return (
    <div className="Auth">
<div className='a-left'>
<img src={Logo} alt=''/>
<div className='Webname'>
<h1>Andarg Media</h1>
<h6>Explore the ideas throughout the world</h6>
</div>
</div>
<LogIn/>
{/* <SignUp/> */}
    </div>
  );
};
function LogIn(){
    return(
        <div className='a-right'>
            <form className='infoForm authForm'>
                <h3>Log in</h3>
<div>
<input type="text"
className='infoInput'
placeholder="username"
name="username"
/>
</div>
<div>
<input type="password"
className='infoInput'
placeholder="password"
name="password"
/>
</div>
<div>
    {/* <Link to='/signup'> */}
        <span style={{fontSize:'12px'}}>
            Don,t have an account sign up
        </span>
    {/* </Link> */}
    <button className='button infoButton'>Login</button>
</div>
</form>
</div>
);
};
function SignUp(){
    return(
        <div className='a-right'>
            <form className='infoForm authForm'>
                <h3>Sign up</h3>
                <div>
                    <input type='text' placeholder='first Name' className='infoInput' name='firstname'/>
                    <input type='text' placeholder='last Name' className='infoInput' name='lastname'/>
                </div>
                <div>
                <input type='text' placeholder='username' className='infoInput' name='username'/> 
                </div>
                <div>
                <input type='text' placeholder='password' className='infoInput' name='password'/> 
                <input type='text' placeholder='conform pass' className='infoInput' name='conform password'/> 
                </div>
                <div>
                    <span style={{fontSize:'12px'}}>already have account Login!</span>
                </div>
                <button className='button infoButton ' type='submit'>Signup</button>
            </form>

        </div>
    )
}

export default Auth
