import React from 'react';
import Posts from './posts';

class PostContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // Inside here will go the posts data
        }
    }

    render() {
        <div>
            {/* Here will go the posts */}
            <Posts />
        </div>
    }
}

export default PostContainer;