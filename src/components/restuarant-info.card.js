import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import star from '../../assets/star';
import open from '../../assets/open';
import {Spacer} from '../components/spacer/spacer-components';
import {View} from 'react-native';
import {Favourite} from './favorites/favorites.components';
import {
  Icon,
  RestuarantCard,
  RestuarantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Address,
} from './restuarant-info-card.styles';

export const RestuarantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Hanjo Place',
    icons = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp',
    ],
    vicinity = 'Beverly Hills',
    openingHours = true,
    rating = 3,
    isOpenNow = true,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestuarantCard elevation={5}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestuarantCardCover
          key={name}
          style={styles.cover}
          source={{uri: photos[0]}}
        />
      </View>
      <Info>
        <Text style={{fontFamily: 'Lato'}}>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`star-${placeId}-${index}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text
                style={{color: 'red', fontWeight: 'bold', fontFamily: 'Lato'}}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{uri: icons}} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{vicinity}</Address>
      </Info>
    </RestuarantCard>
  );
};

const styles = StyleSheet.create({});
