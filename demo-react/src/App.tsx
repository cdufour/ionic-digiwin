import React from 'react';
import logo from './logo.svg';
import './App.css';
import Double from './components/double';
import Counter from './components/counter';

interface Demo4Props {
  title: string;
}

function Demo1() {
  return (
    <div>Je suis le composant fonctionnel Demo1</div>
  )
}

function Demo2() {
  let title: string = "Démo 2";
  return (
    <div>Je suis le composant fonctionnel { title }</div>
  )
}

function Demo3() {
  
  let template1 = <div>Template1</div>;
  let template2 = <div>Template2</div>;
  let condition = false;

  if (condition) {
    return template1;
  } else {
    return template2;
  }
  
}

function Demo4(props: Demo4Props) {
  return (
    <div>{ props.title }</div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Demo1 />
        <Demo2 />
        <Demo3 />
        <Demo4 title="Démo 4" />
        <Demo4 title="Démo 4 again" />
        <Double num={5} />
        <Double num={10} />
        <Counter />
      </header>
    </div>
  );
}

export default App;
