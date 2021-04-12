import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    render(){
        <div class="container">
            <div class="signup-box">
                <h2>Webstagram</h2>
                <form>
                    <input></input>
                    <input></input>
                    <button>Log In</button>
                </form>
                <h4>OR</h4>
                <button>Log in with Facebook</button>
                <p>Forgot password?</p>
            </div>
            <div class="redirect">
                <p>Don't have an account? <a href="#">Sign up</a>.</p>
            </div>
            <div>
                <p>Get the App</p>
                <button>App Store</button>
                <button>Google Play</button>
            </div>
            <div><p>*This app is not endorsed, affiliated, or otherwise associated with Instagram*</p></div>
        </div>
    }
}

export default Login