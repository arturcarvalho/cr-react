import React from "react";

class RenderNotAsync extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, list: [] };
  }

  render() {
    return (
      <>
        <h1>Render is not Async</h1>
        <button
          onClick={() => {
            console.time("async");
            this.setState(state => {
              let list = [];
              for (let i = 0; i < 1e5; i++) list.push(i);
              return { ...state, list };
            });
            console.timeEnd("async");
            console.log(
              "The async state is not blocking this, but the rendering will block"
            );
          }}
        >
          btn
        </button>
        <button
          onClick={() =>
            this.setState(state => {
              return { ...state, counter: state.counter + 1 };
            })
          }
        >
          INC
        </button>
        <div>{this.state.counter}</div>
        <hr />
        {this.state.list.length > 0 &&
          this.state.list.map(el => <p key={el}>{el}</p>)}
      </>
    );
  }
}

export default RenderNotAsync;
