import React from 'react';
import Styled from 'styled-components/native';
import {borderRadius} from '../styles/metrics';
import {fontsSize, fontFamily, fontColors} from '../styles/fonts';

interface IButton {
  label: string;
  selected?: boolean;
  onPress: () => void;
}

const Button: React.FC<IButton> = (props) => {
  return (
    <Container
      onPress={props.onPress}
      style={{backgroundColor: props.selected ? '#EA5D60' : '#F2F2F2'}}>
      <Label style={{color: props.selected ? 'white' : null}}>
        {props.label}
      </Label>
    </Container>
  );
};

export default Button;

const Label = Styled.Text`
  fontFamily: ${fontFamily.regular};
  fontSize: ${fontsSize.regular};
  color: ${fontColors.grey};
`;

const Container = Styled.TouchableOpacity`
  borderRadius: ${borderRadius.default};
  height: 60px;
  alignItems: center;
  justifyContent: center;
`;
