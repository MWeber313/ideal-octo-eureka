import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            full_name: '',
            username: '',
            password: '',
        }
    }

    render(){
        <div class="container">
            <div class="signup-box">
                <h2>Webstagram</h2>
                <h4>Sign up to see photos and videos from your friends.</h4>
                <button>Log in with Facebook</button>
                <h4>OR</h4>
                <form>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <button>Sign up</button>
                </form>
                <p>By signing up, you agree to our <b>Terms</b>, <b>Data Policy</b> and <b>Cookies Policy</b>.</p>
            </div>
            <div class="redirect">
                <p>Have an account? <a href="#">Log in</a>.</p>
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

export default Register