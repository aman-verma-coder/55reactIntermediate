import {useState} from 'react';
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
    comments: '',
    isVisible: false,
    mode: '',
    favCar: '',
  });
  // console.log (formData);
  function changeData (event) {
    setFormData (prevFormData => {
      const {name, value, checked, type} = event.target;
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }
  function submitBtn (event) {
    event.preventDefault ();
    console.log (formData);
  }

  return (
    <div className="App">
      <form action="">
        <input
          type="text"
          placeholder="First Name"
          onChange={changeData}
          name="firstName"
          value={formData.firstName}
        />
        <br /><br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={changeData}
          name="lastName"
          value={formData.lastName}
        />
        <br /><br />
        <input
          type="email"
          placeholder="Enter Email"
          onChange={changeData}
          name="email"
          value={formData.email}
        />
        <br /><br />
        <textarea
          placeholder="Enter your comments here"
          onChange={changeData}
          name="comments"
          value={formData.comments}
        />
        <br /><br />
        <input
          type="checkbox"
          name="isVisible"
          onChange={changeData}
          checked={formData.isVisible} //Instead of value we use checked for checkbox
          id="isVisible"
        />
        <label htmlFor="isVisible">Am I Visible Mitro?</label>
        <br /><br />
        <input
          type="radio"
          name="mode"
          onChange={changeData}
          value={'Online Mode'}
          id="Online-Mode"
          checked={formData.mode === 'Online Mode'} //For Radio button we use checked instead of value
        />
        <label htmlFor="Online-Mode">Online Mode</label>
        <input
          type="radio"
          name="mode"
          onChange={changeData}
          value={'Offline Mode'}
          id="Offline-Mode"
          checked={formData.mode === 'Offline Mode'} //For Radio button we use checked instead of value
        />
        <label htmlFor="Offline-Mode">Offline Mode</label>
        <br /><br />
        <label htmlFor="favCar">Your Favorite Car</label>
        <select
          name="favCar"
          id="favCar"
          onChange={changeData}
          value={formData.favCar}
        >
          <option value="Scorpio">Scorpio</option>
          <option value="Thar">Thar</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Nexon">Nexon</option>
          <option value="Defender">Defender</option>
        </select>
        <br /><br />
        <button onClick={submitBtn}>Submit</button>
      </form>
    </div>
  );
}

export default App;
