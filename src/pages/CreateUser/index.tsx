import React, { useState } from 'react';
import { CameraOptions, launchImageLibrary } from 'react-native-image-picker';

import { 
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

import { Input } from '../../components/Input';


export function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');
  
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  let options: CameraOptions = {
    mediaType: 'photo',
    includeBase64: true
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

  return(
    <Container>
      <Title>CRIAR USUÁRIO</Title>
      <Separator/>
        <PickImageButton onPress={() => launchImageLibrary(options, (response) => {
          if(response.didCancel){
            console.log('cancel clicked');
          }else if(response.errorMessage) {
            console.log(response.errorMessage)
          }else if(response.assets){
            console.log(String(response.assets[0].uri))
          }
        })} >
          <PickImageIcon/>
          <PickImageLabel>SELECIONAR FOTO</PickImageLabel>
        </PickImageButton>
      <Form>
        <Input label="Nome" type="text"  value={name} onChangeText={setName} />
        <Input label="Email" type="email" value={email} onChangeText={setEmail} />
        <Input label="Nascimento" type="date" value={date} onChangeText={setDate} />
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
          <Button>
            <ButtonTitle>CRIAR</ButtonTitle>
          </Button>
      </Form>
    </Container>
  );
};