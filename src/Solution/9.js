// class App extends Component {
//   state = {
//     username: 'Max'
//   }

//   usernameChangedHandler = (event) => {
//     this.setState({username: event.target.value})
//   }
  
//   render() {
//     return (
//       <div className="App">
//         <hr />
//         <UserOutput userName={this.state.username} />
//         <UserOutput userName={this.state.username} />
//         <UserOutput userName="adrean" />
//         <UserInput changed={this.usernameChangedHandler} 
//         currentName={this.state.username}/>
//       </div>
//     );
//   }
// }



// //userinput
// import React from 'react';

// const userInput = (props) => {
//     return <input type="text" 
//     onChange={props.changed} 
//     value={props.currentName}/>
// }

// export default userInput;