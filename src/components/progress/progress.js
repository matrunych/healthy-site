import React from 'react'
import './progress.css'


export default class HabitProgress extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
        title: "Water tracker",
        percentage: 0,
        increment: "+1 glass",
        reset: "Reset"
      }
      
      this.nextStep = this.nextStep.bind(this)
    }
    
    nextStep() {
      if(this.state.percentage === 100) return 
      this.setState(prevState => ({ percentage: prevState.percentage + 12.5 }))
    }
    
    render() {
      return (
        <div className = 'progress'>
          
          <h2>{this.state.title}</h2>
          <ProgressBar percentage={this.state.percentage} />
          
          <div style={{ marginTop: '20px' }}>  
          
            <button
              onClick={this.nextStep}
             >
              {this.state.increment}
            </button>  

            <button style={{width: '70px', height:'30px', marginTop: '10px',backgroundColor: 'rgba(231, 27, 27, 0.795)', marginBottom: '15px'}} onClick={() => this.setState({ percentage: 0 })}> {this.state.reset}</button>
            
          </div>   
          
        </div>
      )
    }  
  }
  
  const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
          <Filler percentage={props.percentage} />
        </div>
      )
  }
  
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
  }
  
  