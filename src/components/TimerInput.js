import React from 'react';
import ReactDOM from 'react-dom';

class TimerInput extends React.Component {
  render() {
    return (
      <div>
        <h3>Input your desired time</h3>
        <input type="number" required />
      </div>
    );
  }
}

export default TimerInput;