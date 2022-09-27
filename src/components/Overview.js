import React, { Component } from 'react'

export default class Overview extends Component {
  constructor(props) {

    super(props);

  }
  render() {
    return (
      <div>
        <ul>{this.props.list.map((task, i) => {
          return (

            <li key={i}>{`Task ${i + 1}: ${task}`}</li>

          );
        })}
        </ul>
      </div>
    )
  }
}
