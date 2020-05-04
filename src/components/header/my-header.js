import React from 'react';
import './my-header.css';

export default class MyHeader extends React.Component {
    render() {
        return (
           <div className='my-header'>
              <h1 ><a className='header-name' href="/">Your Health</a></h1>
           </div>
        );
     }
 }



// <a className="menu-item" href="/habits">
//           Healthy habits
//         </a>
