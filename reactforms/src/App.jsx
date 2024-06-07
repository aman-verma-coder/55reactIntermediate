import {useState} from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

function App () {
  // const [firstName, setFirstName] = useState (' ');
  // const [lastName, setLastName] = useState (' ');
  // console.log (firstName);
  // console.log (lastName);
  // function firstNameChange (event) {
  //   // console.log ('Printing first name');
  //   // console.log (event.target.value);
  //   setFirstName (event.target.value);
  // }
  // function lastNameChange (event) {
  //   // console.log ('Printing last name');
  //   // console.log (event.target.value);
  //   setLastName (event.target.value);
  // }
  const [formData, setFormData] = useState ({
    firstName: '',
    lastName: '',
    email: '',
  });
  console.log (formData);
  function changeData (event) {
    setFormData (prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="App">
      <form action="">
        <input
          type="text"
          placeholder="First Name"
          onChange={changeData}
          name="firstName"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={changeData}
          name="lastName"
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          onChange={changeData}
          name="email"
        />
      </form>
    </div>
  );
}

export default App;