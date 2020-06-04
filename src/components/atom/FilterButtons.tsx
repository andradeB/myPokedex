import * as React from 'react';
import Styled from 'styled-components/native';
import Icon from '../../assets/icons';
import {fontsSize} from '../../styles/fonts';
import {vh} from '../../styles/metrics';

export type Props = {
  onPressFilterGeneration: () => void;
  onPressSort: () => void;
  onPressFilter: () => void;
};

const FilterButtons: React.FC<Props> = (props) => {
  return (
    <FilterContainer>
      <Button onPress={() => props.onPressFilterGeneration()}>
        <HeaderButtonIcon name="generation" />
      </Button>

      <Button onPress={() => props.onPressSort()}>
        <HeaderButtonIcon name="sort" />
      </Button>

      <Button onPress={() => props.onPressFilter()}>
        <HeaderButtonIcon name="filter" />
      </Button>
    </FilterContainer>
  );
};

const Button = Styled.TouchableOpacity`
  padding: ${vh(0.005)};
`;

const FilterContainer = Styled.View`
  flexDirection: row;
  justifyContent: flex-end;
  paddingBottom: ${vh(0.02)};
`;
const HeaderButtonIcon = Styled(Icon)`
  fontSize: ${fontsSize.h3};
  marginLeft: ${vh(0.04)};
`;

export default FilterButtons;
