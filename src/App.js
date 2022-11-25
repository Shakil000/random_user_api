import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import User from './component/User/User';

function App() {
const [users,setUsers] = useState([]);
const [members, setMembers] = useState([]);
useEffect( () => {
fetch('https://randomuser.me/api/?results=15')
.then(res => res.json())
.then(data => setUsers(data.results))
  },[])
const addMembers = (name) => {
setMembers([...members,name])
}

  return (
    <div>
      <h1> Team Builder</h1>
      <ul>
        {
          members.map(menubar => <li>{menubar}</li>)
        }
      </ul>
      {
        users.map(user =><User addMembers={addMembers} user={user}></User>)
      }
      
    </div>
  );
}

export default App;
