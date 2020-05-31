import React from 'react';

import './habits.css'
import AddHabit from '../addHabit';
import { connect } from 'react-redux';
import { fetchHabitslist } from '../../actions';

import Item from '../habit'


class HabitsList extends React.Component {

    state = {
        habitslist: [],
    };

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
        let items = this.state.habitslist.map((habit, i) => (<Item key={i} message={habit.title} />))
        return(
            <div className='habits-list'>
                <h2>Habits List</h2>
                <h4>{items}</h4>
                <AddHabit onAdd={(e) => this.addNewHabit(e)} ></AddHabit>
            </div>
        );
    }
}

const mapStateProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    fetchHabitslist: () => dispatch(fetchHabitslist()),
});

export default connect(mapStateProps, mapDispatchToProps)(HabitsList)

