import React from 'react'
import { Outlet, Link } from "react-router-dom";


function Nav() {
  return (
    <div style={{ width:"100%", backgroundColor:"#e8e7e3", paddingTop:"20px"}}>
      <ul style={{ listStyle: "none", width:"200px", justifyContent:"space-between", display:"flex",
       paddingBottom:"27px"}}>
        <li>
            <Link to="/">Main</Link>
        </li>
        
        <li>
            <Link to="/about">About</Link>
        </li>

        <li>
            <Link to="/blog">Blog</Link>
        </li>
        </ul>
    </div>
  )
}

export default Nav;
