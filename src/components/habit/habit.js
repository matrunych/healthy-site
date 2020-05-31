import React from 'react';

export default class Item extends React.Component {
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
        console.log(this.state.checked)

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
