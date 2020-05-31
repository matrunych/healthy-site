import React from 'react';
import {Button, TextField } from '@material-ui/core';

import './habits.css'
import AddHabit from '../addHabit';




export default class HabitsList extends React.Component {

    isChecked(id) {
        updateList(list.id, update);
    }
 
    componentDidMount() {
        fetch('/habitslist').then(resp => {
            return resp.json();
        }).then(body => {

            this.setState({
                habitslist: body
            })
        })
    }


    updateItem(id, itemAttributes) {
        var index = this.state.habitslist.length;

        const list = this.state.habitslist.find(list => list.id === id);
        console.log("prev ", list)

        const newlist = [
            ...this.state.habitslist.slice(0, index),
            Object.assign({}, this.state.habitslist[index+2], itemAttributes),
            ...this.state.habitslist.slice(index)
        ]

        const updatedList = { ...this.state.habitslist, ...itemAttributes};
        console.log("new list", newlist[this.state.habitslist.length])


        fetch('/habitslist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newlist[this.state.habitslist.length]),
        })
            .then(e => e.json())
            .then(savedList => {
                this.setState((state) => ({
                    habitslist: newlist
                }));
                console.log("lefe", newlist)
            })


        this.setState({
            habitslist: [
                ...this.state.habitslist.slice(0, index),
                Object.assign({}, this.state.habitslist[index+2], itemAttributes),
                ...this.state.habitslist.slice(index)
            ]
        });
    }

    addNewHabit(str){
        console.log(this.state.habitslist.length)
        this.updateItem(this.state.habitslist.length, {id:this.state.habitslist.length + 1, checked:false,  title: str});

    }


    render (){
        let allTheThings = [];
        for (var i = 0; i < this.state.habitslist.length; i++) {
            allTheThings.push(<Item id={this.state.habitslist.id} message={this.state.habitslist[i].title} checked={this.state.habitslist[i].checked} />);
        }
        let items = allTheThings.map(thing => thing);

        return (

            <div className='habits-list'>
                <h2>Habits List</h2>
                <h4>{items}</h4>
                <AddHabit  onAdd={(e) => this.addNewHabit(e)} ></AddHabit>
            </div>
        );
    }
}

