import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
// import './CourseInput.css';
import styles from './CourseInput.module.css';


const FormControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid label {
  color: red;
}

&.invalid input {
  border-color: red;
}
`


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>

      {/* And then we can access the props in the tagged literal */}
      {/* <FormControl invalid={!isValid}></FormControl> */}

      {/* <FormControl className={!isValid && 'invalid'}></FormControl> */}

      {/* Add CSS classes dinamically with string literal */}
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}> */}

      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
        <input style={{ borderColor: !isValid ? 'red' : 'black' }} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
