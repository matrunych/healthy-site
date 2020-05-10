import React from 'react';
import {Link} from 'react-router-dom';

import './my-header.css';

export default class MyHeader extends React.Component {
    render() {
        return (
           <div className='my-header'>
              <h1 >
                 <Link className='header-name' to='/'>Your Health</Link>
               </h1>
           </div>
        );
     }
 }
