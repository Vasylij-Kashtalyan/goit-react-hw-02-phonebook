import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Form.module.css"

const INITIAL_STATE = {
    name: '',
    number: '',
}

class Form extends Component {
    state = { ...INITIAL_STATE }

    handlerChande = eve => {
        const { name, value } = eve.currentTarget;
        this.setState({ [name]: value });
    }
    
    handlerSubmit = eve => {
        eve.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }
    
    reset = () => {
        this.setState({ ...INITIAL_STATE });
    }

    render() {
        return (
          <form className={s.form} onSubmit={this.handlerSubmit}>
            <label className={s.form__label}>Name
              <input
                className={s.form__input}
                value={this.state.name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handlerChande}
              />
            </label>
            <label className={s.form__label}>Number 
              <input
                className={s.form__input}
                value={this.state.number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handlerChande}
              />
            </label>
            <button className={s.form__button} type='submit'>Add contact</button>
          </form>
          
        )
    }
}
Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Form;