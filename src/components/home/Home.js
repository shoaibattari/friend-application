import React from 'react'
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import LoginUi from '../login.ui/LoginUi';


function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/Signup">Signup</Link>
            {<br/>}

        </div>
    )
}


export default Home;