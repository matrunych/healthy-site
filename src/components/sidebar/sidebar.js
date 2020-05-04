import React from 'react';

import './sidebar.css'
import { slide as Menu } from 'react-burger-menu';


export default class SideBar  extends React.Component{
  render(){
    return (
      <Menu>
        <a className="menu-item" href="/">
          Main
        </a>

        <a className="menu-item" href="/habits">
          Healthy habits
        </a>
  
        <a className="menu-item" href="/food">
          Food
        </a>
  
      </Menu>
    );
  }
  
};
