import css from './Label.module.css';

const Label = ({ labelName, children }) => {
  return (
    <label className={css.label}>
      {labelName}
      {children}
    </label>
  );
};

export default Label;
