import React from 'react';

import { 
  AvatarContainer,
  AvatarIcon,
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
  birth: string;
  age: number;
  email: string;
  gender: 'male' | 'female';
  avatar: string;
}

type Props = {
  data: UserProps;
};



export function UserCard({ data }: Props) {
  return(
    <Container>
      <AvatarContainer>
      { !data.avatar ?
        <AvatarIcon/>
        :
        <ProfileImage source={{ uri: data.avatar }} />
      }
      </AvatarContainer>
      <Details>
        <NameContainer>
          <Name>{ data.name },</Name>
          <Label>{ data.age } {data.age === 1 ? 'ano' : 'anos'}</Label>
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