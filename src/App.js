import './App.css'

// Replace your code here
import {Component} from 'react'

class App extends Component {
  state = {
    isInput: true,
    inputText: '',
  }

  updateInputText = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  changeToEditableButton = () => {
    this.setState(prevState => ({isInput: !prevState.isInput}))
  }

  render() {
    const {isInput, inputText} = this.state
    return (
      <div className="main-container">
        <div className="edible-container">
          <h1 className="heading">Editable text Input</h1>
          <div className="input-container">
            {isInput ? (
              <input
                type="text"
                value={inputText}
                onChange={this.updateInputText}
                className="input-element"
              />
            ) : (
              <p>{inputText}</p>
            )}
            <button
              type="button"
              className="buttonSave"
              onClick={this.changeToEditableButton}
            >
              {isInput ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
