import React, { Component } from 'react'

import './addHabit.css'

export default class AddHabit extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          title: ''
        }
    
        this.todoRef = React.createRef();
      }
    
      handleSubmit(e) {
        e.preventDefault();

        console.log(e);
      
        this.props.onAdd(this.state.title);
    
        this.setState({ title: '' });
        this.todoRef.current.focus();
      }
    
      handleChange(e) {
        this.setState({
          title: e.target.value
        });
      }


    render(){
        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input className="input-field" ref={this.todoRef} placeholder="Enter new habit" value={this.state.title} onChange={(e) => this.handleChange(e)}></input>
                    <input className="button" type="submit" value="+"></input>
                </form>
            </div>
        )
    }
}