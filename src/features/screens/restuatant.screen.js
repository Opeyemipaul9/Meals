import React, {useState} from 'react';
import {View, StyleSheet, Text, StatusBar, FlatList} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestuarantInfoCard} from '../../components/restuarant-info.card';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Spacer} from '../../components/spacer/spacer-components';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled(View)`
  padding: ${props => props.theme.space[3]};
`;
const RestuarantListContainer = styled(View)`
  flex: 1;
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

const RestuarantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestuarantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <SafeAreaProvider>
      <SafeArea style={{borderWidth: 2}}>
        <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </SearchContainer>
        <RestuarantList
          data={[
            {name: 1},
            {name: 2},
            {name: 3},
            {name: 4},
            {name: 5},
            {name: 6},
            {name: 7},
            {name: 8},
            {name: 9},
            {name: 10},
            {name: 11},
            {name: 12},
            {name: 13},
            {name: 14},
          ]}
          renderItem={() => (
            <Spacer position="bottom" size="large">
              <RestuarantInfoCard />
            </Spacer>
          )}
          keyExtractor={item => item.name}
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
