import React from 'react';
import Styled from 'styled-components/native';
import Badge from '../atom/Badged';
import Pokemon from '../../Models/Types/Pokemon';
import colors from '../../styles/colors';
import {borderRadius} from '../../styles/metrics';
import {fontFamily, fontsSize} from '../../styles/fonts';
import {vw} from '../../styles/metrics';

export interface Item extends Pokemon {
  flat: boolean;
  hideBackground: boolean;
  flexDirection: string;
}

const PokemonCard: React.FC<Item> = (props) => {
  //#region  Functions

  const getBadge = (item: any, i: number) => <Badge key={i} type={item.name} />;

  //#endregion

  //#region Renders

  const renderPatter = () =>
    !props.hideBackground ? (
      <ImagePattern source={require('../../assets/images/Pattern.png')} />
    ) : null;
  const renderPokeball = () =>
    !props.hideBackground ? (
      <ImagePokeball source={require('../../assets/images/Pokeball.png')} />
    ) : null;

  //#endregion

  const shadow = {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 7,
  };

  return (
    <Container
      style={[
        !props.flat ? shadow : null,
        {
          flexDirection: props.flexDirection,
          backgroundColor: !props.hideBackground
            ? colors.backgroundType[props.primaryType]
            : 'transparent',
          shadowColor: !props.hideBackground
            ? colors.backgroundType[props.primaryType]
            : 'transparent',
        },
      ]}>
      <Description>
        {renderPatter()}
        <TextId>#{props.id.toString().padStart(3, '0')}</TextId>
        <TextName>{props.name}</TextName>
        <BadgeContainer>{props.types.map(getBadge)}</BadgeContainer>
      </Description>
      <ImageContainer>
        {renderPokeball()}
        <PokemonImage
          source={{
            uri: props.image,
          }}
        />
      </ImageContainer>
    </Container>
  );
};

//#region Styled Components

const TextId = Styled.Text`
  color: white;
  fontFamily: ${fontFamily.bold};
  fontWeight: bold;
  fontSize: ${fontsSize.small};
  color: 'rgba(23, 23, 27, 0.6)';
`;

const TextName = Styled.Text`
  color: white;
  fontFamily: ${fontFamily.bold};
  fontWeight: bold;
  textTransform: capitalize;
  fontSize: ${fontsSize.h3};
`;

const ImagePokeball = Styled.Image`
  position: absolute;
  right: 0;
  top: 0;
  resizeMode: contain;
`;

const ImagePattern = Styled.Image`
  position: absolute;
  left: 90px;
  top: 5px;
`;

const Container = Styled.View`
  borderRadius: ${borderRadius.default};
  overflow: visible;
  marginTop: 30px;
  height: 115px;
`;

const ImageContainer = Styled.View`
  width: 130px;
  overflow: visible;
`;

const BadgeContainer = Styled.View`
  marginTop: 10px;
  flexDirection: row;
`;

const PokemonImage = Styled.Image`
  position: absolute;
  right: 10px;
  top: -20px;
  width: 120px;
  height: 120px;
  resizeMode: contain;
`;

const Description = Styled.View`
  flex: 1;
  paddingHorizontal: ${vw(0.05)};
  paddingVertical: 15px;
`;

//#endregion

export default PokemonCard;
