import React, {useState, useContext} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {RestuarantInfoCard} from '../../components/restuarant-info.card';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Spacer} from '../../components/spacer/spacer-components';
import {SafeArea} from '../../utilities/safe-area.components';
import {RestaurantsContext} from '../../services/restuarants/restuarants.context';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {Search} from '../../components/search.component';
import {FavouritesContext} from '../../services/favorites/favorites.context';
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestuarantsScreen = ({navigation}) => {
  const {isLoading, restaurants} = useContext(RestaurantsContext);
  const {favorites} = useContext(FavouritesContext);
  console.log(favorites);

  return (
    <SafeAreaProvider>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={MD2Colors.red800} />
          </LoadingContainer>
        )}
        <Search />
        <FlatList
          data={restaurants}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {restaurant: item})
                }>
                <Spacer position="bottom" size="large">
                  <RestuarantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.name}
          contentContainerStyle={{padding: 16}}
        />
      </SafeArea>
    </SafeAreaProvider>
  );
};
