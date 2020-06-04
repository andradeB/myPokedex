import React from 'react';
import {Image} from 'react-native';
import Styled from 'styled-components';
import {borderRadius} from '../../styles/metrics';
import {fontFamily, fontColors, fontsSize} from '../../styles/fonts';

interface IButton {
  selected?: boolean;
  image: any;
  label: string;
  onPress: () => void;
}

const GenerationButton: React.FC<IButton> = (props) => {
  return (
    <Button
      onPress={props.onPress}
      style={{backgroundColor: props.selected ? '#EA5D60' : '#F2F2F2'}}>
      <ImageGeneration source={props.image} />
      <ImagePokeball
        source={require('../../assets/images/generation-pokeball.png')}
      />
      <Label style={{color: props.selected ? 'white' : null}}>
        {props.label}
      </Label>
      <ImagePattern
        source={require('../../assets/images/generation-pattern.png')}
      />
    </Button>
  );
};
const Button = Styled.TouchableOpacity`
  borderRadius: ${borderRadius.default};
  height: 130px;
  flex: 1;
  alignItems: center;
  justifyContent: center;
  margin: 5px;
`;

const Label = Styled.Text`
  fontFamily: ${fontFamily.regular};
  fontSize: ${fontsSize.regular};
  color: ${fontColors.grey};
`;

const ImagePokeball = Styled.Image`
  position: absolute;
  width: 110px;
  height: 110px;
  right: 0px;
  bottom: -20px;
  resizeMode: contain;
`;

const ImagePattern = Styled.Image`
  position: absolute;
  width: 80px;
  height: 35px;
  left: 15px;
  top: 10px;
`;

const ImageGeneration = Styled.Image`
  width: 124px;
  height: 45px
`;

export default GenerationButton;
