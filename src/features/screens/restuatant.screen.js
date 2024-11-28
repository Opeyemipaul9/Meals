import React, {useState} from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestuarantInfoCard} from '../../components/restuarant-info.card';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled(View)`
  padding: 16px;
`;
const RestuarantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestuarantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <SafeAreaProvider>
      <SafeArea>
        <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </SearchContainer>
        <RestuarantListContainer>
          <RestuarantInfoCard />
        </RestuarantListContainer>
      </SafeArea>
    </SafeAreaProvider>
  );
};
