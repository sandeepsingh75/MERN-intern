import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <Header>
      <div>
        <NavLink to="/">SandeepReactQuery</NavLink>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="//trad">FetchOld</NavLink>
            </li>
            <li>
                <NavLink to="/rq">FetchRQ</NavLink>
            </li>
        </ul>
      </div>
    </Header>
  )
}

export default Header
