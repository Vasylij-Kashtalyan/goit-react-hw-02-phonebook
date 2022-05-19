import React, { Component } from "react";
import { nanoid } from "nanoid";
import Notiflix from "notiflix";
import Container from "./components/Container";
import Section from "./components/Section";
import Contact from "./components/Contact";
import Filter from "./components/Filter";
import Form from "./components/Form";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handlerSubmitForm = ({ name, number }) => {
    const { contacts } = this.state;

    if (
      contacts
        .map((contact) => contact.name.toLowerCase())
        .includes(name.toLowerCase())
    ) {
      return Notiflix.Notify.warning(`${name} is already in contacts`);
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
    return Notiflix.Notify.success(`${name} is adde in contacts`);
  };

  handleFilter = (eve) => {
    const { name, value } = eve.currentTarget;
    this.setState({ [name]: value });
  };

  handelContactFilter = (eve) => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <Container>
        <Section title="Phonebok">
          <Form onSubmit={this.handlerSubmitForm} />
        </Section>

        <Filter value={filter} onChange={this.handleFilter} />

        <Section title="Contact">
          <Contact
            handelContactFilter={this.handelContactFilter()}
            deleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
