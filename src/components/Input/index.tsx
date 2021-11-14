import React from 'react';
import { Controller, Control } from 'react-hook-form';

import { Container, Error, FieldInput, Label, LabelContainer } from './styles';

import { FormDataProps } from '../../pages/CreateUser';

type Props = {
  control: Control<FormDataProps>;
  label: string;
  name: 'birth' | 'name' | 'email';
  error: string | undefined;
};

export function Input({ label, control, name, error }: Props) {

  function dateMask(date: string) {
    return date
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
  };

  return(
    <Container>
      <Controller 
        control={control}
        render={({  field:  { onChange, value }}) => (
         <FieldInput 
            value={value}
            onChangeText={name === 'birth' ? (value) => onChange(dateMask(value)) : onChange}
            keyboardType={name === 'birth' ? 'numeric' : (name === 'email' ? 'email-address' : 'default')}
            autoCapitalize={name === 'email' ? 'none' : 'sentences'}
            spellCheck={false}
          />
        )}
        name={name}
      />
      { error && <Error> { error } </Error> }
      <LabelContainer>
        <Label>{ label }</Label>
      </LabelContainer>
    </Container>
  );
};