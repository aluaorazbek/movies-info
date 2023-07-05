'use client';

import React from 'react';
import { StyledInput } from '../styles/SerachInput.styled';


type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const TIME = 300; 

const SearchInput = ({ setQuery }: Props) => {
  const [text, setText] = React.useState('');
  const timer = React.useRef<NodeJS.Timeout>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    clearTimeout(timer.current);

    setText(value);

    timer.current = setTimeout(() => {
      setQuery(value);
    }, TIME);
  };

  return (
    <>
     <StyledInput
      type='text'
      placeholder='Search Movie'
      value={text}
      onChange={handleInput}
    />

    </>
  );
};

export default SearchInput;
