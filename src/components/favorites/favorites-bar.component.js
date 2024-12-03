import React from 'react';
import styled from 'styled-components/native';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {Spacer} from '../spacer/spacer-components';
import CompactRestaurantInfo from '../../features/restuarants/restaurant-info.component.js';

const FavoritesWrapper = styled.View`
  padding: 10px;
`;

const FavouritesBar = ({favourites, onNavigate}) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <Spacer variant="left.large">
        {/* <Test variant="caption">Favorites</Test> */}
        <Text style={{fontWeight: 'bold', fontSize: 12}}>Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map(restaurant => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate('RestaurantDetail', {restaurant})}>
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};

export default FavouritesBar;
