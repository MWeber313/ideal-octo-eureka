import React from 'react';

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // _Here_ will go the post data
        }
    }

    render() {
        <div>
            <img id="profile"></img>
            <p id="username"></p>
            {/* Side menu button later feature */}
            <img id="post-picture"></img>
            <p>Heart</p>
            <p>Comment</p>
            <p>Share</p> {/* Later feature */}
            <p>Bookmark</p> {/* Later feature */}
            <p>Number of likes</p>
            <p>username</p>
            <p>text content of post</p>
            <span>=======</span>
            <p>Emoji button</p> {/* Later feature */}
            <input>Add a comment...</input>
        </div>
    }
}

export default Posts;