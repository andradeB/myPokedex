import React from 'react';
import Styled from 'styled-components/native';
import {useState, useEffect} from 'react';
import Header from './Header';
import Button from '../../../components/atom/Button';
import Sort from '../../../Models/Types/Sort';
import {padding} from '../../../styles/metrics';

export type Props = {
  sort: Sort;
  onChange: (data: Sort) => void;
};

const SortSheet: React.FC<Props> = (props) => {
  const [buttonValue, setButton] = useState(props.sort);

  function onButtonPress(data: Sort) {
    setButton(data);
    if (props.onChange) props.onChange(data);
  }

  return (
    <Container>
      <Header
        title="Sort"
        subtile="Sort Pokémons alphabetically or by National Pokédex number!"
      />
      <Row>
        <Button
          onPress={() => onButtonPress(Sort.Smallest)}
          label="Smallest number first"
          selected={buttonValue == Sort.Smallest}
        />
      </Row>
      <Row>
        <Button
          onPress={() => onButtonPress(Sort.Highest)}
          label="Highest number first"
          selected={buttonValue == Sort.Highest}
        />
      </Row>
      <Row>
        <Button
          onPress={() => onButtonPress(Sort.Asc)}
          label="A-Z"
          selected={buttonValue == Sort.Asc}
        />
      </Row>
      <Row>
        <Button
          onPress={() => onButtonPress(Sort.Desc)}
          label="Z-A"
          selected={buttonValue == Sort.Desc}
        />
      </Row>
    </Container>
  );
};

export default SortSheet;

const Container = Styled.View`
  
`;

const Row = Styled.View`
  marginVertical: 10px
`;
