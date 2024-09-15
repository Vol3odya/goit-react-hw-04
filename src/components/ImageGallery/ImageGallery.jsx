import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

export default function ImageGallery({ photo, modalId }) {
  function open(index) {
    modalId(index.target.id);
  };

  return (
    <ul className={css.spis}>
      {photo.map((value) => {
        return (
          <li key={value.id} className={css.cart} onClick={open}>
            <ImageCard value={value} />  
          </li>);
      })}
	    
    </ul>
  )
}
