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


  export function App5(props) {
/*
    const emps=[
      {name:"aakash",id=1},{name:"sam",id=2},{name:"abhi",id=3}
      ];
    const elem=emps.map(emp=>
      <li  key={emps.id}>
        {emp.name}
        </li>);
        return(
        <ul>
          {elem}
          </ul>
          );
  */  
    const names=[props.name];
   //const names=[...props.name]; 
   const elem=names.map(name=>
      <li>
        {name}
        </li>);
        return(<ul>
          {elem}</ul>
          );
        


        }


