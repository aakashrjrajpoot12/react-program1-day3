import React, { Component } from 'react';
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

export class App2 extends React {
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

export class App4 extends React {
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>{this.props.city}</p>
        <MyButton />
      </div>
     );
   }
 }
function MyButton() {
  return <button>My Button</button>;
}

export function App5(props) {
  const emps = [
    { name: 'aakash', id: 1 },
    { name: 'sam', id: 2 },
    { name: 'abhi', id: 3 },
  ];
  const elem = emps.map((emp) => (
    <li key={emps.id}>
      {emp.name}
      {emp.id}
    </li>
  ));
  console.log(typeof elem);
  return <ul>{elem}</ul>;

  /*
    const names=[props.name];
   //const names=[...props.name]; 
   const elem=names.map(name=>
      <li>
        {name}
        </li>);
        return(<ul>
          {elem}</ul>
          );
    */
}

export function App6(props) {
  if (props.name != '') {
    return <p>Hi,{props.name}</p>;
  }
  return <p>Hi,Stranger</p>;
}

export default class App7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), number: 10 };
  }
  changeState() {
    this.setState({ date: new Date() });
  }

  render() {
    this.changeState.number = 20;

    return (
      <div>
        <h2>Clock</h2>
        <p>It is {this.state.date.toLocaleTimeString()}now</p>
        <p>{this.changeState()} </p>
        <MyButton1 data={this.state.date} />
      </div>
    );
  }
}
class MyButton1 extends Component {
  render() {
    return <input type="text" value={this.props.data} />;
  }
  
}
