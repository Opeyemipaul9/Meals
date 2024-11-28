import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components';

const Title = styled(Text)`
  padding: 16px;
  color: red;
`;
const RestuarantCard = styled(Card)`
  background-color: white;
`;

const RestuarantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

export const RestuarantInfoCard = ({restuarant = {}}) => {
  const {
    name = 'Hanjo Place',
    icon,
    photos = [
      'https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp',
    ],
    address = 'Beverly Hills',
    openingHours = true,
    rating = 4,
    icClosedTemporarily,
  } = restuarant;
  return (
    <RestuarantCard elevation={5}>
      <RestuarantCardCover
        key={name}
        style={styles.cover}
        source={{uri: photos[0]}}
      />
      <Title>{name}</Title>
    </RestuarantCard>
  );
};

const styles = StyleSheet.create({});
