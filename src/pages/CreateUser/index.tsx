import React, { useState } from 'react';
import { Alert } from 'react-native';
import { launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import uuid from 'react-native-uuid';

import { 
  Avatar,
  Button, 
  ButtonTitle, 
  Container, 
  Form, 
  GenderContainer, 
  GenderLabel, 
  GenderLabelContainer, 
  PickImageButton, 
  PickImageIcon, 
  PickImageLabel, 
  RadioButton, 
  RadioContainer, 
  RadioLabel, 
  Separator, 
  Title 
} from './styles';

import { database } from '../../database';
import { User } from '../../database/model/Users';

import { Input } from '../../components/Input';
import { getTimestamp } from '../../utils/DateFormatter';

export type FormDataProps = {
  name: string;
  email: string;
  birth: string;
}

type Props = {
  closeModal: () => void;
  getUsers: () => void;
}

const schema = Yup.object({
  name: Yup.string()
  .required('Digite o nome do usuário!'),

  email: Yup.string()
  .email('Email inválido!')
  .required('Digite o email!'),

  birth: Yup.string()
  .min(10, 'Data de nascimento inválida!')
  .required('Digite a data de nascimento!')
});

export function CreateUser({ closeModal, getUsers }: Props) {
  const [avatar, setAvatar] = useState('');
  const [gender, setGender] = useState('');
  
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  const { 
    control, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormDataProps>({
    resolver: yupResolver(schema)
  });

  function handleSetAvatar(response: ImagePickerResponse) {
    if(response.didCancel){
      return
    }else if(response.errorMessage) {
      Alert.alert(response.errorMessage)
    }else if(response.assets){
      setAvatar(response.assets[0].uri!)
    }
  }

  function handleSetGenderMale() {
    setGender('male');
    setMale(true);
    setFemale(false);
  }
  function handleSetGenderFemale() {
    setGender('female');
    setFemale(true);
    setMale(false);
  }

  async function handleCreateUser(form: FormDataProps) {
    if(gender === '') {
      Alert.alert('Selecione o gênero!')
      return
    }

    const timestamp = getTimestamp(form.birth);
    const birth = new Date(timestamp).getTime();

    if(birth > new Date().getTime()) {
      Alert.alert('Data de nascimento inválida!')
      return
    }
    
    const data = {
      user_id: String(uuid.v4()),
      name: form.name,
      email: form.email,
      birth: timestamp,
      gender,
      avatar
    };

    try {
      const userCollection = database.get<User>('users');
      await database.write(async () => {
        await userCollection.create(( newUser ) => {
          newUser.user_id = data.user_id,
          newUser.name = data.name,
          newUser.email = data.email,
          newUser.birth = data.birth,
          newUser.gender = data.gender,
          newUser.avatar = data.avatar
        })
      })
    } catch (error) {
      console.log(error)
    } finally {
      getUsers();
      closeModal();
    };

  }

  return(
    <Container>
      <Title>CRIAR USUÁRIO</Title>
      <Separator/>
        <PickImageButton onPress={() => launchImageLibrary({ mediaType: 'photo', quality: 1 }, handleSetAvatar)}>
          { !!avatar ?
            <Avatar source={{ uri: avatar }} />
          : 
          <>
            <PickImageIcon/>
            <PickImageLabel>SELECIONAR FOTO</PickImageLabel>
          </>
          }
        </PickImageButton>
      <Form>
        <Input label="Nome" control={control} name="name" error={errors.name && errors.name.message}/>
        <Input label="Email" control={control} name="email" error={errors.email && errors.email.message}/>
        <Input label="Nascimento" control={control} name="birth" error={errors.birth && errors.birth.message}/>
        <GenderContainer>
          <GenderLabelContainer>
            <GenderLabel>Gênero</GenderLabel>
          </GenderLabelContainer>
          <RadioContainer onPress={handleSetGenderMale}>
            <RadioButton isSelected={male}/>
            <RadioLabel>Masculino</RadioLabel>
          </RadioContainer>
          <RadioContainer onPress={handleSetGenderFemale}>
            <RadioButton isSelected={female}/>
            <RadioLabel>Feminino</RadioLabel>
          </RadioContainer>
        </GenderContainer>
        {/* RectButton's onPress reports a typing error with ReactHookForm's handleSubmit function (This doesn't happen with TouchableOpacity.)
         @ts-ignore  */}
          <Button onPress={handleSubmit(handleCreateUser)}>
            <ButtonTitle>CRIAR</ButtonTitle>
          </Button>
      </Form>
    </Container>
  );
};