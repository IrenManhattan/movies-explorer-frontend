const SHORT_FILM = 40;
const CARDS_URL = 'https://api.nomoreparties.co/';
export const MOBILE_SIZE = 480;
export const TABLET_SIZE = 768;
export const DESKTOP_CARD_COUNT = 12;
export const TABLET_CARD_COUNT = 8;
export const MOBILE_CARD_COUNT = 5;
export const DESKTOP_ADDITIONAL_CARD = 3;
export const TABLET_MOBILE_ADDITIONAL_CARD = 2;

export function findShortMovies(movies) {
  return movies.filter((item) => item.duration < SHORT_FILM)
}

export function searchAndFilterMovies(movies, keyWord, checkBoxStatus) {
  const queryMovies = Array.isArray(movies)
    ? movies.filter((item) => {
      return (
        item.nameRU.toLowerCase().indexOf(keyWord.toLowerCase()) > -1
      )
    })
    : []
  if (checkBoxStatus) {
    return findShortMovies(queryMovies)
  }
  return queryMovies
}

export function getTimeFromMin(min) {
  const hours = Math.trunc(min / 60)
  const minutes = min % 60
  return `${hours}ч ${minutes}м`
}

export function changeMovies(movies) {
  movies.forEach((movie) => {
    movie.thumbnail = `${CARDS_URL}${movie.image.formats.thumbnail.url}`
    movie.image = `${CARDS_URL}${movie.image.url}`
  })
}
