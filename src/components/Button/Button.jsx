import css from './Button.module.css';

export default function Button({ onCLick }) {
  return (
    <button type="button" className={css.Button} onClick={onCLick}>
      Load more
    </button>
  );
}
