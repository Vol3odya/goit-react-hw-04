import { useState, useEffect } from 'react'



import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import {fetchPhoto} from "../../http/http"
import css from "./App.module.css"
import ImageModal from '../ImageModal/ImageModal'




export default function App() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photo, setPhoto] = useState([]);

  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(999);
  const [modal, setModal] = useState("");


  useEffect(() => {
    if (topic === "") {
      return;
    }

    async function getPhoto() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchPhoto(topic, page);
        setPhoto((prevState) => [...prevState, ...res.photo]);
        setTotalPages(res.totalPages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getPhoto();
  }, [page, topic]);

 

  function search(text) {
    setPhoto([]);
    setTopic(text);
    setPage(1);
  };

  function more() {
    setPage(page+1);
  };

  function modalOn(id) {
    setModal(id);
  };
  
  function modalOff() { 
    setModal('');
  };

  
  return (
    <div className={css.container}>
      <SearchBar onSabmit={search} />
      <ImageGallery photo={photo} modalId={modalOn} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {totalPages > page && photo.length > 0 && !loading && <LoadMoreBtn moreImages={more} />}
      {modal && <ImageModal isOpen={modal} value={photo[photo.findIndex(el => el.id === modal)]} modalOff={modalOff} />}
    </div>
  )
}
