import {useState} from 'react'

import css from "./SearchBar.module.css"

export default function SearchBar({onSabmit}) {
  
  const [values, setValues] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
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
    </header>
  )
}

