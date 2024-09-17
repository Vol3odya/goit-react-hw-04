
import toast, { Toaster } from 'react-hot-toast';

import css from "./SearchBar.module.css"

export default function SearchBar({onSabmit}) {
  
  //const [values, setValues] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const res = event.target.elements.text.value;
    if (res.trim()==='') {
      toast('Enter the correct value!');
      event.target.elements.text.value = '';
      return;
    }
    onSabmit(res);
    event.target.elements.text.value = '';
  };

 // const handleChange = (input) => { 
   // setValues(input.target.value);
 // };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name='text'
          //autocomplete="off"
          //autofocus
          placeholder="Search images and photos"
          //value={values}
          //onChange={handleChange}
          className={css.input}
        />
        <button type="submit" className={css.button}>Search</button>
      </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </header>
  )
}

