import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';

//internal components
import List from './components/List'
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {

const [people, setPeople] = useState<IState["people"]>([
  {
    name: "LeBron James",
    url: "https://www.sophia-vereeniging.nl/app/uploads/2021/03/hamster-in-groen-bakje-scaled-e1615194439139-1200x540-c-default.jpg",
    age: 36,
    note: "legend in the team"
  }
])


  return (
    <div className="App">
 <h1>People Invited to my Party </h1>
 <List people={people}/>
 <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
