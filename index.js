import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Hello() {
  return <h1>Hello world.</h1>;
}

function Myname() {
  return <p>My name is Rishom.</p>;
}

class Mister extends React.Component {
  render() {
    return <h1>Hola!!</h1>;
  }
}

function Diver(props) {
  return <div>
    <p>{props.name}</p>
    <p>{props.age}</p>
  </div>
}

const el = <Hello />;
const newEl = <Myname />;
const megaEl = <Mister />;
const monsterEl = <Diver name="Roger" age="30"/>

ReactDOM.render(el, document.getElementById('root'));
ReactDOM.render(newEl, document.getElementById('test'));
ReactDOM.render(megaEl, document.getElementById('root'));
ReactDOM.render(monsterEl, document.getElementById("diver"))
