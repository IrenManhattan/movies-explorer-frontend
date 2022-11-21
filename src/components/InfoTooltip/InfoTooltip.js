import './InfoTooltip.css';
import React from 'react';
import { useEffect } from 'react';
import fail from '../../images/fail.svg';
import success from '../../images/success.svg';

function InfoTooltip({ onClose, isSuccess, errorMessage, isInfoTooltipOpen }) {
  useEffect(() => {
    if (!isInfoTooltipOpen) return
    const closeByEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
  }, [isInfoTooltipOpen, onClose])

  const closeByOverlay = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={isInfoTooltipOpen ? 'popup popup_opened' : 'popup'}
      onClick={closeByOverlay}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        />
        <div className="popup__form-container">
          <img
            className="popup__image"
            src={isSuccess ? success : fail}
            alt={isSuccess ? 'Иконка Успешно' : 'Иконка Ошибка'}
          />
          {isSuccess ? (
            <p className="popup__message">Успешно</p>
          ) : (
            <p className="popup__message">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default InfoTooltip;
