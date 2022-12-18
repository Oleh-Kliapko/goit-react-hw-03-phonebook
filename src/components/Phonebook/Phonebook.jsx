import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { theme } from '../../utils/theme';
import { Box } from '../Box';
import { Notification } from '../../utils/notification';
import { WrapperPhonebook, WrapperContacts } from './Phonebook.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';

export class Phonebook extends Component {
  static defaultPropTypes = {
    initialContacts: PropTypes.array.isRequired,
    initialFilter: PropTypes.string.isRequired,
  };

  state = {
    contacts: this.props.initialContacts,
    filter: this.props.initialFilter,
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    const currentContacts = this.state.contacts;
    if (currentContacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(currentContacts));
    }
  }

  addContacts = ({ id, name, number }) => {
    const addedName = name;

    for (const contact of this.state.contacts) {
      if (addedName === contact.name) {
        Notification(addedName);
        return;
      }
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id, name, number }],
    }));
  };

  changeFilter = evt => this.setState({ filter: evt.currentTarget.value });

  removeContact = contactID => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactID),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );

    return (
      <WrapperPhonebook>
        <Box pt={4} pb={2} m={0} color={theme.colors.heading} as="h1">
          Phonebook
        </Box>
        <ContactForm dataContacts={this.addContacts} />
        <Box m={0} mb={3} color={theme.colors.heading} as="h1">
          Contacts
        </Box>
        <Filter value={filter} changeFilter={this.changeFilter} />
        <WrapperContacts>
          <ContactsList
            contacts={filteredContacts}
            removeContact={this.removeContact}
          />
        </WrapperContacts>
      </WrapperPhonebook>
    );
  }
}
