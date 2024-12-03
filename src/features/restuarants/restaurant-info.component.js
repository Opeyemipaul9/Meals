import React from 'react';
import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {Text, Image} from 'react-native';
import {Test} from '../../components/typography/text.component';

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === 'android';

const CompactRestaurantInfo = ({restaurant}) => {
  return (
    <Item>
      <Image
        source={{uri: restaurant.photos[0]}}
        style={{borderRadius: 10, width: 120, height: 100}}
      />
      <Text style={{fontFamily: 'lato'}}>{restaurant.name}</Text>
    </Item>
  );
};

export default CompactRestaurantInfo;
