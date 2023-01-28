// with function 
import React, { useState } from 'react';
import Compteur from './Compteur';

const App = () => {
  const [isMonter, setIsMonter] = useState(true);

  const monter = () => {
    setIsMonter(true);
  }

  const demonter = () => {
    setIsMonter(false);
  }

  return (
    <div>
      <button onClick={monter} disabled={isMonter}>Monter</button>
      <button onClick={demonter} disabled={!isMonter}>Demonter</button>
      {isMonter ? <Compteur /> : null}
    </div>
  );
}

export default App;





// with class 

// import React from 'react';
// import Compteur from './Compteur';
// export default class App extends React.Component{
//     constructor(props) {
// super(props)
// this.state={isMonter:true}
//  this.monter=()=>{this.setState({isMonter:true})} 
//  this.demonter=()=>{this.setState({isMonter:false})}
// }
// render(){
//       return(
//         <div >
// <button onClick={this.monter} disabled={this.state.isMonter}>Monter</button>
// <button onClick={this.demonter} disabled={!this.state.isMonter}>Demonter</button> { this.state.isMonter? <Compteur/>:null}
// </div> )
// } } 