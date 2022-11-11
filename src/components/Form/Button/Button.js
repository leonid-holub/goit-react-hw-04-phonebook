import css from './Button.module.css';

const Button = ({ type, textContent, onClick }) => {
  return (
    <button className={css.button} type={type} onClick={onClick}>
      {textContent}
    </button>
  );
};

export default Button;
