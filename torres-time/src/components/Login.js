import React from 'react';

const loginPage = {
  image:{
      height: 'auto',
      width: 'auto',
   },
}

function Login() {
    return (

   

    <div className="vh-100 bg-secondary text-center" style={loginPage.image}>
      <br></br><br></br><br></br>
                        <h2>Ready to sweat?</h2>
                  
                  
                  
                        <br></br><br></br> <form>
                        <div>
                            <label htmlFor="email"><b>Username:</b></label><br></br>   
                            <input
                            placeholder="Username"
                            name="username"
                            type="username"
                            id="username"/>
                        </div>

                        <div className="space-between my-2">
                            <label htmlFor="pwd"><b>Password:</b></label><br></br>
                            <input
                            placeholder="******"
                            name="password"
                            type="password"
                            id="pwd" />
                        </div><br></br>
                    <div>
                        <div>
                        <button type="submit" class="btn btn-lg btn-dark m-2">LOGIN</button>
                        </div>
                    </div>

          </form>
      </div>
    
      
           
      );
    }
    export default Login;
  