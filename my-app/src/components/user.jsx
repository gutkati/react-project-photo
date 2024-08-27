import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

const activeClass = (({isActive}) => isActive ? 'active' : '')
const years = ['2000', '2001', '2002', '2003', '2004']
const User = () => {
    const listYear = years.map(year => (
            <div>
                <NavLink to={`/user/${year}`} className={activeClass}>{year}</NavLink>
            </div>
        )
    )

    return (
        <div>
            <Link to='/'>Выйти</Link>
            <div>
                <h2>Hello user!</h2>
                <ul>
                    {listYear}
                </ul>
            </div>
            <Outlet/>
        </div>

    );
};

export default User;