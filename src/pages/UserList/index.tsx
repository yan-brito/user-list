import React, { useRef, useEffect, useState } from 'react';
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
  Loading,
  Notification,
  Separator
} from './styles';

import { UserCard, UserProps } from '../../components/UserCard';
import { CreateUser } from '../CreateUser';
import { database } from '../../database';
import { User } from '../../database/model/Users';
import { getAge } from '../../utils/DateFormatter';

export function UserList() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [isLoading, setLoading] = useState(true);

  const modalizeRef = useRef<Modalize>(null);

  async function getUsers() {
    setLoading(true);

    try {
      const userCollection = database.get<User>('users');
      const users = await userCollection.query().fetch();

      const usersFormatted: UserProps[] = users.map((user) => {
        const userData = user._raw as unknown as UserProps; //typescript force typing hack

        const age = getAge(userData.birth);

        return {
          id: userData.id,
          name: userData.name,
          birth: userData.birth,
          age,
          email: userData.email,
          gender: userData.gender,
          avatar: userData.avatar
        }
      });

      setUsers(usersFormatted);

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  function handleOpenCreateUserModal() {
    modalizeRef.current?.open();
  };
  
  function handleCloseCreateUserModal() {
    modalizeRef.current?.close();
  };

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <Container>
        <HeaderShadow />
        <Header>
          <HeaderTitle>USUÁRIOS</HeaderTitle>
        </Header>
        <Content>
          { isLoading ?
            <Loading/>
            :
            ( !users.length ?
              <Notification>Não há usuários cadastrados.</Notification>
              :
              <List
                data={users}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <UserCard data={item} />}
                ItemSeparatorComponent={() => <Separator />}
              />
            )
          }
        </Content>
        <AddButton onPress={handleOpenCreateUserModal} >
          <AddIcon name="plus" />
        </AddButton>
        <Footer />
      </Container>
      <CreateUserModal
        ref={modalizeRef}
        children={<CreateUser getUsers={getUsers} closeModal={handleCloseCreateUserModal} />}
      />
    </>
  );
};