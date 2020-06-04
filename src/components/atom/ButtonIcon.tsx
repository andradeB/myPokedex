import React from 'react';
import Icon from '../../assets/icons';
import colors from '../../styles/colors';
import {vh, vw} from '../../styles/metrics';
import Styled from 'styled-components';

export type Props = {
  type: string;
  selected: boolean;
  onPress: () => void;
};

const ButtonIcon: React.FC<Props> = (props) => {
  const Container = Styled.TouchableOpacity`
    marginRight: ${vw(0.02)};
    width: ${vw(0.1)};
    height: ${vw(0.1)};
    borderRadius: ${vw(0.05)};

    flexDirection: row;
    alignItems: center;
    justifyContent: center;
  }`;

  return (
    <Container
      onPress={props.onPress}
      style={{
        backgroundColor: props.selected
          ? colors.type[props.type] || colors.backgroundType[props.type]
          : 'transparent',
      }}>
      <Icon
        name={props.type}
        size={25}
        color={
          props.selected
            ? 'white'
            : colors.type[props.type] || colors.backgroundType[props.type]
        }
      />
    </Container>
  );
};

export default ButtonIcon;
