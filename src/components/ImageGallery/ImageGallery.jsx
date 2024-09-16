import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

export default function ImageGallery({ photo, modalId }) {


  return (
    <ul className={css.spis}>
      {photo.map((value) => {
        return (
          <li key={value.id} className={css.cart} onClick={open(value.id)}>
            <ImageCard value={value} modalId={modalId}/>  
          </li>);
      })}
	    
    </ul>
  )
}
