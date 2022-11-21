import React from 'react';
import './ChoiceButton.css';

function ChoiceButton({ onClick, isSavedMovie }) {
  return (
    <button
      type="button"
      className={
        !isSavedMovie
          ? 'movies-card__choice-button'
          : 'movies-card__choice-button movies-card__choice-button_marked'
      }
      onClick={onClick}
    ></button>
  )
}

export default ChoiceButton;

