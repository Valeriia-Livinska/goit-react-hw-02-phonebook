import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={css.contact__item}>
        {name}: {number}
        <button
          type="button"
          className={css.btn__delete}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
