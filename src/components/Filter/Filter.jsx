import PropTypes from 'prop-types';
import s from "./Filter.module.css"

function Filter({value,onChange}) {
    return (
        <label className={s.filter__label}>  Find contacts by name...
            <input
                className={s.filter__input}
                name="filter"
                value={value}
                type="text"
                onChange={onChange}
            />
        </label>
    );
}

Filter.propTypes= {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Filter;