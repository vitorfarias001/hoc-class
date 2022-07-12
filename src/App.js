import React, { useEffect } from 'react';
import UserList from './components/UserList';
import './App.css';
import Loading from './components/Loading';


function App() {

  const [users, setUsers] = React.useState([])

  useEffect(() => {
    setTimeout(() => {
      fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(users => setUsers(users))
    }, 1000);
  }, []);

  
// Caso essa lista de usuarios for = 0 eu reinderizaria o loading
// Caso não eu reinderizaria o usuario
  return (
    <>
    <UserList users={users}/>
    </>
  );
}

export default App;
