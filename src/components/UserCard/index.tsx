import React from 'react';

import { 
  Container, 
  Details, 
  GenderContainer, 
  GenderIcon, 
  Label, 
  MailContainer, 
  MailIcon, 
  Name, 
  NameContainer, 
  ProfileImage 
} from './styles';

export type UserProps = {
  id: string;
  name: string;
  age: number;
  email: string;
  gender: 'male' | 'female';
  image: string;
}

type Props = {
  data: UserProps;
};



export function UserCard({ data }: Props) {
  return(
    <Container>
      <ProfileImage source={{ uri: data.image }} />
      <Details>
        <NameContainer>
          <Name>{ data.name },</Name>
          <Label>{ data.age } anos</Label>
        </NameContainer>
        <GenderContainer>
          <GenderIcon name={data.gender === 'male' ? 'gender-male' : 'gender-female'} />
          <Label>{ data.gender === 'male' ? 'Masculino' : 'Feminino'}</Label>
        </GenderContainer>
        <MailContainer>
          <MailIcon />
          <Label>{ data.email }</Label>
        </MailContainer>  
      </Details>
    </Container>
  );
};