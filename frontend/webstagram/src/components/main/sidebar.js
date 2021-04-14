import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        <div>
            <div id="User Profile">
                <img src="" alt="Profile"></img>
                <p>username</p>
                <p>Full Name</p>
                <button>Switch</button>
            </div>
            <p>Suggestions For You</p>
            <button>See All</button>
            {/* Will pull user profiles from dummy data and make one of these per each profile */}
            <div>
                <img src="" alt="Profile"></img>
                <p>username</p>
                {/* Instead of full name, you see username and suggested for you */}
                <p>Suggested For You</p>
                <button>Follow</button>
            </div>
            <p>*This app is not endorsed, affiliated, or otherwise associated with Instagram*</p>
        </div>
    }
}

export default Sidebar;