import React from "react";
import {Link} from 'react-router-dom'
const Nav=()=>{
    return(
    <nav>
        <Link to='/'>Getdata</Link>
        <Link to='/add'>AddResult</Link>
        <Link to='/result'>GetResult</Link>
    </nav>)
}
export default Nav