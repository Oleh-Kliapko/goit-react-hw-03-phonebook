import React from 'react';
import PropTypes from 'prop-types';
import { Item, DeleteButton } from './ContactsList.styled';
import { nanoid } from 'nanoid';

export const ContactsList = ({ contacts, removeContact }) => {
  return contacts.map(({ id, name, number }) => (
    <Item key={id ? id : nanoid(4)}>
      {name}: {number}
      <DeleteButton type="button" onClick={() => removeContact(id)}>
        Delete
      </DeleteButton>
    </Item>
  ));
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func,
};
