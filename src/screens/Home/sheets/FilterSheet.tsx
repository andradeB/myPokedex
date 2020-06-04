import React, {useState} from 'react';
import {View} from 'react-native';
import Button from '../../../components/Button';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import ButtonIcon from '../../../components/ButtonIcon';
import Styled from 'styled-components';
import Header from './Header';
import {vh, vw} from '../../../styles/metrics';
import colors from '../../../styles/colors';
import PokemonTypes from '../../../Models/Types/PokemonTypes';
import Weight from '../../../Models/Types/Weight';
import Height from '../../../Models/Types/Height';
import Filter from '../../../Models/Types/Filter';

export type Props = {
  filter: Filter;
  onSubmit: (data: Filter) => void;
};

const FilterSheet: React.FC<Props> = (props) => {
  const [selectedTypes, setTypes] = useState<Array<PokemonTypes>>([]);
  const [selectedweaknesses, setweaknesses] = useState<Array<PokemonTypes>>([]);
  const [selectedHeight, setHeight] = useState<Array<Height>>([]);
  const [selectedWeight, setWeight] = useState<Array<Weight>>([]);

  const types: Array<PokemonTypes> = Object.keys(PokemonTypes).map(
    (x) => PokemonTypes[x],
  );
  const heights: Array<Height> = Object.keys(Height).map((x) => Height[x]);
  const weights: Array<Weight> = Object.keys(Weight).map((x) => Weight[x]);

  function onSelectType(data: PokemonTypes) {
    if (!selectedTypes.some((x) => x == data)) {
      setTypes([...selectedTypes, data]);
    } else {
      setTypes(selectedTypes.filter((x) => x != data));
    }
  }

  function onSelectWeaknesses(data: PokemonTypes) {
    if (!selectedweaknesses.some((x) => x == data)) {
      setweaknesses([...selectedweaknesses, data]);
    } else {
      setweaknesses(selectedweaknesses.filter((x) => x != data));
    }
  }

  function onSelectHeights(data: Height) {
    if (!selectedHeight.some((x) => x == data)) {
      setHeight([...selectedHeight, data]);
    } else {
      setHeight(selectedHeight.filter((x) => x != data));
    }
  }

  function onSelectWeights(data: Weight) {
    if (!selectedWeight.some((x) => x == data)) {
      setWeight([...selectedWeight, data]);
    } else {
      setWeight(selectedWeight.filter((x) => x != data));
    }
  }

  function getButtonsIcon(range, selecteds, action: (data: any) => void) {
    return range.map((x, i) => {
      return (
        <ItemScroll>
          <ButtonIcon
            key={i}
            type={x}
            onPress={() => action(x)}
            selected={selecteds.some((y) => x == y)}
          />
        </ItemScroll>
      );
    });
  }

  return (
    <>
      <Header
        title="Filter"
        subtile="Use advanced search to explore Pokémon by type, weakness, height and
        more!"
      />
      <Container showsVerticalScrollIndicator={false}>
        <Subtitle>Types</Subtitle>
        <ScrollSection showsHorizontalScrollIndicator={false} horizontal={true}>
          {getButtonsIcon(types, selectedTypes, onSelectType)}
        </ScrollSection>

        <Subtitle>Weaknesses</Subtitle>
        <ScrollSection showsHorizontalScrollIndicator={false} horizontal={true}>
          {getButtonsIcon(types, selectedweaknesses, onSelectWeaknesses)}
        </ScrollSection>

        <Subtitle>Heights</Subtitle>
        <ScrollSection showsHorizontalScrollIndicator={false} horizontal={true}>
          {getButtonsIcon(heights, selectedHeight, onSelectHeights)}
        </ScrollSection>

        <Subtitle>Weights</Subtitle>
        <ScrollSection showsHorizontalScrollIndicator={false} horizontal={true}>
          {getButtonsIcon(weights, selectedWeight, onSelectWeights)}
        </ScrollSection>

        <Subtitle>Number Range</Subtitle>
        <Row>
          <MultiSlider
            min={0}
            trackStyle={{
              backgroundColor: colors.button.secondary,
            }}
            selectedStyle={{
              backgroundColor: colors.button.primary,
              height: 5,
            }}
            customMarkerLeft={(e) => {
              return <Marker currentValue={e.currentValue} />;
            }}
            customMarkerRight={(e) => {
              return <Marker currentValue={e.currentValue} />;
            }}
            enableLabel={true}
            values={[0, 1000]}
            max={1000}
            isMarkersSeparated={true}
          />
        </Row>

        <Row>
          <View style={{flex: 1, marginRight: 10}}>
            <Button selected={false} label="Reset" />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Button selected={true} label="Apply" onPress={props.onSubmit} />
          </View>
        </Row>
      </Container>
    </>
  );
};

const Marker = Styled.View`
  height: ${vw(0.05)};
  width: ${vw(0.05)};
  borderRadius: ${vw(0.025)};
  border: solid ${colors.button.primary} ${vw(0.012)};
  background: white;
`;

const ItemScroll = Styled.View`
  marginRight: ${vh(0.03)};
`;

const Container = Styled.ScrollView`
`;

const Subtitle = Styled.Text`
  marginTop: ${vh(0.03)};
`;

const Row = Styled.View`
  flexDirection: row;
  justify-content: center;
`;

const ScrollSection = Styled.ScrollView`
`;

export default FilterSheet;
