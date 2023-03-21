/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/


import React, {useState} from "react";

function Playground(props){

  const [count, setCount] = useState(0)
  const [spinnerOn, setSpinnerOn]=useState(false)
  const {gesture, setGesture} =useState('scissors')


  // setCount(count +500)

  if(spinnerOn){
    return(
      <div className="container">
        <h3>The spinner is {spinnerOn ? "On": "Off"}</h3>
        <button onClick={evt => setSpinnerOn(false)}>turn spinner off</button>
      </div>
    )
  }



  return(
    <div>
      <p>{count}</p>
    <button onClick ={()=> setCount(count + 1)}>Incrementing or adding by one
    </button>
    <button onClick={()=> setCount(count - 1)}>Subtracting 1</button>
    
    
    
    <h3>the spinner is {spinnerOn? "On" : "Off"}</h3>
    <button onClick={()=> setSpinnerOn(spinnerOn)}>toggle spinner</button>



    <h3>The current gesture is {gesture}</h3>
    <button onClick={()=> setGesture('scissors')}>pick scissors</button>
    <button onClick={()=> setGesture('rock')}> pick rock</button>
    <button onClick={()=> setGesture('paper')}> pick paper</button>
    
    
    </div>



  )
    


  }

export default Playground