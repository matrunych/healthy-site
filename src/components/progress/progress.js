import React from 'react'
import './progress.css'


export default class HabitProgress extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
        percentage: 0
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
          
          <h2> Water Tracker (8 glasses norm)</h2>
          <ProgressBar percentage={this.state.percentage} />
          
          <div style={{ marginTop: '20px' }}>  
          
            <button

              onClick={this.nextStep}
             >
              +1 glass 
            </button>  

            <button style={{marginTop: '10px',backgroundColor: 'rgba(231, 27, 27, 0.795)', marginBottom: '15px'}} onClick={() => this.setState({ percentage: 0 })}>Reset</button>
            
          </div>   
          
          {/* <div style={{marginTop: '10px', color: 'red', marginBottom: '15px'}} onClick={() => this.setState({ percentage: 0 })}>
            Reset
          </div> */}
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
  
  