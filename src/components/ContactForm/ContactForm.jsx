import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, Input, Button, Label } from './ContactForm.styled';
import { patternName, patternNumber } from '../../utils/patterns';
import { messageForName, messageForNumber } from '../../utils/messages';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

const INITIAL_STATE = { name: '', number: '' };

export class ContactForm extends Component {
  static defaultPropTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };

  state = INITIAL_STATE;

  handleChangeInput = evt => {
    const targetInput = evt.currentTarget;
    this.setState({ [targetInput.name]: targetInput.value });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    this.props.dataContacts({ ...this.state });
    this.resetForm();
  };

  resetForm = () => this.setState(INITIAL_STATE);

  render() {
    const { name, number } = this.state;
    return (
      <FormContainer onSubmit={this.handleFormSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern={patternName}
            title={messageForName}
            required
            value={name}
            onChange={this.handleChangeInput}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern={patternNumber}
            title={messageForNumber}
            required
            value={number}
            onChange={this.handleChangeInput}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    );
  }
}
