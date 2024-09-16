import css from "./ImageCard.module.css"

export default function ImageCard({value, modalId}) {

	function open(index) {
		modalId(index);
		console.log(index);
	};
	
  return (
		  <div>
		  	<img src={value.urls.small} alt={value.description} className={css.img} onClick={open(value.id)}/>
		  </div>
  )
}
