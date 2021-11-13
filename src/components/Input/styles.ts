import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 40px;

  margin: 10px 0;
`;

export const FieldInput = styled.TextInput`
  flex: 1;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};

  background-color: ${({ theme }) => theme.colors.shape};

  padding: 0 10px;

  border: 1px solid ${({ theme }) => theme.colors.primary_dark};
  border-radius: 8px;
`;

export const LabelContainer = styled.View`
  padding: 1px;

  background-color: ${({ theme }) => theme.colors.shape};

  position: absolute;
  left: 10px;
  top: -12px;

`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
`;