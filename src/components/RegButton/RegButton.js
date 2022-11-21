import './RegButton.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function RegButton() {
  return (
    <Link className="reg-button__url" to="/signup">
      <Button buttonText="Регистрация" />
    </Link>
  )
}

export default RegButton;
