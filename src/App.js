import React from 'react';
import './style.css';
//what is App >>It's react component
export function App1() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>It is {new Date().toLocaleTimeString()}</p>
    </div>
  );
}

export class App2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>It is {new Date().toLocaleTimeString()}</p>
    
      </div>
    );
  }
}
export function App3(props) {
  
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{props.name}</p>
    </div>
  );
}
export class App4 extends React.Component {
  render(){
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{this.props.city}</p>
      <MyButton/>
    </div>
  );
}
}
  function MyButton(){
    return(<button>My Button</button>);
  }