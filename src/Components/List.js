import React, { Component } from 'react'

class List extends Component {
  componentDidUpdate() {
    this.props.input.current.focus()
  }
  render() {
    return (
      <div className="ListM">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Task"
              ref={this.props.input}
              value={this.props.tem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}

export default List