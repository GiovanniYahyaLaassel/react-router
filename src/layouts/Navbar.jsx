import {  NavLink } from "react-router-dom";

export default function Navbar () {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='about'>Who we are</NavLink>
                </li>
                <li>
                    <NavLink to='posts'>List of posts</NavLink>
                </li>
            </ul>
        </nav>
    );
}