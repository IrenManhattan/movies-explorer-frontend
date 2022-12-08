import './DelBtn.css';

function DelBtn({ onClick }) {
  return (
    <button
      type="button"
      className="movies-card__delete-btn"
      onClick={onClick}
    ></button>
  )
}

export default DelBtn;
