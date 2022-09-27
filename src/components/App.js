import React, { Component } from 'react'
import Overview from './Overview'

export default class App extends Component {
  constructor() {
    
    super();

    this.state = {
      taskList: []
    }

    this.updateTaskList = this.updateTaskList.bind(this);
  }
  updateTaskList(e) {
    e.preventDefault();
    let inputValue = document.getElementById('task').value;
    this.setState({
      taskList: [...this.state.taskList, inputValue]
    }, () => {console.log(this.state.taskList)})
  }
  
  render() {
    return (
      <div className="app">
        <form action="#" onSubmit={this.updateTaskList}>
          <p>
            <label htmlFor="task">Enter Task!</label>
            <input type="text" name='task' id='task' />
          </p>
          <button type="submit" >ADD</button>
        </form>
        <Overview  list = {this.state.taskList}/>
      </div>
    )
  }
}

