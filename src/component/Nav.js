import React from 'react';
import { Link } from "react-router-dom";



function Nav() {
    return (
        <div>
            <ul >
                <Link to="/about">
                <li>About</li>
                </Link>

                <Link to="/shop">
                <li>Shop</li>
                </Link>
            </ul>
            
        </div>
    )
}

export default Nav
