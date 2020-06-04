import React from 'react';
import Styled from 'styled-components';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import Pokemon from '../../Models/Types/Pokemon';
import {vw, vh} from '../../styles/metrics';
import {fontColors, fontFamily, fontsSize} from '../../styles/fonts';
import colors from '../../styles/colors';

export type Props = {
  name: string;
  base: number;
  value: number;
  min: number;
  max: number;
  color: string;
};

const PokemonStats: React.FC<Props> = (props) => {
  console.log(props);

  function getPercent(max: number, min: number, value: number) {
    const renge = max - min;
    const target = value - min;

    const x = renge / 100;

    return target / x / 100;
  }

  return (
    <Row>
      <Title>{props.name}</Title>
      <StatsNumber>{props.base}</StatsNumber>
      <Progress
        styleAttr="Horizontal"
        indeterminate={false}
        progress={getPercent(props.max, props.min, props.value)}
        color={props.color}
      />
      <StatsNumber style={{textAlign: 'right'}}>{props.min}</StatsNumber>
      <StatsNumber style={{textAlign: 'right'}}>{props.max}</StatsNumber>
    </Row>
  );
};

export default PokemonStats;

const Row = Styled.View`
  flex-direction: row;
  padding-vertical: ${vh(0.01)};  
`;

const Progress = Styled(ProgressBar)`
  flex: 1;
  margin: 0 ${vw(0.02)}
`;

const Title = Styled.Text`
  fontFamily: ${fontFamily.bold};
  fontSize: ${fontsSize.small};
  font-weight: bold;
  color: ${fontColors.dark};
  width: ${vw(0.1)};
`;

const StatsNumber = Styled.Text`
  fontFamily: ${fontFamily.regular};
  fontSize: ${fontsSize.regular};
  color: ${fontColors.grey};
  width: ${vw(0.08)};
  
`;
