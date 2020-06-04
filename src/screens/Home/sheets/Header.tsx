import React from 'react';
import Styled from 'styled-components';
import {fontColors, fontsSize, fontFamily} from '../../../styles/fonts';

export type Props = {
  title: string;
  subtile: string;
};

const Header: React.FC<Props> = (props) => {
  return (
    <>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtile}</Subtitle>
    </>
  );
};

const Title = Styled.Text`
  color: ${fontColors.dark};
  marginBottom: 10px;
  fontFamily: ${fontFamily.bold};
  fontSize: ${fontsSize.h3};
`;

const Subtitle = Styled.Text`
  fontFamily: ${fontFamily.regular};
  fontSize: ${fontsSize.regular};
  color: ${fontColors.grey};
  marginBottom: 10px
`;

export default Header;
