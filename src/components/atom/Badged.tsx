import * as React from 'react';
import Styled from 'styled-components/native';
import {fontsSize} from '../../styles/fonts';
import {vh, vw} from '../../styles/metrics';

import Icon from '../../assets/icons';
import colors from '../../styles/colors';

type Props = {
  type: string;
};

const Badge: React.FC<Props> = (props) => {
  return (
    <Container style={{backgroundColor: colors.type[props.type]}}>
      <IconBadge name={props.type} color="white" />
      <Label>{props.type}</Label>
    </Container>
  );
};

const Container = Styled.View`
  marginRight: ${vw(0.02)};
  width: ${vw(0.15)};
  flexDirection: row;
  alignItems: center;
  height: ${vw(0.06)};
  borderRadius: 3px;
`;

const Label = Styled.Text`
  flex: 1;
  color: white;
  textAlign: center;
  fontSize: ${fontsSize.small};
  textTransform: capitalize;
`;

const IconBadge = Styled(Icon)`
  marginLeft: 6px
`;

export default Badge;
