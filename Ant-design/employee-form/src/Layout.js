import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      
      <ul>
        
        <li>
            <Link to="/employee">Employee</Link>
        </li>
      </ul>
    </div>
  )
}

export default Layout;
