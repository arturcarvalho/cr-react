import React from "react";

import "./App.css";
import RenderNotAsync from "./components/RenderNotAsync";

const initialState = {
  showAsync: false
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  selectComponent = name => {
    this.setState(oldState => {
      return { [name]: !oldState[name] };
    });
  };
  render() {
    const { showAsync } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>React</h1>
        </header>
        <button onClick={() => this.selectComponent("showAsync")}>
          Show async
        </button>

        {showAsync && <RenderNotAsync />}
      </div>
    );
  }
}

export default App;
