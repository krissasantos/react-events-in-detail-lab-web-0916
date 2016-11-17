// const React = require('react');

// class CoordinatesButton extends React.Component{
//   constructor(props){

//     onReceiveCoordinates = props.onReceiveCoordinates

//   }


//   onReceiveCoordinates(){
//     var event = window.event
//     var x_pos = event.clientX
//     var y_pos = event.clientY
//     debugger
//     coordinates = [x_pos,y_pos]
//     return coordinates
//   }

//   render(){
//     return(
//       <button onClick = {this.mouseFunction} onReceiveCoordinates = {R}/>
//       )
//   }
// }

// module.exports = CoordinatesButton;

const React = require('react');

class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
      debugger
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coords</button>
    );
  }
}

module.exports = CoordinatesButton;