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
        return (
        <div>
            <div className="signup-box">
                <h2 className="logo-header">Webstagram</h2>
                <h4 id="hook-text">Sign up to see photos and videos from your friends.</h4>
                <button id="facebook-button">Log in with Facebook</button>
                <div className="or-bar">
                    <p className="or-bar-line">______________</p>
                    <p>OR</p>
                    <p className="or-bar-line">______________</p>
                    {/* <hr className="or-bar-line"/>
                    <h4>OR</h4>
                    <hr size="9" width="50%" color="grey"/> */}
                </div>
                <form>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <button>Sign up</button>
                </form>
                <p>*This app is not endorsed, affiliated, or otherwise associated with Instagram*</p></div>
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
        )}
}

export default Register