import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(110)}px;
  
  flex-direction: row;
  align-items: center;

  padding: 0 8px;

  background-color: ${({theme }) => theme.colors.shape};

  border-radius: 8px;
  border: 2px solid ${({theme }) => theme.colors.primary};

  elevation: 5;
`;

export const AvatarContainer = styled.View`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme }) => theme.colors.text};

  overflow: hidden;
`;

export const AvatarIcon = styled(Icon).attrs({
  name: 'account'
})`
  font-size: ${RFValue(60)}px;
  color: ${({theme }) => theme.colors.text};
`;

export const ProfileImage = styled.Image`
  flex: 1;
  width: 100%;
`;

export const Details = styled.View`
  margin-left: 10px;
`;

export const NameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.title};

  margin-bottom: 5px;
  margin-right: 5px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-bottom: 2px;
`;

export const GenderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const GenderIcon = styled(Icon)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};

  margin-right: 5px;
`;

export const MailContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MailIcon = styled(Icon).attrs({
  name: 'at'
})`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};

  margin-right: 5px;
`;
