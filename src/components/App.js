import React from 'react'
import Counter from './Counter'
import History from './History'

class App extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return (<div>
      <h1>Start editing to see some magic happen</h1>
      <div><Counter/></div>
      <div><History/></div>
      </div>)
  }

}


export default App;