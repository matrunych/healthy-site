import React from 'react';
import {Button} from '@material-ui/core';

import './habits.css'

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


export default class HabitsList extends React.Component {

  constructor (props){
    super ();
    this.state = {
      habitslist: [
          {
            title: "Drink more water"
          },
          {
            title: "No coffe"
          },
          {
            title: "Morning workout"
          },
          {
            title: "More time outside"
          },
      ]
      
    };

  }
  render (){
    let allTheThings = [];
    for (var i = 0; i < this.state.habitslist.length; i++) { 
        allTheThings.push(<Item message={this.state.habitslist[i].title} />);
      }
    // let allTheThings = [<Item message={this.props.mes1} />, <Item message={this.props.mes2} />, 
    //   <Item message={this.state.mes1} />, <Item message={this.props.mes4} />]
    let items = allTheThings.map(thing => thing);

    return (

      <div className='habits-list'>
        
        <h2>Habits List</h2>
        
        <h4>{items}</h4>
        <Button className='button1' variant="contained" color="primary">
          Add habit
        </Button>
        

      </div>
    );
  }
}

