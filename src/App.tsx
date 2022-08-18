import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const [people, setPeople] = useState([{
  name: 'Green James',
  url: "",
  age: 25,
  note: 'Stay in the world of legend'
},
{
  name: 'Micheal Jonny',
  url: "",
  age: 31
}
])

  return (
    <div className="App">
 <h1>People Invited to my Party </h1>
    </div>
  );
}

export default App;
