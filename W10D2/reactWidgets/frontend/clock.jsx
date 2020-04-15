import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    const { time } = this.state;
    return (
      <div className="clock">
        <h1>Our Clock</h1>
        <span>
          {time.getHours()}
          :
        </span>
        <span>
          {time.getMinutes()}
          :
        </span>
        <span>{time.getSeconds()}</span>
      </div>
    );
  }
}

export default Clock;
