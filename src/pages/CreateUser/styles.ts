import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type RadioButtonProps = {
  isSelected?: boolean;
}

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
  keyboardVerticalOffset: 30
})`
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Separator = styled.View`
  width: 90%;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.shadow_light};

  margin: 5px 0;
`;

export const PickImageButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: ${RFValue(130)}px;
  height: ${RFValue(130)}px;

  margin: 20px;

  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary_dark};

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};

  position: relative;
  
  overflow: hidden;
`;

export const Avatar = styled.Image`
  flex: 1;
  width: 100%;
`;

export const PickImageIcon = styled(Icon).attrs({
  name: 'account-plus-outline'
})`
  font-size: ${RFValue(100)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const PickImageLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 10px;

  color: ${({ theme }) => theme.colors.title};
  position: absolute;

  bottom: 0;
`;

export const Form = styled.View`
  width: 80%;
`;

export const GenderContainer = styled.View`
  width: 100%;

  margin-top: 10px;
  padding: 30px 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme.colors.primary_dark};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const GenderLabelContainer = styled.Text`
  padding: 1px;

  background-color: ${({ theme }) => theme.colors.shape};

  position: absolute;
  left: 10px;
  top: -12px;
`;

export const GenderLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const RadioContainer = styled.TouchableOpacity`
  flex: 1;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RadioButton = styled.View<RadioButtonProps>`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;

  background-color: ${({ theme, isSelected }) => isSelected === true ? theme.colors.primary : theme.colors.shape};

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.title};
`;

export const RadioLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-left: 5px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: ${RFValue(50)}px;

  margin-top: 20px;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  
  color: ${({ theme }) => theme.colors.shape};
`;