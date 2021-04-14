import React from 'react';

function SearchBar() {
    return(
        <div>
            <nav>
                <a href="#">Webstagram</a>
                {/* Makes a search call for users, not items, on keypress */}
                <input>Search Bar</input>
                <a href="#">Home</a>
                <a href="#">Messages</a>
                <a href="#">Likes</a>
                <a href="#">Profile</a>
            </nav>
        </div>
    )
}

export default SearchBar;