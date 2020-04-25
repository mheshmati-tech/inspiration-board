import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = [
  '',
  'heart_eyes',
  'beer',
  'clap',
  'sparkling_heart',
  'heart_eyes_cat',
  'dog',
];

const NewCardForm = (props) => {
  const [card, setCard] = useState({
    text: '',
    emoji: '',
  });

  const inputChange = (event) => {
    const { name, value } = event.target;

    const newCard = { ...card };

    newCard[name] = value;
    setCard(newCard);
  };

  const submitForm = (event) => {
    event.preventDefault();

    props.addCardCallback(card);
    setCard({
      text: '',
      emoji: '',
    });
  };

  const emojiFinder = EMOJI_LIST.map((ugh_emoji, i) => {
    return (
      <option 
        key={i}
        value={ugh_emoji}>
        {emoji.getUnicode(ugh_emoji)}
      </option>
    );
  });

  return (
    <div className='new-card__form'>
      <h2 className='new-card-form__header'> Add an INSPIRATION card:</h2>
      <form className='new-card-form--form' onSubmit={submitForm}>
        <div>
          <label className='new-card-form__form-label' htmlFor='text'></label>
          <textarea
            className='new-card-form__form-textarea'
            id='text'
            name='text'
            onChange={inputChange}
            value={card.text}
          />
        </div>
        <div>
          <label 
            className='new-card-form__form-label' 
            htmlFor='emoji'>
          </label>
          <select
            className='new-card-form__form-select'
            id='emoji'
            name='emoji'
            onChange={inputChange}
            value={card.emoji}>
            {emojiFinder}
          </select>
        </div>
        <input
          className='new-card-form__form-button'
          type='submit'
          value='Add Card !!'
        />
      </form>
    </div>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;
