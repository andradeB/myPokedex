import React, {useState} from 'react';
import GenerationButton from '../../../components/GenerationButton';
import Header from './Header';
import Styled from 'styled-components';
import {padding} from '../../../styles/metrics';

export type Props = {
  generation: number;
  onChange: (data: number) => void;
};

const FilterGeneration: React.FC<Props> = (props) => {
  const [generation, setGeneration] = useState(props.generation);

  function onPressButton(generation: number) {
    setGeneration(generation);
    props.onChange(generation);
  }

  const generations = [
    {
      id: 1,
      image: require('../../../assets/images/generation-1.png'),
      label: 'Generation I',
    },
    {
      id: 2,
      image: require('../../../assets/images/generation-2.png'),
      label: 'Generation II',
    },
    {
      id: 3,
      image: require('../../../assets/images/generation-3.png'),
      label: 'Generation III',
    },
    {
      id: 4,
      image: require('../../../assets/images/generation-4.png'),
      label: 'Generation IV',
    },
    {
      id: 5,
      image: require('../../../assets/images/generation-5.png'),
      label: 'Generation V',
    },
    {
      id: 6,
      image: require('../../../assets/images/generation-6.png'),
      label: 'Generation VI',
    },
    {
      id: 7,
      image: require('../../../assets/images/generation-7.png'),
      label: 'Generation VII',
    },
    {
      id: 8,
      image: require('../../../assets/images/generation-8.png'),
      label: 'Generation VIII',
    },
  ];

  function renderItem({item}) {
    const {id, image, label} = item;
    return (
      <GenerationButton
        image={image}
        label={label}
        selected={id == generation}
        onPress={() => onPressButton(id)}
      />
    );
  }
  return (
    <>
      <Header
        title="Generations"
        subtile="Use search for generations to explore your Pokémon!"
      />
      <List
        showsVerticalScrollIndicator={false}
        data={generations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </>
  );
};

export default FilterGeneration;

const List = Styled.FlatList`
  marginTop: 5px;
`;
