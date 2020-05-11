import React from 'react';

import './sidebar.css'
import { slide as Menu } from 'react-burger-menu';
import {NavLink} from 'react-router-dom';


export default class SideBar  extends React.Component{
  render(){
    return (
      <Menu>
        <NavLink to='/'>Main</NavLink>
        <NavLink className="menu-item" to='/habits'>Habits</NavLink>
      </Menu>
    );
  }
  
};
