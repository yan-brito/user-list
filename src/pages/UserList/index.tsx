import React, { useRef } from 'react';
import { Modalize } from 'react-native-modalize';

import { 
  AddButton, 
  AddIcon, 
  Container, 
  Content, 
  CreateUserModal, 
  Footer, 
  Header, 
  HeaderShadow, 
  HeaderTitle, 
  List,
  Separator
} from './styles';

import { UserCard, UserProps } from '../../components/UserCard';
import { CreateUser } from '../CreateUser';

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

  const modalizeRef = useRef<Modalize>(null);

  function handleOpenCreateUserModal() {
    modalizeRef.current?.open();
  };


  return(
    <>
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
        <AddButton onPress={handleOpenCreateUserModal} >
          <AddIcon name="plus"/>
        </AddButton>
        <Footer/>
      </Container>
      <CreateUserModal 
        ref={modalizeRef} 
        children={<CreateUser/>}
      />
    </>
  );
};