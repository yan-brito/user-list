import React from 'react';

import { 
  AddButton, 
  AddIcon, 
  Container, 
  Content, 
  Footer, 
  Header, 
  HeaderShadow, 
  HeaderTitle, 
  List,
  Separator
} from './styles';

import { UserCard, UserProps } from '../../components/UserCard';

export function UserList() {

  const data: UserProps[] = [
    {
      id: '1',
      name: 'John Joe',
      age: 21,
      email: 'jhon.joe@mail.com',
      gender: 'male',
      image: 'https://randomuser.me/api/portraits/men/63.jpg'
    },
    {
      id: '2',
      name: 'John Joe',
      age: 21,
      email: 'jhon.joe@mail.com',
      gender: 'male',
      image: 'https://randomuser.me/api/portraits/men/63.jpg'
    },
    {
      id: '3',
      name: 'John Joe',
      age: 21,
      email: 'jhon.joe@mail.com',
      gender: 'male',
      image: 'https://randomuser.me/api/portraits/men/63.jpg'
    },
    {
      id: '4',
      name: 'John Joe',
      age: 21,
      email: 'jhon.joe@mail.com',
      gender: 'male',
      image: 'https://randomuser.me/api/portraits/men/63.jpg'
    },
    {
      id: '5',
      name: 'John Joe',
      age: 21,
      email: 'jhon.joe@mail.com',
      gender: 'male',
      image: 'https://randomuser.me/api/portraits/men/63.jpg'
    },
    {
      id: '6',
      name: 'John Joe',
      age: 21,
      email: 'jhon.joe@mail.com',
      gender: 'male',
      image: 'https://randomuser.me/api/portraits/men/63.jpg'
    },
  ];

  return(
    <Container>
      <HeaderShadow/>
      <Header>
        <HeaderTitle>USUÁRIOS</HeaderTitle>
      </Header>
      <Content>
        <List 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <UserCard data={item} />}
          ItemSeparatorComponent={() => <Separator/> }
        />
      </Content>
      <AddButton>
        <AddIcon name="plus"/>
      </AddButton>
      <Footer/>
    </Container>
  );
};