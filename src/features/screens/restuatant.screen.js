import React, {useState, useContext} from 'react';
import {View, FlatList} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestuarantInfoCard} from '../../components/restuarant-info.card';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Spacer} from '../../components/spacer/spacer-components';
import {SafeArea} from '../../utilities/safe-area.components';
import {RestaurantsContext} from '../../services/restuarants/restuarants.context';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;

const RestuarantListContainer = styled(View)`
  flex: 1;
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestuarantsScreen = () => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);

  const [searchQuery, setSearchQuery] = useState('');
  return (
    <SafeAreaProvider>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={MD2Colors.red800} />
          </LoadingContainer>
        )}
        <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </SearchContainer>
        <FlatList
          data={restaurants}
          renderItem={({item}) => {
            return (
              <Spacer position="bottom" size="large">
                <RestuarantInfoCard restuarant={item} />
              </Spacer>
            );
          }}
          keyExtractor={item => item.name}
          contentContainerStyle={{padding: 16}}
        />
      </SafeArea>
    </SafeAreaProvider>
  );
};

{
  /* <RestuarantListContainer>
  <RestuarantInfoCard />
</RestuarantListContainer>; */
}
