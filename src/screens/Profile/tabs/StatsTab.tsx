import * as React from 'react';
import {useEffect, useState} from 'react';
import Styled from 'styled-components';
import Pokemon from '../../../Models/Types/Pokemon';
import colors from '../../../styles/colors';
import {borderRadius, padding} from '../../../styles/metrics';
import {fontColors, fontFamily, fontsSize} from '../../../styles/fonts';
import PokemonStats, {
  Props as StatsProps,
} from '../../../components/PokemonStats';
import Stats from '../../../Models/Types/Stats';
import {calculateHp, calculateStats} from '../../../utils';

const StatsTab: React.FC<Pokemon> = (props) => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const hp = getRengeHp(props.hp);
    const attack = getRengeStatus(props.attack);
    const defense = getRengeStatus(props.defense);
    const specialAttack = getRengeStatus(props.specialAttack);
    const specialDefense = getRengeStatus(props.specialDefense);
    const speed = getRengeStatus(props.speed);

    setStats([hp, attack, defense, specialAttack, specialDefense, speed]);
  }, []);

  function getRengeStatus(data: Stats) {
    const iv = Math.random() * (31 - 1) + 1;
    const lvl = Math.random() * (100 - 1) + 1;

    const {min, max, value} = calculateStats(
      lvl,
      data.base,
      data.effort,
      iv,
      1.1,
    );

    const {base, name} = data;
    return {min, max, value, base, name};
  }

  function getRengeHp(data: Stats) {
    const iv = Math.random() * (31 - 1) + 1;
    const {min, max, value} = calculateHp(100, data.base, data.effort, iv);
    const {base, name} = data;

    return {name, min, max, value, base};
  }

  return (
    <TabContainer>
      <Label style={{color: colors.backgroundType[props.primaryType]}}>
        Base Stats
      </Label>
      {stats.map((x) => (
        <PokemonStats {...x} />
      ))}
    </TabContainer>
  );
};

export default StatsTab;

const TabContainer = Styled.View`
  flex: 1;
  background-color: white;  
  padding: ${padding.normal};
  border-top-left-radius: ${borderRadius.large};
  border-top-right-radius: ${borderRadius.large};
`;

const Label = Styled.Text`
  font-size: ${fontsSize.regular};
  font-family: ${fontFamily.bold};
  font-weight: bold;
`;
