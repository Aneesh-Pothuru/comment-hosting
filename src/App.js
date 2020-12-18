import React from 'react'
import CS from './commentstripper.gif';
import IdInput from './components/IdInput/IdInput'
import load from './source.gif'
import ste from './stealing.gif'
import './App.css';
import song from './ml.mp3'

const initialState = {
  apiKey: '',
  videoId: '',
  loading: '',
  storeKey: false
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.audio = new Audio(song);
  }

  onKeyChange = (event) => {
    this.setState({ apiKey: event.target.value })
    console.log(this.state)
  }

  onInputChange = (event) => {
    this.setState({ videoId: event.target.value })
    console.log(this.state)
  }

  onButtonSubmit = () => {
    this.setState({ loading: true })
    this.audio.play();
    fetch('http://localhost:80/videoId/' + this.state.videoId + "/" + this.state.apiKey, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
    }).then(response => {
      console.log(response);
      this.setState({ loading: false });
      this.setState({ storeKey: true });
      this.audio.pause();
      this.audio = new Audio(song);
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <img src={CS} className="logo" alt="Comment Stripper" />
        {
          this.state.loading ?
            <div>
              <div>
                <img src={ste} className="logo" alt="Stealing" />
              </div>
              <img src={load} className="logo" alt="" />
            </div> :
            <IdInput
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
              onKeyChange={this.onKeyChange}
              storeKey={this.state.storeKey}
            />
        }
      </div>
    );
  }
}

export default App;
