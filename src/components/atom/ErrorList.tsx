import React from 'react';
import Styled from 'styled-components/native';
import {fontFamily, fontColors, fontsSize} from '../../styles/fonts';
import {vh, vw} from '../../styles/metrics';
import Button from './Button';

export type Props = {
  onPress: () => void;
};

const ErrorList: React.FC<Props> = (props) => {
  return (
    <Container>
      <NotFoundImage source={require('../../assets/images/bg-error.png')} />
      <Title>Something get wrong :0 </Title>
      <ButtonContainer>
        <Button label="Refresh" onPress={props.onPress} />
      </ButtonContainer>
    </Container>
  );
};

export default ErrorList;

const ButtonContainer = Styled.View`
  width: ${vw(0.3)};
  marginTop: ${vw(0.1)}
`;

const NotFoundImage = Styled.Image`
  height: ${vh(0.2)};
  width: 100%;
  resizeMode: contain;
  opacity: 0.4;
  marginTop: ${vh(0.05)}
`;

const Container = Styled.View`
  alignItems: center;
  justifyContent: center;
`;

const Title = Styled.Text`
  fontSize: ${fontsSize.h3};
  color: ${fontColors.grey};
  marginTop: ${vh(0.05)}
`;

const Subtitle = Styled.Text`
  fontSize: ${fontsSize.regular};
  color: ${fontColors.grey};
  marginTop: ${vh(0.001)}
`;
