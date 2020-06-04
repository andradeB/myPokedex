import * as React from 'react';
import {useState} from 'react';
import IPage from '../../Models/PageInterfaces/IPage';
import Styled from 'styled-components';
import Pokemon from '../../Models/Types/Pokemon';
import PokemonCard from '../../components/PokemonCard';
import colors from '../../styles/colors';
import {padding, vh, vw} from '../../styles/metrics';
import {fontsSize, fontFamily, fontColors} from '../../styles/fonts';
import StatsTab from './tabs/StatsTab';

const ProfilePage: React.FC<IPage> = (props) => {
  const [pokemon, setPokemon] = useState<Pokemon>(props.route.params.pokemon);

  return (
    <>
      <Container
        style={{
          backgroundColor: colors.backgroundType[pokemon.primaryType],
        }}>
        <ImagePattern
          source={require('../../assets/images/profile-pattern.png')}
        />
        <ImageCircle source={require('../../assets/images/circle.png')} />
        <ContainerCard>
          <PokemonCard
            {...pokemon}
            flexDirection={'row-reverse'}
            flat={true}
            hideBackground={true}
          />
        </ContainerCard>
        <Title>Stats</Title>
        <StatsTab {...pokemon} />
      </Container>
    </>
  );
};

const ImagePattern = Styled.Image`
  position: absolute;
  top: ${vh(0.2)};
  right: 0;
  resizeMode: contain;
`;

const ImageCircle = Styled.Image`
  position: absolute;
  top: ${vh(0.07)};
  left: ${vw(0.1)};
  resizeMode: contain;
`;

const Container = Styled.View`
  flex: 1
`;

const Title = Styled.Text`
  text-align: center;
  color: white;
  font-size: ${fontsSize.h3};
  padding-bottom: ${padding.small}
`;

const ContainerCard = Styled.View`
  padding: ${padding.normal};
  padding-bottom: ${padding.small};
  
`;

export default ProfilePage;
