import PropTypes from "prop-types"
import s from "./Contact.module.css"

function Contact({ handelContactFilter,deleteContact }) {
    return (
        <ul  className={s.list}>
            
        {handelContactFilter.map(({ name, number, id }) => {
            return (
                <li className={s.item} key={id}>
                    {name}: {number}
                    <button
                        className={s.btn}
                        type="button"
                        id={id}
                        onClick={() => deleteContact(id)}>
                        Delete
                    </button>
                </li>
        )})}
        </ul>
    )
}

Contact.propTypes = {
    handelContactFilter: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
}

export default Contact;