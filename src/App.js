import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import './App.css'

class App extends Component {
  state = {search: '', listArray: []}

  updateState = event => {
    this.setState({search: event.target.value})
  }

  onClickAdd = () => {
    const {search, listArray} = this.state
    if (search !== '') {
      this.setState({listArray: [...listArray, search], search: ''})
    }
  }

  render() {
    const {search, listArray} = this.state
    return (
      <div className="container">
        <div className="left-container">
          <h1 className="left-heading">Count the characters like a Boss...</h1>
          {listArray.length !== 0 && (
            <ul>
              {listArray.map(eachElement => (
                <li key={uuid()}>
                  <p>
                    {eachElement} : {eachElement.length}
                  </p>
                </li>
              ))}
            </ul>
          )}
          {listArray.length === 0 && (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt=" no user inputs"
              />
            </div>
          )}
        </div>
        <div className="right-container">
          <h1 className="right-heading">Character Counter</h1>

          <div className="row-container">
            <form>
              <input
                type="text"
                placeholder="Enter the Characters here"
                onChange={this.updateState}
                value={search}
              />
              <button type="button" onClick={this.onClickAdd}>
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default App
