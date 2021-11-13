import React, { Dispatch, SetStateAction } from 'react';

import { Container, FieldInput, Label, LabelContainer } from './styles';

type Props = {
  label: string;
  type: 'date' | 'text' | 'email';
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
};

export function Input({ label, type, value, onChangeText }: Props) {

  function dateMask(date: string) {
    return date
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
  };

  return(
    <Container>
      <FieldInput 
        value={value}
        onChangeText={type === 'date' ? (value) => onChangeText(dateMask(value)) : onChangeText}
        keyboardType={type === 'date' ? 'numeric' : (type === 'email' ? 'email-address' : 'default')}
        spellCheck={false}
      />
      <LabelContainer>
        <Label>{ label }</Label>
      </LabelContainer>
    </Container>
  );
};