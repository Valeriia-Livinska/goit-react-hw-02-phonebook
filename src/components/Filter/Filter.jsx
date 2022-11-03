import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter__wrapper}>
      <label>Find contacts by name</label>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
