import React from 'react';

export default class Clock extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
    	date: new Date()
    }
  }
  componentWillMount() {
  	this.timerID = setInterval(() => this.tick(),1000);
  }
  componentWillUnmount() {
  	clearInterval(this.timerID);
  }
  tick = () => {
  	this.setState({
  		date: new Date()
  	})
  }

  render() {
    return (
      <div>
      	<p>{this.state.date.toLocaleTimeString("en-GB")}</p>
      </div>
    );
  }
}
