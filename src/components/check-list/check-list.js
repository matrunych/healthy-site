import React from 'react';
import './check-list.css'

class Item extends React.Component {
  constructor (props){
    super ();

    this.state = {
      checked: false
    };

    this.handleClick = this.handleClick.bind(this);    
  }
  handleClick (e){
    this.setState({
      checked: !this.state.checked
    });

  }
  render (){
    let text = this.state.checked ? <strike>{this.props.message}</strike> : this.props.message;
    return (
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={this.handleClick} />&nbsp;{text}
            <hr />
          </div>
        </div>
    );
  }
}


export default class AppContainer extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    let allTheThings = [<Item message={this.props.mes1} />, <Item message={this.props.mes2} />, 
      <Item message={this.props.mes3} />, <Item message={this.props.mes4} />]
    let items = allTheThings.map(thing => thing);

    return (
      <div className='check-list'>
        <h2>{this.props.title}</h2>
        <h4>{items}</h4>
        
                {/* <hr />
        <small>&copy; {new Date().getFullYear()}</small> */}

      </div>
    );
  }
}

