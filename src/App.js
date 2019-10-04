import React, { Component } from 'react'
import List from './Components/List.js'
import Items from './Components/Items.js'

class App extends Component {
  input = React.createRef()
  constructor() {
    super()
    this.state = {
      items: [],
      tem: {
        text: '',
        key: '',
      },
    }
  }
  deleteItem = key => {
    const filt = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filt,
    })
  }

  handleInput = e => {
    const Text = e.target.value
    const tem = { text: Text, key: Date.now() }
    this.setState({
      tem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const add = this.state.tem
    if (add.text !== '') {
      const items = [...this.state.items, add]
      this.setState({
        items: items,
        tem: { text: '', key: '' },
      })
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className="head">Todo List</h1>
        <List
          addItem={this.addItem}
          input={this.input}
          handleInput={this.handleInput}
          tem={this.state.tem}
        />
        <Items entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
}

export default App
