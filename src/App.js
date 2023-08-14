import logo from './logo.svg';
import './App.css';
import UserList from './Components/UserList/UserList';
import AddUser from './Components/AddUser/AddUser';
import Prompt from './Components/AddUser/Prompt/Prompt';
import React,{useState} from 'react';
function App() {
  const [details,setDetails]=useState('');
  let data ="";
  const saveUser=(user)=>{
    console.log(user);
    data = user;
    setDetails((prev)=>{
      return[
        ...prev,
        user
      ]
    })
  }
  return (
    <>
      <AddUser onAddUser ={saveUser}/>
      {details ==="" && <p>No data found</p>}
      {details !== "" && <UserList items ={details}/>}
    </>
  );
}

export default App;
