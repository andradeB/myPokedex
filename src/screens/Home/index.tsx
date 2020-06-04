import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Styled from 'styled-components/native';
import {ActivityIndicator, View, Text} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import FilterGenerationSheet from './sheets/FilterGenerationSheet';
import SortSheet from './sheets/SortSheet';
import IPage from '../../Models/PageInterfaces/IPage';
import FilterButtons, {Props} from '../../components/atom/FilterButtons';
import Search from '../../components/atom/Search';
import {fontFamily, fontColors, fontsSize} from '../../styles/fonts';
import {padding, borderRadius, vh} from '../../styles/metrics';
import PokemonService from '../../service/PokemonService';
import Pokemon from '../../Models/Types/Pokemon';
import Filter from '../../Models/Types/Filter';
import Sort from '../../Models/Types/Sort';
import {SetData} from '../../store/Filter/actions';
import FilterSheet from './sheets/FilterSheet';
import {vw} from '../../styles/metrics';
import NotFound from '../../components/atom/NotFound';
import ErrorList from '../../components/atom/ErrorList';
import PokemonCard from '../../components/atom/PokemonCard';

const container = {
  backgroundColor: 'transparent',
};

const draggableIcon = {
  backgroundColor: 'white',
};

const HomePage: React.FC<IPage> = (props) => {
  //#region  Properties
  const filter = useSelector<Filter>((state) => state.filter);
  const dispatch = useDispatch();

  const [data, setData] = useState<Array<Pokemon>>([]);
  const [isLoading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [hasError, setError] = useState(false);

  const filterRef = useRef<RBSheet>();
  const filterGenerationRef = useRef<RBSheet>();
  const sortRef = useRef<RBSheet>();

  const filterActions: Props = {
    onPressFilter: () => filterRef.current?.open(),
    onPressFilterGeneration: () => filterRef.current?.open(),
    onPressSort: () => sortRef.current?.open(),
  };

  //#endregion

  //#region Functions

  function restartListMessages() {
    setNotFound(false);
    setError(false);
    setLoading(false);
  }

  async function loadItem() {
    setLoading(true);
    try {
      let newData = null;

      if (PokemonService.next && data.length) {
        const res = await PokemonService.FindNext();
        newData = data.concat(res.map((x: any) => Pokemon.fromJson(x.data)));
      } else {
        const res = await PokemonService.Find();
        newData = res.map((x: any) => Pokemon.fromJson(x.data));
      }
      restartListMessages();
      setData(newData);
    } catch {
      setLoading(false);
      setError(true);
    }
  }

  const setSort = (sort: Sort) => dispatch(SetData({...filter, sort}));

  const setGeneration = (generation: number) =>
    dispatch(SetData({...filter, generation}));

  useEffect(() => {
    loadItem();
  }, []);

  async function searchPokemon(name: string) {
    setLoading(true);
    if (name) {
      try {
        const response = await PokemonService.FindOne(name);
        const data = Pokemon.fromJson(response);
        restartListMessages();
        setData([data]);
      } catch (e) {
        setData([]);
        setLoading(false);
        setNotFound(true);
      }
    }
  }

  const pusToProfile = (pokemon: Pokemon) =>
    props.navigation.navigate('Details', {pokemon: pokemon});

  //#endregion

  //#region Renders
  function renderHeader() {
    return (
      <>
        <FilterButtons {...filterActions} />
        <Title>Pokédex</Title>
        <TextNormal>
          Search for Pokémon by name or using the national Pokédex number.
        </TextNormal>
        <Search
          placeholder="What Pokémon are you looking for ?"
          onSubmitEditing={searchPokemon}
          debounce={500}
        />
      </>
    );
  }

  function renderItem({item}: any) {
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => pusToProfile(item)}>
        <PokemonCard {...item} flexDirection={'row'} />
      </TouchableOpacity>
    );
  }

  function renderEmpty() {
    if (notFound) return <NotFound onPress={() => loadItem()} />;
    if (hasError) return <ErrorList onPress={() => loadItem()} />;
    return null;
  }

  function renderFooter() {
    if (!isLoading) return null;

    return (
      <View
        style={{
          justifyContent: 'center',
          marginTop: 30,
          marginBottom: 80,
        }}>
        <ActivityIndicator size="large" color="#EA5D60" />
      </View>
    );
  }

  //#endregion

  return (
    <View>
      <BackgroundHeader source={require('../../assets/images/bg_home.png')} />
      <List
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: Item) => item.id}
        onEndReached={() => {
          if (data.length != 1) {
            loadItem();
          } else {
            console.log('no');
          }
        }}
        onEndReachedThreshold={0.3}
      />
      <RBSheet
        customStyles={{
          container,
          draggableIcon,
        }}
        height={550}
        closeOnDragDown={true}
        dragFromTopOnly={true}
        ref={filterGenerationRef}>
        <Sheet>
          <FilterGenerationSheet
            onChange={setGeneration}
            generation={filter.generation}
          />
        </Sheet>
      </RBSheet>
      <RBSheet
        customStyles={{
          container,
          draggableIcon,
        }}
        height={500}
        closeOnDragDown={true}
        dragFromTopOnly={true}
        ref={sortRef}>
        <Sheet>
          <SortSheet onChange={setSort} sort={filter.sort} />
        </Sheet>
      </RBSheet>
      <RBSheet
        customStyles={{
          container,
          draggableIcon,
        }}
        height={550}
        closeOnDragDown={true}
        dragFromTopOnly={true}
        ref={filterRef}>
        <Sheet>
          <FilterSheet />
        </Sheet>
      </RBSheet>
    </View>
  );
};

//#region Styled Components
const Sheet = Styled.View`
  background-color: white;
  padding-horizontal: ${padding.normal};
  padding-vertical: ${padding.small};
  border-top-left-radius: ${borderRadius.large};
  border-top-right-radius: ${borderRadius.large};
`;

const Title = Styled.Text`
    margin-top: ${vw(0.1)};
    fontFamily: ${fontFamily.bold};
    fontSize: ${fontsSize.h2};
    fontWeight: bold;
    color: ${fontColors.dark};
`;

const TextNormal = Styled.Text`
    fontFamily: ${fontFamily.regular};
    fontSize: ${fontsSize.regular};
    color: ${fontColors.grey};
    marginBottom: 30px;
    marginTop: 10px
`;

const BackgroundHeader = Styled.Image`
    position: absolute;
`;

const List = Styled.FlatList`
    padding: 40px;
    paddingBottom: 0;
    marginBottom: 10px;
`;

//#endregion

export default HomePage;
