import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

import css from "./SearchBar.module.css"

export default function SearchBar({onSabmit}) {
  
  const [values, setValues] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.trim()==='') {
      toast('Enter the correct value!');
      setValues('');
      return;
    }
    onSabmit(values);
    setValues('');
  };

  const handleChange = (input) => { 
    setValues(input.target.value);
  };

  return (
    <header>
      <form className={css.form}>
        <input
          type="text"
          //autocomplete="off"
          //autofocus
          placeholder="Search images and photos"
          value={values}
          onChange={handleChange}
          className={css.input}
        />
        <button type="submit" onClick={handleSubmit} className={css.button}>Search</button>
      </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </header>
  )
}

