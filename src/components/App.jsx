import css from './App.module.css';
import Buttons from './Buttons/Buttons';

export const App = () => {
  return (
    <div className={css.App}>
      <Buttons
        buttons={[{good:0},{neural:0},{bad:0}]}
      />
    </div>
  );
};
