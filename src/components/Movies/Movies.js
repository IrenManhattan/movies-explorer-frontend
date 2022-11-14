import React, { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';
import moviesCardList from '../../utils/cards';
import Preloader from '../Preloader/Preloader';

function Movies() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(!isLoading), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="movies">
      <SearchForm />
      <div className='movies__border'></div>
      {!isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          moviesCardList={moviesCardList}
          isSaved={false}
        />
      )}
      <MoreButton />
    </section>
  )
}

export default Movies;
