import React, { Component } from 'react'

export default class ClassComponent extends Component {

    constructor(props){
        super(props);
        this.state = {count: 0}
        console.log("1️⃣ Constructor: Initial Setup")
    }

    componentDidMount(){
        console.log('3️⃣ ComponentDidmount : First time the Component added to Dom ')
    }

    componentDidUpdate(pervProps, prevState){
        console.log("4️⃣ ComponentDidUpdate: State/Props Change ", prevState)
    }

    componentWillUnmount(){
        console.log('5️⃣ ComponentWillUnmount: Component remove from DOM')
    }

  render() {
    console.log("2️⃣ Render: UI Render")
    return (
      <div>
      <h2>Count: {this.state.count}</h2>
      <button onClick={()=>{
        this.setState({count: this.state.count + 1})
      }}>Count</button>
      </div>
    )
  }
}
