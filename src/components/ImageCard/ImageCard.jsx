import css from "./ImageCard.module.css"

export default function ImageCard({value}) {

  return (
		  <div>
		  	<img id={value.id} src={value.urls.small} alt={value.description} className={css.img} />
		  </div>
  )
}
