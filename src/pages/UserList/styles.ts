import styled from 'styled-components/native';
import { FlatList, StatusBar } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { UserProps } from '../../components/UserCard';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

  align-items: center;

  position: relative;
`;

export const Header = styled.View`
  background-color: #0091ea;

  width: 100%;
  height: ${RFValue(110)}px;

  justify-content: center;
  align-items: center;

  elevation: 5;

  position: absolute;

  top: 0;

  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const HeaderShadow = styled.View`
  background-color: ${({ theme }) => theme.colors.shadow};

  position: absolute;

  width: 100%;
  height: ${RFValue(120)}px;

  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-top: ${StatusBar.currentHeight}px; 
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  
  padding: 0 10px;
`;

export const List = styled(
  FlatList as new () => FlatList<UserProps>
).attrs({
  showsVerticalScrollIndicator: false,
  legacyImplementation: false,
  contentContainerStyle: { 
    paddingTop: RFValue(125),
    paddingBottom: 20,
    paddingHorizontal: 3
  }
})`
  flex: 1;
  width: 100%;
`;

export const Separator = styled.View`
  width: 80%;
  height: 1px;

  align-self: center;

  margin: 5px 0;

  background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  height: ${RFValue(40)}px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const AddButton = styled(RectButton)`
  width: 60px;
  height: 60px;

  border-radius: 30px;

  background-color: ${({ theme }) => theme.colors.primary_dark};

  align-items: center;
  justify-content: center;

  position: absolute;

  bottom: 10px;

  z-index: 9;

  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;

  elevation: 5;
`;

export const AddIcon = styled(Icon).attrs({

})`
  font-size: 30px;
  color: #FFF;
`;

export const CreateUserModal = styled(Modalize).attrs({
  modalTopOffset: 30,
  modalStyle: { 
    marginHorizontal: 10,
    paddingTop: 20
  }
})`
`;
